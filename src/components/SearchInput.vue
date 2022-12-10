<template>
  <form
    class="form-container"
    @submit.prevent="searchMovieList">
    <label for="영화검색할 수 있는 입력칸">
      <input
        v-model="query"
        placeholder="찾고싶은 영화를 영어로 입력해주세요"
        autofocus
        class="search-input">
    </label>
    <button class="search-button">
      검색
    </button>
  </form>
</template>

<script>
import { useMovieAppStore } from "src/store/movieApp";
import { isAllEnglish } from "src/utils/validator"
import { ref } from 'vue';

export default {
	setup() {
		const movieAppStore = useMovieAppStore();
		const query = ref("");

		const clearInput = () => {
			query.value = "";
		}

		const searchMovieList = () => {
			const inputValue = query.value; 
			if(!inputValue) return; 
			if(!isAllEnglish(inputValue)) {
				alert("영어로만 검색하실 수 있습니다");
				clearInput();
				return;
			}

			movieAppStore.searchMovieList(inputValue, 1); // TODO: 1페이지 이외의 페이지도 보여주도록 구현하기(페이지네이션 or 무한스크롤)
			clearInput();
		}

		return {
			query,
			searchMovieList
		}
	},
};
</script>

<style lang="scss" scoped>
.form-container {
	display: flex;
	justify-content: center;
	height: 30vh;
	align-items: flex-end;
	margin-bottom: 80px;

	.search-input {
		font-size: 1.25rem;
		padding: 10px;
		width: 25vw;
		border: none;
		background-color: #e5e6e8
	}

	.search-button {
		border: none;
		font-size: 1.16rem;
		padding: 10px 15px;
		cursor: pointer;
	}
}

</style>