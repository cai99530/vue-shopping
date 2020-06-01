<template>
  <div class="detail-info">
    <div class="desc">
      {{ cdetailInfo.desc }}
    </div>
    <div class="key">
      <img src="~assets/image/detail/xiushizuo.svg" alt="" />
      <div>详情</div>
    </div>
    <div class="list-item">
      <img
        v-for="(item, index) in imagesList"
        :key="index"
        :src="item"
        alt=""
        @load="detailImageLoad()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DeatilInfo",
  data() {
    return {
      counter: 0,
      imagesLength: 0,
      imagesList: []
    };
  },
  props: {
    cdetailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    detailImageLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("ImageLoad");
      }
    }
  },
  watch: {
    cdetailInfo() {
      this.imagesLength = this.cdetailInfo.detailImage[0].list.length;
      this.imagesList.push(...this.cdetailInfo.detailImage[0].list);
    }
  }
};
</script>

<style scoped>
.detail-info {
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  outline: none;
  background-color: #fff;
  padding: 8px 5px 8px 5px;
  overflow: hidden;
}

.desc {
  font-family: 微软雅黑;
  font-size: 13px;
  color: black;
  overflow: hidden;
  word-wrap: break-word;
  word-spacing: normal;
  box-shadow: 0 0.2px 0 darkgray;
  padding-left: 5px;
}

.key {
  width: 100%;
  height: 40px;
  font-family: 微软雅黑;
  font-size: 18px;
  color: #00aa00;
  overflow: hidden;
  word-wrap: break-word;
  word-spacing: normal;
  padding-left: 5px;
  line-height: 40px;
  vertical-align: middle;
  display: flex;
}
.key img {
  height: 32px;
  width: 32px;
  overflow: hidden;
  margin-top: 4px;
}

/* .list-item {
    margin-top: 6px;
  } */
.list-item img {
  width: 100%;
  overflow: hidden;
}
</style>
