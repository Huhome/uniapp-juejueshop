<template>
	<view class="consulting">
		<navigator :url="'/pages/consulting-item/consulting-item?id='+item.id" class="cons_item" v-for="item in consultingList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="cons_cont">
				<view class="title webkit">{{item.title}}</view>
				<view class="text">
					<text class="data">发表时间: {{new Date(item.add_time).toLocaleDateString().replace(/\//g, '-')}}</text>
					<text class="browse">浏览{{item.click}}次</text>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				consultingList:{}
			}
		},
		onShow() {
			this.getconsul()
		},
		methods: {
			// 获取咨询列表
			async getconsul(){
				const data = await this.$axios({url:"/api/getnewslist"})
				this.consultingList = data
				console.log(data);
			}
		}
	}
</script>

<style scoped lang="scss">
.consulting{
	.cons_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			width: 200rpx;
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
			
		}
		.cons_cont{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				
				font-size: 30rpx;
			}
			.text{
				font-size: 24rpx;
				.data{}
				.browse{
					margin-left: 30rpx;
				}
			}
		}
	}
}
</style>
