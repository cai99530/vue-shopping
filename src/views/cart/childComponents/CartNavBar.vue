<template>
  <nav-bar class="cart-nav-bar">
    <template v-slot:left>
      <div class="left">
        <img
          src="~assets/image/navbar/cart/goback.svg"
          alt=""
          @click="goback"
        />
      </div>
    </template>

    <template v-slot:center>
      <div class="center">
        <span>购物车</span>
      </div>
    </template>

    <template v-slot:right>
      <div class="right">
        <img src="~assets/image/navbar/cart/more.svg" alt="" />
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartNavBar",
  // computed: {
  //   ...mapGetters(['cartLength']),
  //   length(){
  //     return '(' + this.cartLength + ')'
  //   }
  // },
  components: {
    NavBar
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.cart-nav-bar {
  background-color: #00aa00;
}

.left {
  width: 60px;
  height: 40px;
  text-align: center;
  padding-top: 5px;
}
.center {
  font-family: 微软雅黑;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
}
.right {
  width: 60px;
  height: 40px;
  text-align: center;
  padding-top: 9px;
}
.right img {
  width: 25px;
  height: 25px;
  overflow: auto;
}
</style>
