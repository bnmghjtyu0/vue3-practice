import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMovies() {
    return apiClient.get(
      "/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1"
    );
  },
};
