"use strict";
var common_vendor = require("../common/vendor.js");
const My_URL = "http://localhost:8082";
let ajaxNums = 0;
const axios = (data) => {
  ajaxNums++;
  return new Promise((res, req) => {
    common_vendor.index.showToast({
      icon: "loading",
      "title": "\u6570\u636E\u52A0\u8F7D\u4E2D~",
      mask: true,
      duration: 1e4
    });
    return common_vendor.index.request({
      url: My_URL + data.url,
      method: data.method || "GET",
      data: data.method || {},
      success(str) {
        if (!str.data.message.length) {
          common_vendor.index.showToast({
            icon: "error",
            "title": "\u6CA1\u6709\u6570\u636E\u52A0\u8F7D~"
          });
        }
        res(str.data.message);
        common_vendor.index.stopPullDownRefresh();
      },
      fail(err) {
        req(err);
      },
      complete() {
        ajaxNums--;
        if (ajaxNums === 0)
          common_vendor.index.hideToast();
      }
    });
  });
};
exports.axios = axios;
