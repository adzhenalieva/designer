import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-5cc8a.firebaseio.com/'
});

export default instance;