<template>
  <div class="right">
    <scroll
      class="content"
      ref="scroll"
      :probe-type="typeNum"
      :pull-up-load="pullUpLoad"
    >
      <div class="header">
        {{ title }}
      </div>
      <goods-list :goods="rightInfo"></goods-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList";
import { getRightInfo } from "network/category.js";

export default {
  name: "Right",
  props: {
    title: "",
    rightInfo: null
  },
  data() {
    return {
      typeNum: 3,
      pullUpLoad: true
    };
  },
  components: {
    Scroll,
    GoodsList
  },
  mounted() {
    this.$refs.scroll.scrollTo(0, 0);
    this.$bus.$on("itemImgLoad", () => {
      this.$refs.scroll.refresh();
    });
  }
};
</script>

<style scoped>
.right {
  float: left;
  width: 70%;
  height: 100vh;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 30%;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}

.header {
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 18px;
  color: black;
  font-weight: 1000;
}
</style>
