import axios from "axios";
import { getSession } from "./token";

const instance = axios.create({
    baseURL: 'http://localhost',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.data = JSON.stringify(config.data)
    return config;
}, (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error)
})

const authHeader = { headers: { 'Authorization': getSession() } };

export default instance;
export { authHeader } 
