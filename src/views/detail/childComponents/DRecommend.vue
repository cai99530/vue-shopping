<template>
  <div class="d-recommend">
    <div class="header">
      <div><img src="~assets/image/detail/xiushizuo.svg" alt="" /></div>
      <div>推荐</div>
    </div>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList.vue";
export default {
  name: "DRecommend",
  components: {
    GoodsList
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
.d-recommend {
  margin-top: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  outline: none;
  padding-top: 8px;
}

.header {
  height: 40px;
  width: 100%;
  display: flex;
  overflow: hidden;
  padding-left: 5px;
  line-height: 40px;
  vertical-align: middle;
  color: #00aa00;
  font-size: 18px;
  font-family: 微软雅黑;
}
.header img {
  height: 32px;
  width: 32px;
  overflow: auto;
  margin-top: 4px;
}
</style>
