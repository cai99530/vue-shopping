<template>
  <swiper>
    <swiper-item
      class="swiper-item"
      v-for="(item, index) in ctopImages"
      :key="index"
    >
      <a href="">
        <img :src="item" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DSwiper",
  props: {
    ctopImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.swiper-item {
  height: 280px;
  overflow: hidden;
}
</style>
