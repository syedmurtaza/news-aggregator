import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPIHook = (apiUrl, apiKey, section, type) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                const response = await axios.get(apiUrl, {
                    params: {
                        q: section,
                        apiKey: apiKey,
                    },
                });

                switch (type) {
                    case 'newsapi':
                        setArticles(response.data?.articles || []);

                    case 'nyt':

                        setArticles(response.data?.results || []);

                    case 'grd':
                        setArticles(response.data?.response?.results || []);
                }

            } catch (err) {
                console.error('Error fetching NEWS:', err);
                setError(err);
                setArticles([]);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once

    //return { articles, error, loading };
    return { articles, error };
};

export default useAPIHook;
