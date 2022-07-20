<template>
	<view class="cons-item"> 
		<view class="title">{{item.title}}</view>
		<view class="text">
			<text class="data">发表时间: {{new Date(item.add_time).toLocaleDateString().replace(/\//g, '-')}}</text>
			<text class="browse">浏览{{item.click}}次</text>
		</view>
		<view class="cont" >
			<rich-text :nodes="item.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			id:Number
		},
		data() {
			return {
				item:[]
			}
		},
		onShow() {
			this.getconsitem()
		},
		methods: {
			async getconsitem(){
				const data = await this.$axios({url:`/api/getnew/${this.id}`})
				this.item = data[0]
				console.log(data);
			}
		}
	}
</script>

<style scoped lang="scss">
.cons-item{
	font-size: 30rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
	.title{
		font-size: 50rpx;
		font-weight: 600;
		margin: 20rpx 0;
		text-align: center;
	}
	.text{
		display: flex;
		justify-content: space-between;
		.data{}
		.browse{}
	}
	.cont{
		
	}
}
</style>
