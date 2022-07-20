"use strict";
var common_vendor = require("../../common/vendor.js");
const unigoodsnav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _sfc_main = {
  props: {
    id: Number
  },
  data() {
    return {
      goodsitem: {},
      goodsimg: [],
      goodstext: {},
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  onShow() {
    this.getgoodsitem();
    this.getgoodsimg();
    this.getgoodstext();
  },
  methods: {
    async getgoodsitem() {
      const data = await this.$axios({ url: `/api/goods/getinfo/${this.id}` });
      this.goodsitem = data[0];
    },
    async getgoodsimg() {
      const data = await this.$axios({ url: `/api/getthumimages/${this.id}` });
      this.goodsimg = data;
    },
    async getgoodstext() {
      const data = await this.$axios({ url: `/api/goods/getdesc/${this.id}` });
      console.log(data);
      this.goodstext = data[0];
    },
    onClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    }
  },
  components: {
    unigoodsnav
  }
};
if (!Array) {
  const _component_unigoodsnav = common_vendor.resolveComponent("unigoodsnav");
  _component_unigoodsnav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsimg, (item, k0, i0) => {
      return {
        a: item.id
      };
    }),
    b: common_vendor.t($data.goodsitem.sell_price),
    c: common_vendor.t($data.goodsitem.market_price),
    d: common_vendor.t($data.goodsitem.title),
    e: $data.goodstext.content,
    f: common_vendor.o($options.onClick),
    g: common_vendor.o($options.buttonClick),
    h: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98675df4"], ["__file", "E:/\u5B66\u4E60\u7D20\u6750/Wed/Web-Train/note/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/uni-juejueshop/pages/goods-item/goods-item.vue"]]);
wx.createPage(MiniProgramPage);
