<template>
  <div class="detail-tab-bar">
    <div class="leftitem">
      <div class="leftitem-item">
        <img src="~assets/image/navbar/detail/work.svg" alt="" />
        <div>联系客服</div>
      </div>
      <div class="leftitem-item">
        <img src="~assets/image/navbar/detail/shop.svg" alt="" />
        <div>店铺</div>
      </div>
      <div class="leftitem-item">
        <img src="~assets/image/navbar/detail/car.svg" alt="" @click="goToCart"/>
        <div>购物车</div>
      </div>
    </div>
    <div class="rightitem">
      <div class="rightitem-item-left" @click="addToCart">加入购物车</div>
      <div
        :class="{
          'rightitem-item-right': !isDown,
          'rightitem-item-left': isDown
        }"
        @ontouchstart="Down()"
      >
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  data() {
    return {
      isDown: false
    };
  },
  methods: {
    Down() {
      this.isOver = !this.isOver;
      console.log("down");
    },
    addToCart(){
      // console.log(this.$route.params.iid);
      const iid = this.$route.params.iid
      this.$emit('addToCart',iid)
    },
    goToCart(){
      this.$router.push('/cart')
    }
  }
};
</script>

<style scoped>
.detail-tab-bar {
  position: fixed;
  height: 49px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #f8f8f8;
  display: flex;
  font-size: 12px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.03);
}

.detail-tab-bar img {
  width: 25px;
  height: 25px;
  overflow: auto;
}

.leftitem {
  display: flex;
  width: 55%;
  padding-left: 5px;
}
.leftitem-item {
  flex: 1;
  text-align: center;
  margin-top: 4px;
}

.rightitem {
  flex: 1;
  display: flex;
  padding-right: 5px;
}

.rightitem-item-left {
  width: 75px;
  height: 40px;
  background-color: #00cc33;
  color: #fff;
  margin-top: 4px;
  margin-left: 5px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  border-radius: 25px;
  outline: none;
}

.rightitem-item-right {
  width: 75px;
  height: 40px;
  background-color: #fff;
  color: #00aa00;
  border: 1px solid #00aa00;
  margin-top: 4px;
  margin-left: 10px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  border-radius: 25px;
  outline: none;
}
</style>
