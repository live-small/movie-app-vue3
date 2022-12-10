<template>
  <SearchInput />
  <MovieList />
</template>

<script>
import SearchInput from "src/components/SearchInput";
import MovieList from "src/components/MovieList"

export default {
  components: { SearchInput, MovieList },
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