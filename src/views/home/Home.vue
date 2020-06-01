<template>
  <div id="home">
    <h-nav-bar></h-nav-bar>
    <tab-control
      v-show="shownavtab"
      class="navtab"
      ref="tabControl1"
      :titles="titles"
      @tabControlClick="getTabControl"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      @getcoordinate="getYcoordinate"
      :probe-type="typeNum"
      @pullingUp="loadMore"
      :pull-up-load="pullUpLoad">
      <home-swiper :cbanners="banners"></home-swiper>
      <recommend-view :crecommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab"
        ref="tabControl2"
        :titles="titles"
        @tabControlClick="getTabControl"
      ></tab-control>
      <keep-alive><goods-list :goods="showgoodslist"></goods-list></keep-alive>
    </scroll>

    <back-top v-show="showBackTop" @click.native="goBack"></back-top>
  </div>
</template>

<script>
import HNavBar from "views/home/childComponents/HNavBar.vue";
import HomeSwiper from "views/home/childComponents/HomeSwiper.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";


import RecommendView from "views/home/childComponents/RecommendView";
import FeatureView from "views/home/childComponents/FeatureView.vue";

// import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { getHomeMultidata, getHomeGoods } from "network/myhome.js";
import { debounce } from "common/utils.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["潮流爆款", "夏季上新", "私人定制"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabControlY: {
        pop: {Y: 0},
        new: {Y: -500},
        sell: {Y: -500}
      },
      type: "pop",
      showBackTop: false,
      typeNum: 3,
      pullUpLoad: true,
      shownavtab: false,
      saveY: 0,
      imgLoad: null
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    HNavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showgoodslist() {
      return this.goods[this.type].list;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     * 定义定时器，第一次执行函数就开启定时器，如果在delay时间内执行完，
     * 那么第二次开始执行就会将定时器置空使事件不会发生，重新开启定时器
     * 直到最后一个事件发生完定时器不会被重置，则执行func.apply
     * 2.如果在执行第二次之前，第一次的事件加载事件已经大于delay则，
     * 第一次事件执行完毕就会执行func.apply,接下来的第二次继续置空定时器
     *
     */
    /**
     *
     */
    goBack() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    getYcoordinate(ycoordinate) {
      let yc = ycoordinate;
      this.showBackTop = yc < -576 ? true : false;
      this.shownavtab = yc < -600;
      this.saveY = yc
      this.tabControlY[this.type].Y = yc;

    },
    loadMore() {
      this.getHomeGoods(this.type);
    },
    /**
     *
     */
    getTabControl(index) {
      this.type = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.scroll.scrollTo(0,this.tabControlY[this.type].Y,200)
    },
    /**
     *
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.imgLoad = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.imgLoad);
  },
  activated() {
this.$refs.scroll.scrollTo(0,parseInt(this.tabControlY[this.type].Y))
    // if(parseInt(this.tabControlY[this.type].Y) < -570){
    //   this.$refs.scroll.scrollTo(0,parseInt(this.tabControlY[this.type].Y))
    // }else{
    //   this.$refs.scroll.scrollTo(0, parseInt(this.saveY));
    // }


        // this.$refs.scroll.scrollTo(0, this.saveY);
    // this.$refs.scroll.scrollTo(0,this.tabControlY[this.type].Y)
  },
  deactivated() {
    // console.log(parseInt(this.tabControlY[this.type].Y));
    this.$bus.$off("itemImgLoad", this.imgLoad);
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.navtab {
  position: relative;
  z-index: 9;
}

.tab {
  margin-top: 15px;
}
</style>
