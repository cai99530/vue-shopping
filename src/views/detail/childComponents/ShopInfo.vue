<template>
  <div class="shop-info">
    <div class="header">
      <div class="shop-logo-info">
        <img :src="'https:' + cshopInfo.logo" alt="" />
      </div>
      <div class="shop-name">
        {{ cshopInfo.name }}
      </div>
    </div>
    <div class="center">
      <div class="cen-left">
        <div class="cen-left-top">
          <div>{{ cshopInfo.fans }}</div>
        </div>
        <div class="cen-left-bottom"><div>粉丝人数</div></div>
      </div>
      <div class="cen-right">
        <div class="cen-left-top">
          <div>{{ cshopInfo.goodsCount }}</div>
        </div>
        <div class="cen-left-bottom"><div>全部商品</div></div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <span>关注店铺</span>
      </div>
      <div class="footer-right">
        <span>进入店铺</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    cshopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
  // computed: {
  //   logourl(){
  //     return 'https:' + this.cshopInfo.logo;
  //   }
  // },
  // mounted(){
  //   console.log(this.cshopInfo);
  // }
};
</script>

<style scoped>
.shop-info {
  height: 180px;
  width: 100%;
  background-color: #fff;
  margin-top: 8px;
  box-shadow: 0 0.2px 0 #888888;
  border-radius: 8px;
  padding: 5%;
  outline: none;
  overflow: hidden;
}

.header {
  height: 40px;
  width: 100%;
  overflow: hidden;
  line-height: 42px;
  vertical-align: middle;
  display: flex;
  color: black;
  font-family: 微软雅黑;
  font-size: 14px;
}
.shop-logo-info {
  width: 30%;
  text-align: center;
}
.shop-logo-info img {
  width: 40px;
  height: 40px;
  overflow: auto;
  float: right;
}
.shop-name {
  flex: 1;
  height: 40px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  margin-left: 10px;
}

.center {
  height: 70px;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.cen-left {
  flex: 1;
  border-right: 1px darkgray solid;
  overflow: hidden;
}
.cen-left-top {
  height: 35px;
  width: 100%;
  color: #333333;
  font-size: 12px;
  text-align: center;
  padding-top: 20px;
}
.cen-left-bottom {
  height: 35px;
  width: 100%;
  color: #999999;
  font-size: 12px;
  text-align: center;
  line-height: 35px;
  vertical-align: middle;
}
.cen-right {
  flex: 1;
}

.footer {
  height: 38px;
  width: 100%;
  display: flex;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  padding-top: 4px;
}

.footer-left,
.footer-right {
  flex: 1;
  height: 30px;
  border: 0.5px solid #00aa00;
  border-radius: 25px;
  margin: 0 20px 0 20px;
  color: #00aa00;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
}
</style>
