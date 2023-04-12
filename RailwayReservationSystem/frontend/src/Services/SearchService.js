import axios from'axios'
const TRAIN_SEARCH_BY_PARAMS_URL ='http://localhost:8080/admin/access/findBy';
class SearchService{

    getTrainById(startPoint,endPoint,trainDate){
        return axios.get(TRAIN_SEARCH_BY_PARAMS_URL  +'/'+ startPoint+'/'+ endPoint+ '/'+ trainDate);
    }

}
export default new SearchService();