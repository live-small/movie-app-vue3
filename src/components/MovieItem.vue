<template>
  <li class="container">
    <img
      :src="imgUrl"
      alt="영화포스터"
      class="poster"
      @error="showReplaceImage">
    <section class="description">
      <span class="title">{{ title }}</span>
      <span class="year">({{ year }})</span>
    </section> 
  </li>
</template>



<script>
const replaceImageUrl = "https://thelongfortgroup.com/public/img/default/no-image-icon.jpg";

export default {
	props : {
		title : {
			type: String, 
			default: ""
		}, 
		imgUrl: {
			type:String,  
			default: replaceImageUrl
		}, 
		year: {
			type:String,
			default: ""
		},
	}, 

	setup() {
		const showReplaceImage = (e) => {
			e.target.src = replaceImageUrl;
		}

		return {
			showReplaceImage
		}
	}
	
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 10px 20px;

	.poster {
		max-height: 330px;
	}

	.description {
		display: flex;
		flex-direction: column;
		.title {
			font-size: 1.25rem;
		}
		.year {
			font-size: 1rem;
		}
	}


}

</style>