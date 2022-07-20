<template>
	<view>
		<swiper autoplay interval="3000"  circular indicator-dots indicator-color="#fff">
			<swiper-item v-for="item in goodsimg" :key="item.id">
				<image  src="http://www.liulongbin.top:3005/images/lunbo2-min.jpg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		
		<!-- 内容 -->
		<view class="cont" >
			<view class="price">
				<text>{{goodsitem.sell_price}}</text>
				<text>{{goodsitem.market_price}}</text>
			</view>
			<view class="name">{{goodsitem.title}}</view>
		</view>
		<view class="line"></view>
		<view class="kuc">
			<view>货号: SD7159710321</view>
			<view>库存: 200</view>
			<view></view>
		</view>
		<view class="line"></view>
		<view class="zans">
			<view class="title">详情介绍</view>
			<view class="cont">
				<rich-text :nodes="goodstext.content"></rich-text>
			</view>
		</view>
		<unigoodsnav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick"></unigoodsnav>
	</view>
</template>

<script>
	import unigoodsnav from "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"
	export default {
		props:{
			id:Number
		},
		data() {
			return {
				goodsitem:{},
				goodsimg:[],
				goodstext:{},
				options: [{
							icon: 'headphones',
							text: '客服'
						}, {
							icon: 'shop',
							text: '店铺',
							// info: 2,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 2
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#ff0000',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#ffa200',
					      color: '#fff'
					    }]
			}
		},
		onShow() {
			this.getgoodsitem()
			this.getgoodsimg()
			this.getgoodstext()
		},
		methods: {
			// 详情参数
			async getgoodsitem(){
				const data = await this.$axios({url:`/api/goods/getinfo/${this.id}`})
				this.goodsitem = data[0]
			},
			// 详情轮播
			async getgoodsimg(){
				const data = await this.$axios({url:`/api/getthumimages/${this.id}`})
				this.goodsimg = data
			},
			// 
			async getgoodstext(){
				const data = await this.$axios({url:`/api/goods/getdesc/${this.id}`})
				console.log(data);
				this.goodstext = data[0]
			},
			onClick (e) {
				uni.showToast({
				    title: `点击${e.content.text}`,
				    icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		},
		components:{
			unigoodsnav
		}
	}
</script>

<style scoped lang="scss">
	swiper{
		width: 100%;
		height: 312rpx;
	}
.cont{
	
	padding: 10px;
	.price{
		font-size: 35rpx;
		color: $shop-color;
		line-height: 80rpx;
		text:nth-child(2){
			color: #ccc;
			font-size: 28rpx;
			text-decoration: line-through;
			margin-left: 20rpx;
		}
	}
	
}
.name{
		font-size: 32rpx;line-height: 60rpx;
	}
	.kuc{
		padding: 0 20rpx;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	
	.zans{
		padding-bottom: 50px;
		.title{
			font-size: 32rpx;
			padding-left: 20rpx;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
			
		}
		.cont{
			box-sizing: border-box;
			padding: 20rpx;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
			
		}
		
	
	}
	.line{
		height: 10rpx;
		width: 100%;
		background: #eee;
	}
	
	unigoodsnav{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	// #ifdef H5
	.uni-goods-nav{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	// #endif
</style>
