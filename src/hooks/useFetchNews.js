import { useState, useEffect, useRef } from 'react';
import NewsFactory from '../factories/NewsFactory';
import QueryMakerHelper from "../utils/QueryMakerHelper";

const useFetchNews = (filters) => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);
    const prevFiltersRef = useRef();
    
    useEffect(() => {
        const fetchAllNews = async () => {
            if (JSON.stringify(prevFiltersRef.current) === JSON.stringify(filters)) {
                return; // Skip if filters haven't changed
            }

            const newsData = {};
            setLoading(true);
            
            const sources = filters.selectedSource.map(source => source.value);
            const section = filters.selectedSection ? filters.selectedSection.value : "business";
            const size = filters.size ? filters.size.value : "10";
           
            await Promise.all(
                sources.map(async (source) => {
                    
                    try {
                        const newsService = NewsFactory.createNewsService(source);
                        const q =  QueryMakerHelper(source, section, filters.startDate, filters.endDate, size);
                        const data = await newsService.getNews(section, q);
                        newsData[source] = data;
                    } catch (error) {
                        console.error(`Error fetching news from ${source}:`, error);
                    }
                })
            );

            setNews(newsData);
            setLoading(false);
            prevFiltersRef.current = filters;

        };

        fetchAllNews();
    }, [filters]);

    return { news, loading };

};

export default useFetchNews;