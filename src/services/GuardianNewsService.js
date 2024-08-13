import axios from 'axios';
import { GUARDIAN_API_URL, GUARDIAN_API_KEY } from '../constants/config';

class GuardianNewsService {
    constructor() {
        this.apiUrl = GUARDIAN_API_URL;
        this.apiKey = GUARDIAN_API_KEY;
    }

    async getNews(section, q) {
        try {

            if (q !==''){
                this.apiUrl+= `?${q}&api-key=${this.apiKey}`;}
            else if (q ===''){
                this.apiUrl+= `?q=${section}&api-key=${this.apiKey}`;
            }
            else{
                this.apiUrl+= `?api-key=${this.apiKey}`;
            }

            const response = await axios.get(this.apiUrl);

            return (response.data?.response?.results);
        } catch (error) {
            console.error('Error fetching Guardian NEWS:', error);
            return {};
        }
    }
}

export default GuardianNewsService;