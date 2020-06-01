<template>
  <div class="base-info" v-if="Object.keys(cgoods).length !== 0">
    <div class="event">
      <img v-for="(item,index) in img" :key="index" :src="item" alt="" />
    </div>
    <div class="info">
      <div class="header">
        <div class="price-item-left">
          <div class="new-price">
            {{ cgoods.newPrice }}
          </div>
          <div class="old-price">
            {{ cgoods.oldPrice }}
          </div>
        </div>
        <div class="price-item-right">
          <div class="perthings">
            <img src="~assets/image/detail/downprice.svg" alt="" />
            <div>降价通知</div>
          </div>
          <div class="perthings" @click="getcollect">
            <div v-if="!isCollected">
              <img src="~assets/image/detail/collect.svg" alt="" />
              <div style="width: 30px">收藏</div>
            </div>
            <div v-else>
              <img src="~assets/image/detail/mycollect.svg" alt="" />
              <div style="color: #00AA00">已收藏</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="title">
          {{ cgoods.title }}
        </div>
        <div class="vip">
          <div style="width: 75%;padding-left: 2%">
            开通超级VIP，尽享百项福利
          </div>
          <div style="flex: 1;">
            <a style="color: black" href="">查看详情 ></a>
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="checked">
        <div class="servieces-left">已选</div>
        <div class="servieces-right">
          <div class="goods-info">{{ cgoods.title }}</div>
          <div class="othercheck">
            <img src="~assets/image/detail/showmore.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="buyto">
        <div class="servieces-left">送至</div>
        <div class="servieces-right" style="border-bottom:none">
          <div class="goods-info">地址</div>
          <div class="othercheck">
            <img src="~assets/image/detail/showmore.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="serve">
        <div v-for="(item, index) in cgoods.services" :key="index">
          <div>
            <img v-if="item.icon" :src="'https:' + item.icon" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    cgoods: {
      type: Object,
      default() {
        return {};
      }
    },
    img: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isCollected: false,
    };
  },

  methods: {
    getcollect() {
      this.isCollected = !this.isCollected;
    }
  },

};
</script>

<style scoped>
.base-info {
  font-family: 微软雅黑;
  overflow: hidden;
}

.event {
  height: 60px;
  box-shadow: 0 0.2px 0 #888888;
  overflow: hidden;
}
.event img {
  height: 60px;
  width: 100%;
  overflow: auto;
}

.info {
  height: 120px;
  box-shadow: 0 0.08px 0 #888888;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  outline: none;
}
.header {
  height: 40px;
  display: flex;
}
.price-item-left {
  width: 65%;
  display: flex;
}
.new-price {
  width: 80%;
  line-height: 40px;
  vertical-align: middle;
  font-size: 20px;
  color: #00aa00;
  overflow: hidden;
  padding-left: 5px;
}
.old-price {
  flex: 1;
  line-height: 40px;
  vertical-align: middle;
  text-decoration: line-through;
  font-size: 13px;
}

.price-item-right {
  flex: 1;
  display: flex;
  font-size: 10px;
  text-align: center;
  padding-top: 5px;
  padding-left: 20px;
}
.price-item-right img {
  width: 18px;
  height: 18px;
  overflow: auto;
}
.perthings {
  margin-left: 8%;
  color: black;
}

.main {
  height: 80px;
  padding-left: 5px;
}

.title {
  height: 60px;
  word-wrap: break-word;
  word-break: normal;
  overflow: hidden;
  color: black;
}
.vip {
  height: 15px;
  width: 90%;
  margin-left: 4%;
  padding-left: 5px;
  font-size: 13px;
  color: #fff;
  background-color: darkkhaki;
  border-radius: 25px;
  outline: none;
  line-height: 15px;
  vertical-align: middle;
  display: flex;
}

.services {
  height: 120px;
  box-shadow: 0 0.08px 0 #888888;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  outline: none;
  overflow: hidden;
  color: black;
}

.servieces-left {
  width: 60px;
  border: none;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
}
.servieces-right {
  flex: 1;
  box-shadow: 0 0.2px 0 darkgray;
  overflow: hidden;
  display: flex;
}
.goods-info {
  width: 85%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 40px;
  vertical-align: middle;
}
.othercheck {
  flex: 1;
  text-align: center;
  /* margin-top: 4px; */
  line-height: 60px;
  vertical-align: middle;
  overflow: hidden;
}
.checked {
  height: 40px;
  display: flex;
}
.buyto {
  height: 40px;
  display: flex;
}

.serve {
  height: 40px;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
  font-size: 12px;
}
.serve img {
  width: 12px;
  height: 12px;
  overflow: auto;
}
</style>
