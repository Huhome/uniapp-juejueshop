import{o as s,c as a,w as t,a as i,b as o,r as n,F as e,d as c,S as d,i as l,e as r,n as p,t as u,f,g,h as _,j as h}from"./index.f7a5bbda.js";import{g as m}from"./goodsList.6989d051.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";var w=v({data:()=>({swiperList:[],navList:[{id:1,icon:"iconfont icon-ziyuan",title:"珏珏超市",path:"/pages/goods/goods"},{id:2,icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{id:3,icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{id:4,icon:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}),onLoad(){this.getSwiper()},methods:{async getSwiper(){const s=await this.$axios({url:"/api/getlunbo"});this.swiperList=s}},components:{goodsList:m}},[["render",function(m,v,w,L,x,b){const y=f,j=g,S=d,k=l,F=_,z=h,I=r("goodsList");return s(),a(k,{class:"index_cont"},{default:t((()=>[i(S,{autoplay:"",interval:"3000",circular:"","indicator-dots":"","indicator-color":"#fff"},{default:t((()=>[(s(!0),o(e,null,n(x.swiperList,(o=>(s(),a(j,{key:o.id},{default:t((()=>[i(y,{src:o.img,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1}),i(k,{class:"nav"},{default:t((()=>[(s(!0),o(e,null,n(x.navList,(o=>(s(),a(z,{url:o.path,class:"nav_box",key:o.id},{default:t((()=>[i(k,{class:p(o.icon)},null,8,["class"]),i(F,null,{default:t((()=>[c(u(o.title),1)])),_:2},1024)])),_:2},1032,["url"])))),128))])),_:1}),i(k,{class:"rec_goods"},{default:t((()=>[i(k,{class:"title"},{default:t((()=>[c(" 推荐商品 ")])),_:1}),i(I)])),_:1})])),_:1})}],["__scopeId","data-v-33b24d35"]]);export{w as default};
