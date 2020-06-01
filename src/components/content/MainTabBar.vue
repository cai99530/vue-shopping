<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#00AA00">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/shouye.svg" alt="" />
      </template>
      <template v-slot:item-active>
        <img src="~assets/image/tabbar/cshouye.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="#00AA00">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/fenlei.svg" alt="" />
      </template>
      <template v-slot:item-active>
        <img src="~assets/image/tabbar/cfenlei.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="#00AA00">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/car.svg" alt="" />
      </template>
      <template v-slot:item-active>
        <img src="~assets/image/tabbar/ccar.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="#00AA00">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/my.svg" alt="" />
      </template>
      <template v-slot:item-active>
        <img src="~assets/image/tabbar/cmy.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped></style>
