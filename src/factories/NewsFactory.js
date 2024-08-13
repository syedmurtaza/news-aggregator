import GuardianNewsService from '../services/GuardianNewsService';
import NYTNewsService from '../services/NYTNewsService';
import NewsAPIService from '../services/NewsAPIService';;

class NewsFactory {
    static createNewsService(type) {
        switch (type) {
            case 'grd':
                return new GuardianNewsService();
            case 'nyt':
                return new NYTNewsService();
            case 'newsapi':
                    return new NewsAPIService();    
            default:
                throw new Error('Invalid news service type');
        }
    }
}

export default NewsFactory;