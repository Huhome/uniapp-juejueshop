"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "goods-list",
  data() {
    return {
      goodsList: [],
      pagenum: 1
    };
  },
  created() {
    this.getgoods();
  },
  onReachBottom() {
    this.pagenum++;
    this.getgoods();
  },
  onPullDownRefresh() {
    this.pagenum = 1;
    this.goodsList = [];
    this.getgoods(1);
  },
  methods: {
    async getgoods(flag) {
      const data = await this.$axios({ url: `/api/getgoods?pageindex=${this.pagenum}` });
      if (flag)
        return this.goodsList = data;
      this.goodsList = [...this.goodsList, ...data];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.sell_price),
        b: common_vendor.t(item.market_price),
        c: common_vendor.t(item.title),
        d: "/pages/goods-item/goods-item?id=" + item.id,
        e: item.id
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c90bc72e"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/components/goodsList.vue"]]);
wx.createComponent(Component);
