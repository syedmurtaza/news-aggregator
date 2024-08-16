import { useState, useEffect, useRef } from 'react';
import NewsFactory from '../factories/NewsFactory';
import QueryMakerHelper from "../helpers/QueryMakerHelper";

const useFetchNews = (filters) => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);
    const prevFiltersRef = useRef();

    useEffect(() => {
        const fetchAllNews = async () => {

            if (JSON.stringify(prevFiltersRef.current) === JSON.stringify(filters)) {
                return;
            }

            const newsData = {};
            setLoading(true);

            const sources = filters.selectedSource.map(source => source.value);
            const section = filters.selectedSection ? filters.selectedSection.value : "";

            await Promise.all(
                sources.map(async (source) => {
                   
                    try {
                        const newsService = NewsFactory.createNewsService(source);
                        const q = QueryMakerHelper(source, section, filters.startDate, filters.endDate);
                        const data = await newsService.getNews(q, section);
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