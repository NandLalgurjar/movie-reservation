import axios from 'axios';
import defaultJson from '../config/default.json';

export const getGenereApi = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${defaultJson.BASE_URL}/genere/getGenere`,
            headers: {}
        };

        let response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getMoviesApi = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.29:8000/movie/getMovies',
            headers: {}
        };

        const response = axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}