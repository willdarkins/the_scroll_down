import axios from "axios";

export default axios.create({
    baseURL: 'https://free-news.p.rapidapi.com/v1/search'
})