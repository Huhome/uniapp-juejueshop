<template>
	<view class=" goods_list">
		<goodsList></goodsList>
	</view>
</template>

<script>
	import goodsList from "@/components/goodsList.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		},
		components:{
			goodsList
		}
	}
</script>

<style scoped>
.goods_list{
	background: #eee;
}
</style>
