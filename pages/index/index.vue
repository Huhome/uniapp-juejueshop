<template>
	<view class="index_cont">
		<!-- 轮播 -->
		<swiper autoplay interval="3000" circular indicator-dots indicator-color="#fff">
			<swiper-item v-for="item in swiperList" :key="item.id">
				<image :src="item.img" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<!-- 导航分类 -->
		<view class="nav">
			<navigator :url="item.path" class="nav_box" v-for="item in navList" :key="item.id">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</navigator>
		</view>
		
		<!-- 推荐商品 -->
		<view class="rec_goods">
			<view class="title">
				推荐商品
			</view>
		<goodsList></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from "@/components/goodsList.vue"
	export default {
		data() {
			return {
				swiperList:[],
				navList:[
					{
						id:1,
						icon:"iconfont icon-ziyuan",
						title:"珏珏超市",
						path:"/pages/goods/goods",
					},
					{
						id:2,
						icon:"iconfont icon-guanyuwomen",
						title:"联系我们",
						path:"/pages/contact/contact",
					},
					{
						id:3,
						icon:"iconfont icon-tupian",
						title:"社区图片",
						path:"/pages/pics/pics",
					},
					{
						id:4,
						icon:"iconfont icon-shipin",
						title:"学习视频",
						path:"/pages/videos/videos",
					},
				]
			}
		},
		onLoad() {
			this.getSwiper()
		},
		
		methods: {
			// 获取轮播图 列表
			async getSwiper(){
				const data = await this.$axios({url:"/api/getlunbo"})
				this.swiperList = data
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style  lang="scss">
	.index_cont{
		swiper{
			width: 100%;
		height: 312rpx;
		}
		
		.nav{
			width: 100%;
			display: flex;
			text-align: center;
			.nav_box{
				width: 100%;
				// width: 25%;
				view{
					border-radius: 50%;
					background: var(--color);
					width: 120rpx;
					height: 120rpx;
					margin: 20rpx auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx
				}
				.icon-tupian{
					font-size: 45rpx
				}
				text{
					font-size: 30rpx
				}
			}
			// #ifdef H5
			.nav_box{
				width: 100%;
			}
			a{
				width: 25%;
			}
			// #endif
			
		}
		
		.rec_goods{
					background: #eee;
					overflow: hidden;
					margin-top: 30rpx;
					.title{
						height: 100rpx;
						line-height: 100rpx;
						color: $shop-color;
						background: #fff;
						text-align: center;
						letter-spacing: 40rpx;
						margin: 6rpx 0;
					}
				}
	}
	
	
	
</style>
