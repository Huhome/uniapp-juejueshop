"use strict";
var common_vendor = require("../../common/vendor.js");
const goodsList = () => "../../components/goodsList.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  components: {
    goodsList
  }
};
if (!Array) {
  const _component_goodsList = common_vendor.resolveComponent("goodsList");
  _component_goodsList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5566b618"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
