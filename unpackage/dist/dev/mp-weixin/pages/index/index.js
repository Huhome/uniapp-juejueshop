"use strict";
var common_vendor = require("../../common/vendor.js");
const goodsList = () => "../../components/goodsList.js";
const _sfc_main = {
  data() {
    return {
      swiperList: [],
      navList: [
        {
          id: 1,
          icon: "iconfont icon-ziyuan",
          title: "\u73CF\u73CF\u8D85\u5E02",
          path: "/pages/goods/goods"
        },
        {
          id: 2,
          icon: "iconfont icon-guanyuwomen",
          title: "\u8054\u7CFB\u6211\u4EEC",
          path: "/pages/contact/contact"
        },
        {
          id: 3,
          icon: "iconfont icon-tupian",
          title: "\u793E\u533A\u56FE\u7247",
          path: "/pages/pics/pics"
        },
        {
          id: 4,
          icon: "iconfont icon-shipin",
          title: "\u5B66\u4E60\u89C6\u9891",
          path: "/pages/videos/videos"
        }
      ]
    };
  },
  onLoad() {
    this.getSwiper();
  },
  methods: {
    async getSwiper() {
      const data = await this.$axios({ url: "/api/getlunbo" });
      this.swiperList = data;
    }
  },
  components: {
    goodsList
  }
};
if (!Array) {
  const _component_goodsList = common_vendor.resolveComponent("goodsList");
  _component_goodsList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.id
      };
    }),
    b: common_vendor.f($data.navList, (item, k0, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.title),
        c: item.path,
        d: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
