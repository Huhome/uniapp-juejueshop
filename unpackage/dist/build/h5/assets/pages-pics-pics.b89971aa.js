import{p as s,o as i,c as a,w as t,a as e,b as l,r as c,F as n,d as m,i as g,k as r,n as d,t as o,f as u,h as p}from"./index.f7a5bbda.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var f=_({data:()=>({prcsList:[],itemIndex:0,imagesList:[],previewImages:[]}),onShow(){this.getprcs(),this.getimages(0)},methods:{async getprcs(){const s=await this.$axios({url:"/api/getimgcategory"});this.prcsList=s},async getimages(s){const i=await this.$axios({url:`/api/getimages/${s}`});this.imagesList=i},clickActive(s){this.itemIndex=s,this.getimages(s)},imgClick(i){const a=this.imagesList.map((s=>s.img_url.includes(null)?"http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg":s.img_url));s({urls:a,current:a[i]})}}},[["render",function(s,_,f,h,k,y){const v=g,x=r,L=u,C=p;return i(),a(v,{class:"pics"},{default:t((()=>[e(x,{class:"nav_list","scroll-y":""},{default:t((()=>[(i(!0),l(n,null,c(k.prcsList,((s,e)=>(i(),a(v,{class:d(k.itemIndex===e?"active":""),onClick:s=>y.clickActive(e),key:s.id},{default:t((()=>[m(o(s.title),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),e(x,{class:"cont_list","scroll-y":""},{default:t((()=>[k.imagesList.length?(i(!0),l(n,{key:0},c(k.imagesList,((s,l)=>(i(),a(v,{class:"cont_item",key:s.id},{default:t((()=>[e(L,{src:s.img_url.includes(null)?"http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg":s.img_url,mode:"aspectFill",onClick:s=>y.imgClick(l)},null,8,["src","onClick"]),e(v,{class:""},{default:t((()=>[e(C,null,{default:t((()=>[m(o(s.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)):(i(),a(v,{key:1,class:"tips"},{default:t((()=>[m("暂无图片")])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-db0dd704"]]);export{f as default};
