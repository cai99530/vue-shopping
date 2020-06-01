import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(
          item => item.iid === payload.iid
        );
        if (oldProduct) {
          context.commit("addCounter", oldProduct);
          resolve("当前商品数量增加");
        } else {
          context.commit("addToCart", payload);
          resolve("商品已加入购物车");
        }
      });
    }
  },
  modules: {},
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    }
  }
});
