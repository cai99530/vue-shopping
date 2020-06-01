<template>
  <div class="cart-tab-bar" v-show="cartLength != 0">
    <div class="checkall" @click="click()">
      <img
        v-show="!checkedAll"
        class="check"
        src="~assets/image/cart/check.svg"
        alt=""
      />
      <img
        v-show="checkedAll"
        class="check"
        src="~assets/image/cart/checked.svg"
        alt=""
      />
      <div>全选</div>
    </div>

    <div class="right">
      <div class="totalprice">
        <span>总计:</span>
        <span>{{ totalPrice }}</span>
      </div>
      <div class="pay">
        <div class="btn">
          去结算(<span>{{ totalCount }}件</span>)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartNavBar",
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((pre, item) => {
            return pre + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    totalCount() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return pre + item.count * 1;
        }, 0);
    },
    checkedAll() {
      return !this.cartList.find(item => !item.checked);
    }
  },
  filters: {
    showPrice(val) {
      return "￥" + parseInt(val).toFixed(2);
    }
  },
  methods: {
    click() {
      if (this.checkedAll) {
        this.cartList.forEach(item => (item.checked = 0));
      } else {
        this.cartList.forEach(item => (item.checked = 1));
      }
    }
  }
};
</script>

<style scoped>
.cart-tab-bar {
  position: absolute;
  height: 49px;
  width: 100%;
  bottom: 49px;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
  display: flex;
}
.checkall {
  height: 49px;
  width: 50px;
  font-size: 12px;
  color: black;
  text-align: center;
}
.checkall img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
}
.right {
  flex: 1;
  height: 49px;
  display: flex;
}
.totalprice {
  width: 55%;
  text-align: right;
  line-height: 49px;
  vertical-align: middle;
}
.totalprice span:first-child {
  font-size: 14px;
  font-family: 微软雅黑;
  color: black;
  font-weight: 500;
}
.totalprice span:last-child {
  font-size: 14px;
  font-family: 微软雅黑;
  color: #00aa00;
}

.pay {
  flex: 1;
  height: 49px;
  padding-top: 4px;
}
.btn {
  height: 40px;
  width: 90%;
  margin-left: 5%;
  line-height: 40px;
  font-size: 13px;
  border-radius: 25px;
  vertical-align: middle;
  color: #fff;
  background-color: #00aa00;
  outline: none;
  text-align: center;
}
.btn span {
  font-size: 10.2px;
}
</style>
