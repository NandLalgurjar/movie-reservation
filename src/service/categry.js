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

export const getMoviesApi = async (query) => {
    try {
        console.log(query, '--query getMoviesApi')
        let url = `http://192.168.0.29:8000/movie/getMovies`;
        if (query?._id) {
            url += `?_id=${query._id}`;
        };

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {}
        };

        const response = axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getSingleMovieApi = async (query) => {
    try {
        let url = `http://192.168.0.29:8000/movie/getSingleMovie`;
        if (query?._id) {
            url += `?movieId=${query._id}`;
        };

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {}
        };

        const response = axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}