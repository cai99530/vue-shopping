<template>
  <div id="tab-control">
    <div
      class="item"
      v-for="(item, index) in titles"
      :key="index"
      @click="click(index)"
    >
      <div class="span">
        <span :class="{ activespan: currentIndex === index }">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    click(index) {
      this.currentIndex = index;
      this.$emit("tabControlClick", index);
    }
  }
};
</script>

<style scoped>
#tab-control {
  height: 40px;
  background-color: white;
  display: flex;
}

.item {
  flex: 1;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
}

.activespan {
  color: var(--color-high-text);
  font-family: 微软雅黑;
  border-bottom: 3px solid #00aa00;
}
</style>
