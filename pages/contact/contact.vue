<template>
	<view class="contact">
		 <image class="contact_banner" mode="" src="https://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		 <view class="info">
			 <view class=" info_c" @click="call">联系电话:400-618-9090 (点击拨打)</view>
			 <view class=" info_d">联系地址:浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		 </view>
		 <map class="map" :longitude="longitude" :markers="markers" :latitude="latitude" :scale="scale"  enable-3D show-compass enable-zoom enable-scroll enable-rotate enable-traffic ></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:120.363172,
				latitude:30.312212,
				scale:13,
				markers: [
					{
						id:1,
						longitude:120.363172,
						latitude:30.312212,
						iconPath:'../../static/yayalogo.jpeg',
						width:30,
						height:30
						
					}
				]
			}
		},
		methods:{
			// 拨打电话
			call(){
				uni.makePhoneCall({
					phoneNumber: '400-618-9090' //仅为示例
				});
			}
		}
	}
</script>

<style scoped lang="scss">
.contact{
	.contact_banner{
		width: 100%;
		height:320rpx;
	}
		
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		
		view{
			line-height: 80rpx;
			border-bottom: 1rpx solid #eee;
		}
	}
	.map{
		width: 100%;
		height: 750rpx;
	}
}
</style>
