import { defineStore } from "pinia";
import { fetchMovieDetail, fetchMovieList } from "../api";

export const useMovieAppStore = defineStore("movie", {
  state: () => ({
    isLoading: false,
    movieList: [],
  }),
  actions: {
    async searchMovieList(query, page) {
      this.isLoading = true;
      const { Search } = await fetchMovieList(query, page);
      this.movieList = [...Search];
      this.isLoading = false;
    },
    async getMovieData(movieId) {
      this.isLoading = true;
      const t = await fetchMovieDetail(movieId || "tt4520988");
      console.log(t);
      this.isLoading = false;
    },
  },
});
