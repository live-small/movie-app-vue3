<template>
  <div
    v-if="content"
    class="item">
    <h4 class="item-title">
      {{ title }}
    </h4>
    <span>{{ content }}</span>
  </div>
</template>

<script>

export default {
	props : {
		title: String, 
		content: String
	}
}
</script>

<style lang="scss">
	.item {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.item-title {
				margin: 10px 10px 10px 0;
			}
		}
</style>