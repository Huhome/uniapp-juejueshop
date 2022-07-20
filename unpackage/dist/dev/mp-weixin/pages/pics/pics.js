"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      prcsList: [],
      itemIndex: 0,
      imagesList: [],
      previewImages: []
    };
  },
  onShow() {
    this.getprcs();
    this.getimages(0);
  },
  methods: {
    async getprcs() {
      const data = await this.$axios({ url: "/api/getimgcategory" });
      this.prcsList = data;
    },
    async getimages(index) {
      const data = await this.$axios({ url: `/api/getimages/${index}` });
      this.imagesList = data;
    },
    clickActive(index) {
      this.itemIndex = index;
      this.getimages(index);
    },
    imgClick(index) {
      const urls = this.imagesList.map((item) => {
        if (item.img_url.includes(null)) {
          return "http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg";
        }
        return item.img_url;
      });
      common_vendor.index.previewImage({
        urls,
        current: urls[index]
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.prcsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n($data.itemIndex === index ? "active" : ""),
        c: common_vendor.o(($event) => $options.clickActive(index), item.id),
        d: item.id
      };
    }),
    b: $data.imagesList.length
  }, $data.imagesList.length ? {
    c: common_vendor.f($data.imagesList, (item, index, i0) => {
      return {
        a: item.img_url.includes(null) ? "http://img.qikula.com/file/image/pic/32a539391362n331039240c253.jpg" : item.img_url,
        b: common_vendor.o(($event) => $options.imgClick(index)),
        c: common_vendor.t(item.title),
        d: item.id
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-78fe96a6"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/pics/pics.vue"]]);
wx.createPage(MiniProgramPage);
