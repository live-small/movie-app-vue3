<template>
  <article
    v-if="movieAppStore.currentClickedMovie"
    :class="movieAppStore.currentClickedMovie 
      ? 'modal'
      : 'hidden'
    ">
    <section
      class="content"
      @click.stop>
      <section class="poster-container">
        <img
          :src="movieAppStore.currentClickedMovie.Poster"
          alt="영화포스터"
          class="poster">
      </section>
      <section class="description">
        <h2>{{ movieAppStore.currentClickedMovie.Title }}</h2>
        <MovieDescriptionItem
          title="개봉일자"
          :content="movieAppStore.currentClickedMovie.Released" />
        <MovieDescriptionItem
          title="장르"
          :content="movieAppStore.currentClickedMovie.Genre" />
        <MovieDescriptionItem
          title="감독"
          :content="movieAppStore.currentClickedMovie.Director" />
        <MovieDescriptionItem
          title="출연배우"
          :content="movieAppStore.currentClickedMovie.Actors" />
        <MovieDescriptionItem
          title="줄거리"
          :content="movieAppStore.currentClickedMovie.Plot" />
        <MovieDescriptionItem
          title="평점"
          :content="movieAppStore.currentClickedMovie.imdbRating" />
      </section>
      <button
        type="button"
        class="close-modal-button"
        @click="movieAppStore.closeModal">
        X
      </button>
    </section>
  </article>
</template>

<script>
import { useMovieAppStore } from "src/store/movieApp";
import MovieDescriptionItem from "src/components/MovieDescriptionItem"

export default {
	components: { MovieDescriptionItem },
	setup() {
		const movieAppStore = useMovieAppStore();

		return {
			movieAppStore
		}
	}
}
</script>

<style lang="scss">
.hidden {
	display: none;
}

.modal {
	z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.3);

	.content {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: white; 
		background-color: #434343;	
		border-radius: 30px;
		display: flex;
		padding: 30px;

		.poster-container {
			max-width: 300px;
			min-width: 280px;
			max-height: 500px;

			.poster {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}

		.description {
			margin-left: 20px;
		}

		.close-modal-button {
			align-self: flex-start;
			border: none;
			font-size: 20px;
			border-radius: 30%;
			opacity: 0.5;
			cursor: pointer;
		}
	}
}
</style>