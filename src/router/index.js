import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home.vue");


const Category = () => import("views/category/Category.vue");

const Cart = () => import("views/cart/Cart.vue");
const Profile = () => import("views/profile/Profile.vue");

const Detail = () => import("views/detail/Detail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  // 首页
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },

  },

  // 分类
  {
    path: "/category",
    component: Category,
    meta: {
      title: "分类"
    }
  },

  // 购物车
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车"
    }
  },

  //我的
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "我的"
    }
  },

  //
  {
    path: "/detail/:iid",
    component: Detail,
    meta: {
      title: "详细信息"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
