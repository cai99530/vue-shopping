<template>
  <div class="star-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="left">
          <img src="~assets/image/detail/back.svg" alt="" @click="goback()" />
        </div>
      </template>

      <template v-slot:center class="center"></template>

      <template v-slot:right class="right">
        <img src="~assets/image/detail/share.svg" alt="" />
        <img src="~assets/image/detail/more.svg" alt="" />
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "StarNavBar",
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
.star-nav-bar {
  height: 44px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: hidden;
  background-color: rgba(100, 200, 50, 0);
}
.left img {
  margin-left: 14px;
  width: 32px;
  height: 32px;
  margin-top: 6px;
  overflow: auto;
  opacity: 0.8;
}

.right {
  display: flex;
}
.right img {
  flex: 1;
  width: 32px;
  height: 32px;
  margin-top: 6px;
  overflow: auto;
  margin: 6px 10px 0 0;
}
.right img:first-child {
  margin-left: -25px;
}
</style>
