"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    id: Number
  },
  data() {
    return {
      item: []
    };
  },
  onShow() {
    this.getconsitem();
  },
  methods: {
    async getconsitem() {
      const data = await this.$axios({ url: `/api/getnew/${this.id}` });
      this.item = data[0];
      console.log(data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item.title),
    b: common_vendor.t(new Date($data.item.add_time).toLocaleDateString().replace(/\//g, "-")),
    c: common_vendor.t($data.item.click),
    d: $data.item.content
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7aea0c1c"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/consulting-item/consulting-item.vue"]]);
wx.createPage(MiniProgramPage);
