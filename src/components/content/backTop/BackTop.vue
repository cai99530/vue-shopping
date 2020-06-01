<template>
  <div class="back-top">
    <img src="~assets/image/home/backtop.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  height: 45px;
  width: 45px;
  background-color: white;
  border-radius: 50px;
  position: fixed;
  bottom: 60px;
  right: 5px;
  outline: none;
}

.back-top img {
  height: 45px;
  width: 45px;
  overflow: auto;
}
</style>
