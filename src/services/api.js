// BASE DA URL: https://api.themoviedb.org/3/movie/now_playing?api_key=486cf28af09bfe05eae35b3756702a16

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
