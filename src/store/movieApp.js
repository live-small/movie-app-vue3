import { defineStore } from "pinia";
import { fetchMovieDetail, fetchMovieList } from "../api";

export const useMovieAppStore = defineStore("movie", {
  state: () => ({
    isLoading: false,
    movieList: [],
    currentClickedMovie: null,
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
      this.currentClickedMovie = await fetchMovieDetail(movieId);
      this.isLoading = false;
    },
    closeModal() {
      if (!this.currentClickedMovie) return;

      this.currentClickedMovie = null;
    },
  },
});
