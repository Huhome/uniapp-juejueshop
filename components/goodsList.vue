<template>
		<view class="goods_list">
			<navigator :url="'/pages/goods-item/goods-item?id='+item.id" class="goods_item" v-for="item in goodsList" :key="item.id">
				<view class="goods_img">
					<!-- item.img_url 数据过期 -->
					<image src="https://demoapi.dtcms.net/upload/202104/14/1fcdad15-3ae4-417a-9f69-0a6c453309a5.jpg" mode=""></image>
				</view>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name webkit">
					{{item.title}}
				</view>
			</navigator>
			
		</view>
	
</template>

<script>
	export default {
		name:"goods-list",
		data() {
			return {
				goodsList:[],
				pagenum:1,
			};
		},
		created() {
			this.getgoods()
		},
			
		// 触底
		onReachBottom(){
			this.pagenum++
			this.getgoods()
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.pagenum = 1
			this.goodsList = []
			this.getgoods(1)
		},
		methods:{
			// 获取推荐列表 
			async getgoods(flag){
				const data = await this.$axios({url:`/api/getgoods?pageindex=${this.pagenum}`})
				// 做初始化处理
				if(flag) return this.goodsList = data
				this.goodsList = [...this.goodsList,...data]
			}
		}
	}
</script>

<style scoped lang="scss">

			.goods_list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 0 15rpx;
				.goods_item{
					background: #fff;
					width: 355rpx;
					padding: 15rpx;
					box-sizing: border-box;
					.goods_img{
						width: 100%;
						display: flex;
						justify-content: center;
						margin-bottom: 10rpx;
						image{
							width: 80%;
							height: 300rpx;
						}
					}
					.price{
						color: $shop-color;
						font-size: 36rpx
					}
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left:17rpx;
					}
					.name{
						font-size: 28rpx;
						line-height: 50rpx;
						padding-bottom: 10rpx;
						padding-top: 10rpx;
					}
					
				}
			}
			
		
</style>