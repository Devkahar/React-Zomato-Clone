import axios from 'axios';

const instance = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    headers:{
        "Accept": "application/json",
        "user-key": "b04e3dee209b7d3d2fae03e8ff49f31d",
    }
})
export default instance;