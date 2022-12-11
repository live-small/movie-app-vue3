<template>
  <SearchInput />
  <MovieList />
  <MovieDetailModal @click="movieAppStore.closeModal" />
</template>

<script>

import SearchInput from "src/components/SearchInput";
import MovieList from "src/components/MovieList"
import MovieDetailModal from "src/components/MovieDetailModal"
import { useMovieAppStore } from "src/store/movieApp";

export default {
  components: { SearchInput, MovieList, MovieDetailModal },
	setup() {
		const movieAppStore = useMovieAppStore();

		return {
			movieAppStore
		}
	}
};
</script>

<style>
.body {
	border: 0; 
	margin: 0;
}

#app {
	background-color: white;
}
</style>