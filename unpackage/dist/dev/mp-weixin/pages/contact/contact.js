"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      longitude: 120.363172,
      latitude: 30.312212,
      scale: 13,
      markers: [
        {
          id: 1,
          longitude: 120.363172,
          latitude: 30.312212,
          iconPath: "../../static/yayalogo.jpeg",
          width: 30,
          height: 30
        }
      ]
    };
  },
  methods: {
    call() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-618-9090"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.call && $options.call(...args)),
    b: $data.longitude,
    c: $data.markers,
    d: $data.latitude,
    e: $data.scale
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-476c8d48"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
