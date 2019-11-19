import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://control-work-8-ais.firebaseio.com/'
});

export default instance;