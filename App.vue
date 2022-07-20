<script>
	export default {
		
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	/*每个页面公共css */
	
	page,view,text{
		box-sizing: border-box;
	}
	page{
		--color:#C41E00;
	}
	.webkit{
		 display: -webkit-box;
		 overflow: hidden;
		 -webkit-box-orient: vertical;
		 -webkit-line-clamp: 2;
	}
	image{
		width: 100%;
		display: block;
	}
	 // #ifdef H5
	html{
		uni-image{
			width: 100%;
			height: 100%;
		}
	}
	
	 // #endif
	 
	 .gomeImgLoad{
	 	width: 100%;
		height: auto;
		display: block;
	 }
</style>
