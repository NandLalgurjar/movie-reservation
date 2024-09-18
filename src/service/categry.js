import axios from 'axios';

export const getGenereApi = async (body) => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.29:8000/genere/getGenere',
            headers: {}
        };

        let response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}