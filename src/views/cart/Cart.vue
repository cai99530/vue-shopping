<template>
  <div id="cart">
    <cart-nav-bar></cart-nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probeType="probeType"
      :pullUpLoad="pullUpLoad"
      @getcoordinate="getcoordinate"
    >
      <cart-list @delGoods="delGoods"></cart-list>
    </scroll>
    <cart-tab-bar></cart-tab-bar>

  </div>
</template>

<script>
import CartNavBar from "views/cart/childComponents/CartNavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CartTabBar from "views/cart/childComponents/CartTabBar.vue";
import CartList from "views/cart/childComponents/CartList.vue";

export default {
  name: "Cart",
  data() {
    return {
      probeType: 3,
      pullUpLoad: true,
    };
  },
  components: {
    CartNavBar,
    Scroll,
    CartTabBar,
    CartList,
  },
  methods: {
    getcoordinate(ycoordinate) {},
    delGoods(){
      this.$toast.show('商品已删除',1500)
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
  z-index: 9;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 98px;
  overflow: hidden;
  padding-top: 8px;
}
</style>
