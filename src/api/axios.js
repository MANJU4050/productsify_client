import axios from "axios";
// BASE_URL = "http://localhost:4000"

// const BASE_URL = "https://stormy-anchorage-87618.herokuapp.com/"
const BASE_URL = "https://stormy-anchorage-87618.herokuapp.com/"
export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate= axios.create({
    baseURL: BASE_URL,
    headers:{ 'Content-Type': 'application/json'},
    withCredentials: true
});