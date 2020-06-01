<template>
  <nav-bar class="cate-nav-bar">
    <template v-slot:left>
      <div class="chleft" @click="goback">
        <img src="~assets/image/navbar/category/goback.svg" alt="" />
      </div>
    </template>

    <template v-slot:center>
      <div class="chcenter" @click="search()">
        <img class="centerimg" src="~assets/image/navbar/search.svg" alt="" />
        <div><span>{{ hotwords }}</span></div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "CateNavBar",
  data(){
    return {
      hotwords: '搜索好物'
    }
  },
  components: {
    NavBar
  },
  methods: {
    goback() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.cate-nav-bar {
  background-color: #00aa00;
  position: relative;
  z-index: 9;
}
.chleft{
  text-align: center;
  margin-top: 2px;
}
.chcenter{
  margin-top: 10px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  outline: none;
  display: flex;
  padding-left: 30%;
}
.centerimg{
  margin-top: 2px;
}
</style>
