<template>
  <div id="category">
    <cate-nav-bar></cate-nav-bar>
    <left :leftInfo="leftInfo" @leftClick="leftClick"></left>
    <right :rightInfo="rightInfo" :title="title"></right>
  </div>
</template>

<script>
import CateNavBar from "views/category/childComponents/CateNavBar";
import Left from "views/category/childComponents/Left.vue";
import Right from "views/category/childComponents/Right.vue";

import { getLeftInfo, getRightInfo } from "network/category.js";

export default {
  name: "Category",
  data() {
    return {
      leftInfo: null,
      rightInfo: null,
      title: ""
    };
  },
  created() {
    getLeftInfo().then(res => {
      this.leftInfo = res.data.category.list;
      getRightInfo(this.leftInfo[0].maitKey).then(res => {
        this.title = res.data.info.title;
        this.rightInfo = res.data.list;
      });
    });

    // getRightInfo(this.leftInfo[0].)
  },
  components: {
    CateNavBar,
    Left,
    Right
  },
  methods: {
    leftClick(maitKey) {
      getRightInfo(maitKey).then(res => {
        this.title = res.data.info.title;
        this.rightInfo = res.data.list;
      });
    }
  }
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
