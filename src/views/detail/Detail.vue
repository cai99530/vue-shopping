<template>
  <div id="detail">
    <d-nav-bar
      v-if="showNavBar"
      :titles="titles"
      @titleClick="titleClick"
      ref="nav"
    ></d-nav-bar>
    <star-nav-bar v-else></star-nav-bar>

    <scroll
      class="content"
      ref="scroll"
      @getcoordinate="getcoordinate"
      :probe-type="typeNum"
      :pull-up-load="pullUpLoad"
    >
      <d-swiper :ctop-images="topImages"></d-swiper>
      <base-info :img="img" :cgoods="goods"></base-info>
      <d-comment-info
        ref="DCommentInfo"
        :ccommentInfo="commentInfo"
      ></d-comment-info>
      <shop-info :cshopInfo="shopInfo"></shop-info>
      <detail-info
        :cdetailInfo="detailInfo"
        @ImageLoad="ImageLoad"
        ref="DetailInfo"
      ></detail-info>
      <goods-parameter :cgoodsParam="goodsParam"></goods-parameter>
      <d-recommend ref="DRecommend" :goods="recommendInfo"></d-recommend>
    </scroll>

    <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
    <back-top v-show="showBackTop" @click.native="goBack"></back-top>

  </div>
</template>

<script>
import DNavBar from "views/detail/childComponents/DNavBar.vue";
import StarNavBar from "views/detail/childComponents/StarNavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import DetailTabBar from "views/detail/childComponents/DetailTabBar.vue";
import DSwiper from "views/detail/childComponents/DSwiper.vue";
import BaseInfo from "views/detail/childComponents/BaseInfo.vue";
import ShopInfo from "views/detail/childComponents/ShopInfo.vue";
import DetailInfo from "views/detail/childComponents/DetailInfo.vue";
import GoodsParameter from "views/detail/childComponents/GoodsParameter.vue";
import DCommentInfo from "views/detail/childComponents/DCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DRecommend from "views/detail/childComponents/DRecommend.vue";
import { mapActions } from "vuex";

import {
  getGoodsInfo,
  getRecommendInfo,
  Goods,
  Shop,
  GoodsParam
} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      titles: ["商品", "评价", "详情", "推荐"],
      img: [require("../../assets/image/detail/event.png")],
      showBackTop: false,
      typeNum: 3,
      pullUpLoad: true,
      saveY: null,
      topImages: [],
      id: null,
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendInfo: [],
      titlesY: [],
      gettitlesY: null,
      showNavBar: false,
      currentIndex: 0,
    };
  },
  created() {
    // 获取路由中的参数
    this.id = this.$route.params.iid;
    getGoodsInfo(this.id).then(res => {
      // this.topImages.push(...res.result.itemInfo.topImages)
      // console.log(this.topImages);

      // 轮播图信息
      this.topImages = res.result.itemInfo.topImages;

      // 商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      // 店铺信息
      this.shopInfo = new Shop(res.result.shopInfo);

      //  详细数据
      this.detailInfo = res.result.detailInfo;

      // 商品参数
      this.goodsParam = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      // 评论信息
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }

      // console.log(res);
    });

    getRecommendInfo().then(res => {
      this.recommendInfo.push(...res.data.list);
    });
  },
  components: {
    DNavBar,
    StarNavBar,
    Scroll,
    BackTop,
    DetailTabBar,
    DSwiper,
    BaseInfo,
    ShopInfo,
    DetailInfo,
    GoodsParameter,
    DCommentInfo,
    GoodsList,
    DRecommend,
  },
  methods: {
    getcoordinate(ycoordinate) {
      let yc = ycoordinate;
      this.showBackTop = yc < -576 ? true : false;
      this.showNavBar = yc < -360 ? true : false;

      let length = this.titlesY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          yc <= -this.titlesY[i] &&
          yc > -this.titlesY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    goBack() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    ImageLoad() {
      this.$refs.scroll.refresh();
      this.titlesY = [];
      this.titlesY.push(0);
      this.titlesY.push(this.$refs.DCommentInfo.$el.offsetTop - 44);
      this.titlesY.push(this.$refs.DetailInfo.$el.offsetTop - 44);
      this.titlesY.push(this.$refs.DRecommend.$el.offsetTop - 44);
      this.titlesY.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titlesY[index], 300);
    },
    // 从vuex 中映射函数
    ...mapActions(["addCart"]),
    addToCart(iid) {
      // 获取购物车需要展示的信息
      const product = {};
      product.shopinfo = this.shopInfo.name;
      product.shoplogo = this.shopInfo.logo;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = iid;
      product.count = 1;
      product.checked = 1;
      // 添加到购物车
      // this.addCart(product).then()
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res,1500)
      });
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.content {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  margin-bottom: 8px;
}
</style>
