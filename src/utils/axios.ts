import axios from "axios";
import { getSession } from "./token";

const instance = axios.create({
    baseURL: 'http://localhost',
    headers: { 'Content-Type': 'application/json' }
});

const authHeader = { headers: { 'Authorization': getSession() } };

export default instance;
export { authHeader } 
