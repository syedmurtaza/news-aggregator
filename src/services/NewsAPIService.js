import axios from 'axios';
import { NEWS_API_URL, NEWS_API_KEY } from '../constants/Constants';

class NewsAPI {
    constructor() {
        this.apiUrl = NEWS_API_URL;
        this.apiKey = NEWS_API_KEY;
    }

    async getNews(q, section) {

        try {

            this.apiUrl += `?apiKey=${this.apiKey}&${q}`;

            const response = await axios.get(this.apiUrl);

            return response.data?.articles;
        } catch (error) {
            console.error('Error fetching NEWSAPI NEWS:', error);
            return [];
        }
    }
}

export default NewsAPI;