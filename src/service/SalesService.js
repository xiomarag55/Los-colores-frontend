import axios from 'axios';

const SALES_REST_API_URL = 'htp://localhost:8080/api/sales';

class SalesService {
    
    getSales(){
        return axios.get(SALES_REST_API_URL);
    }
}
export default new SalesService();