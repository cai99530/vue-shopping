<template>
  <div class="h-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="left">
          <img src="~assets/image/navbar/baicai.svg" alt="" />
        </div>
      </template>

      <template v-slot:center>
        <div class="center">
          <!-- <img src="~assets/image/navbar/search.svg" alt="" />
          <span>{{hotwords}}</span> -->
          <div class="center-item">
            <div class="center-item-left">
              <img src="~assets/image/navbar/search.svg" alt="" />
            </div>
            <div class="center-item-right">
              {{ hotwords }}
            </div>
          </div>
        </div>
      </template>

      <template v-slot:right>
        <div class="right">
          <img src="~assets/image/navbar/saomiao.svg" alt="" />
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "HNavBar",
  data() {
    return {
      hotwords: "搜索好物"
    };
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.h-nav-bar{
  background-color: rgba(100, 200, 50, 1);
}
.left,
.center,
.right {
  height: 44px;
  text-align: center;
  line-height: 44px;
  vertical-align: middle;
  overflow: hidden;
}
.left img {
  margin-top: 6px;
}

.center-item {
  height: 22px;
  width: 85%;
  background-color: #f6f6f6;
  margin-top: 11px;
  margin-left: 5%;
  border-radius: 10px;
  outline: none;
  display: flex;
  font-size: 14px;
  line-height: 22px;
  vertical-align: middle;
}
.center-item-left {
  width: 20%;
}
.center-item-left img {
  margin-bottom: -5px;
}
.center-item-right {
  flex: 1;
  text-align: center;
}

.right img {
  margin-top: 6px;
}
</style>
