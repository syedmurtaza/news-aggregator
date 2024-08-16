import axios from 'axios';
import { NYT_API_URL, NYT_API_KEY, NYT_QUERY_URL, SEARCH_QUERY_URL } from '../constants/Constants';

class NYTNewsService {
    constructor() {
        this.apiUrl = NYT_API_URL;
        this.apiKey = NYT_API_KEY;
        this.q = '';
    }

    async getNews(q, section) {
        try {

            if (q) {
                this.apiUrl = SEARCH_QUERY_URL;
                this.q += `&${q}`;
            }
            else if (section) {
                this.apiUrl = NYT_QUERY_URL + section + '.json';
            }

            this.apiUrl += `?api-key=${this.apiKey}${this.q}`;


            const response = await axios.get(this.apiUrl);

            if (response.data?.docs)
                return (response.data?.docs);
            else if (response.data?.response?.docs)
                return (response.data?.response?.docs);
            else
                return (response.data?.results);
        } catch (error) {
            console.error('Error fetching NewYork Times NEWS:', error);
            return [];
        }
    }
}

export default NYTNewsService;