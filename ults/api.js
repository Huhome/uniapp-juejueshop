// 定义公共的 URL
const My_URL = "http://localhost:8082"
// 计算同时请求次数
let ajaxNums = 0;	
export const axios = (data) => {
	ajaxNums++;
	return new Promise((res,req)=>{
		// 加载数据
		uni.showToast({
		icon:"loading",
		"title":"数据加载中~",
		mask:true,
		duration:10000
		})
		return uni.request({
			url:My_URL+data.url,
			method:data.method||"GET",
			data:data.data||{},
			success(str){
				if(!str.data.message.length) {
					uni.showToast({
					icon:"error",
					"title":"没有数据加载~"
					})
				}
				res(str.data.message)
				// 请求成功关闭下拉
				uni.stopPullDownRefresh()
			},
			fail(err) {
				req(err)
			},
			complete(){
				ajaxNums--;
				if(ajaxNums === 0) 
				// 请求成功后 关闭加载
				uni.hideToast()
			}
		})
	})
	
}