<template>
  <home-main>
    <center-body>
      <template v-slot:left>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
      <template v-slot:right>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
    </center-body>
    <center-body>
      <template v-slot:left>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
      <template v-slot:right>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
    </center-body>
    <center-body>
      <template v-slot:left>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
      <template v-slot:right>
        <div class="centeritem">
          <img src="~assets/image/homemain/test.png" alt="" />
        </div>
      </template>
    </center-body>
  </home-main>
</template>

<script>
import HomeMain from "components/common/homemain/HomeMain.vue";
import CenterBody from "components/common/homemain/CenterBody.vue";

export default {
  name: "MainHome",
  components: {
    HomeMain,
    CenterBody
  }
};
</script>

<style scoped>
.centeritem img {
  /* height: 130px;*/
  margin: 10px 3px 5px 3px;
  height: 200px;
  overflow: auto;
  border-radius: 10px;
  outline: none;
}
</style>
