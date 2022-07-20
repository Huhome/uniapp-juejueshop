"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      consultingList: {}
    };
  },
  onShow() {
    this.getconsul();
  },
  methods: {
    async getconsul() {
      const data = await this.$axios({ url: "/api/getnewslist" });
      this.consultingList = data;
      console.log(data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.consultingList, (item, k0, i0) => {
      return {
        a: item.img_url,
        b: common_vendor.t(item.title),
        c: common_vendor.t(new Date(item.add_time).toLocaleDateString().replace(/\//g, "-")),
        d: common_vendor.t(item.click),
        e: "/pages/consulting-item/consulting-item?id=" + item.id,
        f: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-14c78986"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/consulting/consulting.vue"]]);
wx.createPage(MiniProgramPage);
