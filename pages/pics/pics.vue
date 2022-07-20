<template>
	<view class="pics" >
		<scroll-view class="nav_list" scroll-y>
			<view :class="itemIndex===index?'active':''" @click="clickActive(index)" v-for="(item,index) in prcsList" :key="item.id">{{item.title}}</view>

		</scroll-view>
		<scroll-view class="cont_list" scroll-y>
			<template v-if="imagesList.length">
				<view class="cont_item" v-for="(item,index) in imagesList" :key="item.id">
					<image :src="item.img_url.includes(null)?'http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg':item.img_url" mode="aspectFill" @click="imgClick(index)"></image>
					<view class="">
						<text>{{item.title}}</text>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="tips">暂无图片</view>
			</template>
		</scroll-view >
	</view>
</template>

<script>
	export default {
		data() {
			return {
				prcsList:[],
				itemIndex:0,
				imagesList:[],
				previewImages:[]
			}
		},
		onShow() {
			this.getprcs()
			this.getimages(0)
		},
		methods: {
			// 获取社区照片分类
			async getprcs(){
				const data = await this.$axios({url:"/api/getimgcategory"})
				this.prcsList = data
			},
			// 获取二级社区照片 列表
			async getimages(index){
				const data = await this.$axios({url:`/api/getimages/${index}`})
				this.imagesList = data
			},
			// 点击导航事件
			clickActive(index){
				// 变色
				this.itemIndex = index
				// 发起请求
				this.getimages(index)
			},
			// 图片点击 预览
			imgClick(index){
				const urls = this.imagesList.map(item=>{
					if(item.img_url.includes(null)){
						return 'http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg'
					}
					return item.img_url
				})
				uni.previewImage({
						urls,
						current:urls[index]
				});
			}
		}
	}
</script>

<style scoped lang="scss">
.pics{
	display: flex;
	height: 100%;
	.nav_list{
		flex: 2;
		// width: 200rpx;
		height: 100vh;
		border-right: 1rpx solid #eee;
		view{
			height: 120rpx;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			line-height: 120rpx;
			border-top: 1px solid #eee;
			}
		.active{
			background: $shop-color;
			color: #fff;
		}
	}
	.cont_list{
		flex: 8;
		height: 100vh;
		.tips{
			text-align: center;
			letter-spacing: 10rpx;
			color: #ababab;
			padding: 20rpx 0;
		}
		.cont_item{
			padding: 0 15rpx;
			// display: flex;
			image{
				// flex: 6;
				width: 100%;
				border-radius: 10rpx;
			}
			view{
				// flex: 2;
				font-size: 30rpx;
				height: 60rpx;
			}
		}
		
	}
	
}
</style>
