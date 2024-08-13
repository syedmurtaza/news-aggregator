import axios from 'axios';
import {NEWS_API_URL, NEWS_API_KEY} from '../constants/config';

class NewsAPI {
    constructor() {
        this.apiUrl = NEWS_API_URL;
        this.apiKey = NEWS_API_KEY; 
    }

    async getNews(section, q) {

        try {
            const response = await axios.get(this.apiUrl, {
                params: {
                    q: section,
                    'apiKey': this.apiKey,
                },
            });
            
           
            return response.data?.articles;
        } catch (error) {
            console.error('Error fetching NEWSAPI NEWS:', error);
            return [];
        }
    }
}

export default NewsAPI;