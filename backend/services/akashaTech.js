import axios from 'axios';

const akashaTech = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
}); 

export default akashaTech; 