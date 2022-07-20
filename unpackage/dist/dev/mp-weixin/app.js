"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var ults_api = require("./ults/api.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/consulting/consulting.js";
  "./pages/cart/cart.js";
  "./pages/user/user.js";
  "./pages/contact/contact.js";
  "./pages/goods/goods.js";
  "./pages/pics/pics.js";
  "./pages/videos/videos.js";
  "./pages/consulting-item/consulting-item.js";
  "./pages/goods-item/goods-item.js";
}
const _sfc_main = {};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$axios = ults_api.axios;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
