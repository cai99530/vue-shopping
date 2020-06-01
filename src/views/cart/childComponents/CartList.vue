<template>
  <div>
    <div v-if="cartLength == 0" class="noGoods">

        <div>没有任何商品</div>
        <div class="find" @click="goHome">发现</div>

    </div>
    <div class="cart-list" v-else>
      <div
        class="goods"
        ref="goods"
        v-for="(item, index) in cartList"
        :key="index"
      >
        <div class="shopinfo">
          <img src="~assets/image/cart/shoplogo.svg" alt="" />
          <span>{{ item.shopinfo }}</span>
        </div>
        <div class="goods-info" ref="goodsInfo">
          <div class="letf">
            <div @click="check(index)">
              <img
                v-show="item.checked === 1"
                class="checkedgoods"
                src="~assets/image/cart/checked.svg"
                alt=""
              />
              <img
                v-show="item.checked === 0"
                class="checkgoods"
                src="~assets/image/cart/check.svg"
                alt=""
              />
            </div>
            <img class="goodsimg" :src="item.image" alt="" />
          </div>
          <div class="right">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
            <div class="count-price">
              <div class="price">
                {{ item.price | showPrice }}
              </div>
              <div class="count">
                <button
                  class="btn1"
                  :disabled="item.count === 1"
                  @click="sum(index)"
                >
                  -
                </button>
                <input
                  type="number"
                  v-model.number="item.count"
                  @keyup="input(index, $event)"
                />
                <button
                  class="btn2"
                  :disabled="item.count === 200"
                  @click="add(index)"
                >
                  +
                </button>
              </div>
            </div>
            <div class="del">
              <span @click="del(index)">删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartLength", "cartList"])
    /**
     * ...mapGetters({
     *  length: 'cartLength'
     * })
     */
  },
  filters: {
    showPrice(price) {
      return "￥" + price * (1).toFixed(2);
    }
  },
  methods: {
    goHome(){
      this.$router.push('/home')
    },
    sum(index) {
      return this.cartList[index].count--;
    },
    add(index) {
      return this.cartList[index].count++;
    },
    check(index) {
      if (this.cartList[index].checked === 1) {
        this.cartList[index].checked = 0;
      } else {
        this.cartList[index].checked = 1;
      }
    },
    del(index) {
      this.cartList.splice(index, 1);
      this.$emit("delGoods");
    },
    input(index, event) {
      let count = event.target.value;
      if (count <= 0) {
        this.cartList[index].count = 1;
        this.$toast.show("商品数量最小为1", 1000);
      } else if (count > 200) {
        this.cartList[index].count = 200;
        this.$toast.show("商品数量最大为200", 1000);
      } else {
        this.cartList[index].count = event.target.value;
      }
    }
  }
};
</script>

<style scoped>
.noGoods{
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translate(-50%,-50%);
}
.find{
  margin-top: 25px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  border: 1px solid #00AA00;
  color: #00AA00;
  outline: none;
  border-radius: 25px;
}

.cart-list {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}

.goods {
  width: 100%;
  height: 200px;
  padding: 3%;
  box-shadow: 0 0.2px 0 darkgray;
}
.shopinfo {
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  display: flex;
}
.goods-info {
  display: flex;
  overflow: hidden;
}
.checkgoods {
  width: 20px;
  height: 20px;
  overflow: auto;
  margin-top: 50px;
}
.checkedgoods {
  width: 20px;
  height: 20px;
  overflow: auto;
  margin-top: 50px;
}
.goodsimg {
  width: 90px;
  height: 90px;
  overflow: auto;
  margin-top: 15px;
  margin-left: 5px;
}
.letf {
  display: flex;
}
.right {
  flex: 1;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
.title,
.desc {
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: black;
}

.count-price {
  display: flex;
}
.price {
  width: 80px;
  color: #00aa00;
  text-align: center;
}
.count {
  flex: 1;
  display: flex;
}

.btn1 {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.btn2 {
  width: 20px;
  height: 20px;
}
input {
  width: 35px;
  height: 20px;
  font-size: 13px;
  border: 0.5px solid darkgray;
  border-radius: 5px;
  outline: none;
  margin-right: 5px;
  text-align: center;
}

.del {
  margin-top: 5px;
  text-align: right;
  padding-right: 5px;
  padding-top: 5px;
}
</style>
