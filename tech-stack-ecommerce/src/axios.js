import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tech-stack-ecommerce.herokuapp.com/'
    // baseURL: 'http://localhost:5001/tech-stack-ecommerce/us-central1/api'
});

export default instance