import axios from "axios";

import defaultJson from '../config/default.json';


export const handleUserLoginApi = async (body) => {
    try {
        const response = await axios.post(`${defaultJson.BASE_URL}/user/login`, body);
        console.log(response, '-');

        localStorage.setItem("token", response?.data?.data?.token);
        return response?.data
    } catch (error) {
        console.log(error, "---logresponse");
        return error
    }
}
export const getUserDetailsApi = async (userId) => {
    try {
        const response = await axios.get(`${defaultJson.BASE_URL}/user/getUserDetails/${userId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
        });
        return response?.data
    } catch (error) {
        console.log(error, "---logresponse");
        return error
    }
}
