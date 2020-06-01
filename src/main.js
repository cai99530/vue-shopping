import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";

import fastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from "components/common/toast";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

Vue.use(toast);
// Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./assets/image/loading.gif'),
  attempt: 3
})
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
