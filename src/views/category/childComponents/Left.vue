<template>
  <div class="left">
    <scroll
      class="content"
      ref="scroll"
      :probe-type="typeNum"
      :pull-up-load="pullUpLoad"
    >
      <div
        v-for="(item, index) in leftInfo"
        :key="index"
        class="item"
        @click="check(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "left",
  props: {
    leftInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      typeNum: 3,
      pullUpLoad: true,
      currentIndex: 0
    };
  },
  components: {
    Scroll
  },
  methods: {
    check(index) {
      this.currentIndex = index;
      const maitKey = this.leftInfo[index].maitKey;
      this.$emit("leftClick", maitKey);
    }
  },
  mounted() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.left {
  width: 30%;
  float: left;
  height: 100vh;
}
.item {
  height: 60px;
  width: 100%;
  line-height: 60px;
  vertical-align: middle;
  text-align: center;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 70%;
  bottom: 49px;
  overflow: hidden;
}

.active {
  color: #00aa00;
  background-color: #fff;
}
</style>
