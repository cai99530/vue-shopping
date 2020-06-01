<template>

    <nav-bar class="d-nav-bar">
      <template v-slot:left>
        <div class="left">
          <img
            src="~assets/image/navbar/detail/goback.svg"
            alt=""
            @click="back"
          />
        </div>
      </template>

      <template v-slot:center>
        <div class="center">
          <div class="centeritem" v-for="(item, index) in titles" :key="index" @click="titleClick(index)">
            <div :class="{actice: currentIndex === index}">{{ item }}</div>
          </div>
        </div>
      </template>

      <template v-slot:right>
        <div class="right">
          <img src="~assets/image/navbar/detail/share.svg" alt="" @click="go" />
          <img src="~assets/image/navbar/detail/more.svg" alt="" />
        </div>
      </template>
    </nav-bar>

</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DNavBar",
  props: {
    titles: {
      type: Array,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    go() {},
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.d-nav-bar {
  font-size: 15px;
  font-family: 微软雅黑;
  z-index: 999;
  position: relative;
  background-color: rgba(100, 200, 50, 1);
}

.left {
  width: 40px;
  display: flex;
}
.left img {
  flex: 1;
  overflow: auto;
  margin-top: 6px;
}

.center {
  margin-left: -10px;
  padding-right: 10px;
  display: flex;
  line-height: 44px;
  vertical-align: middle;
  text-align: center;
}
.centeritem {
  flex: 1;
  color: black;
}
.actice {
  color: #fff;
}

.right {
  width: 70px;
  text-align: center;
  line-height: 44px;
  vertical-align: middle;
  display: flex;
}
.right img {
  flex: 1;
  overflow: auto;
  height: 20px;
  margin-top: 12px;
}
</style>
