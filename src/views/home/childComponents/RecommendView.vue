<template>
  <div class="recommend">
    <div class="item" v-for="(item, index) in crecommends" :key="index">
      <div>
        <img :src="item.image" alt="" @click="click" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    crecommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    click() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 94%;
  overflow-x: scroll;
  height: 110px;
  background-color: white;
  border-radius: 15px;
  margin-top: 10px;
  margin-left: 3%;
  margin-right: 3%;
  overflow: hidden;
}

.item {
  margin-top: 15px;
  font-size: 15px;
  flex: 1;
  text-align: center;
}

.item img {
  width: 60px;
  height: 60px;
  overflow: auto;
}
</style>
