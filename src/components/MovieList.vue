<template>
  <ul class="container">
    <MovieItem
      v-for="movie in movieAppStore.movieList"
      :key="movie.imdbID" 
      :title="movie.Title"
      :img-url="movie.Poster"
      :year="movie.Year"
      @click="movieAppStore.getMovieData" />
  </ul>
</template>

<script>
import { useMovieAppStore } from "src/store/movieApp";
import MovieItem from "src/components/MovieItem"


export default {
	components: { MovieItem },
	setup() {
		const movieAppStore = useMovieAppStore();
		
		return {
			movieAppStore
		}
	}
}

</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-wrap: wrap;
}

</style>