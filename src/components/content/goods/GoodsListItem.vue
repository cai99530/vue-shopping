<template>
  <div class="goods-item">
    <div @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imgLoad" />
    </div>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div class="collect">
        <span v-show="goodsItem.price" class="price">{{ goodsItem.price | showPrice }}</span>
        <div class="my-collect" @click="change" v-show="goodsItem.price">
          <img
            v-if="!isCollect"
            src="~assets/image/home/collection.svg"
            alt=""
          />
          <img v-else src="~assets/image/home/mycollection.svg" alt="" />
          <!-- <div :class="getclass"  @click="change">{{goodsItem.cfav}}</div> -->
          <div v-show="goodsItem.price" :class="getclass()">{{ goodsItem.cfav }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      span: true,
      activespan: false,
      isCollect: false
    };
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  filters: {
    showPrice(val) {
      val ? val : null
      const value = Number(val);
      return "￥" + value.toFixed(2);
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    getclass() {
      return { span: this.span, activespan: this.activespan };
    },
    change() {
      this.span = !this.span;
      this.activespan = !this.activespan;
      this.isCollect = !this.isCollect;
      if (!this.span) {
        this.goodsItem.cfav++;
      } else {
        this.goodsItem.cfav--;
      }
    },
    itemClick() {
      if(this.goodsItem.iid){
        this.$router.push("/detail/" + this.goodsItem.iid);
      }else{
        window.location.href=this.goodsItem.link
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  height: 40px;
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  padding-top: 2px;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.collect {
  height: 20px;
  display: flex;
  text-align: center;
  line-height: 20px;
  vertical-align: middle;
}

.collect .price {
  color: var(--color-high-text);
  flex: 1;
}

.my-collect {
  flex: 1;
  display: flex;
}
.collect img {
  flex: 1;
  height: 15px;
  width: 15px;
  overflow: auto;
  margin-top: 2.5px;
}

.span {
  margin-right: 50px;
  border: none;
}

.activespan {
  margin-right: 50px;
  color: #00aa00;
  border: none;
}
/* .collect img{
    width: 16px;
    height: 15px;
    overflow: auto;
  }

  .my-collect{
    flex: 1;
  }

  .active-my-collect{
    color: #00AA00;
  } */

/* .goods-info .collect {
    position: relative;
  } */

/* top: -1px; */
/* .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;

    width: 14px;
    height: 14px;
    background: url("~assets/image/home/collection.svg") 0 0/14px 14px;
  } */
</style>
