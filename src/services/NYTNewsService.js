import axios from 'axios';
import { NYT_API_URL, NYT_API_KEY, NYT_QUERY_URL } from '../constants/config';

class NYTNewsService {
    constructor() {
        this.apiUrl = '';
        this.apiKey = NYT_API_KEY;
    }

    async getNews(section, q) {
        try {

            if (section) {
                this.apiUrl = NYT_QUERY_URL + section + '.json';
            } else {

                this.apiUrl = NYT_API_URL;
            }

            const response = await axios.get(this.apiUrl, {
                params: {
                    'api-key': this.apiKey,
                },
            });

          
            return  (response.data?.results) ;
        } catch (error) {
            console.error('Error fetching NewYork Times NEWS:', error);
            return [];
        }
    }
}

export default NYTNewsService;