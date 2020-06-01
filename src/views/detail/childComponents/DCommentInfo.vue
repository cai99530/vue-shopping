<template>
  <div class="dcomment-info" v-if="Object.keys(ccommentInfo).length !== 0">
    <div class="header">
      <div class="header-left">
        <img src="~assets/image/detail/xiushizuo.svg" alt="" />
      </div>
      <div class="header-title">评论</div>
      <div class="show-more">
        <div style="float:right;margin-right:5px">更多 ></div>
      </div>
    </div>

    <div class="tag"></div>

    <div class="comment">
      <div class="user-info">
        <img class="user-headimg" :src="ccommentInfo.user.avatar" alt="" />
        <div class="user-name">
          {{ ccommentInfo.user.uname }}
        </div>
        <div class="datetime">
          <div style="float:right;margin-right:5px">
            {{ ccommentInfo.created | gettime }}
          </div>
        </div>
      </div>
      <div class="comments">
        {{ ccommentInfo.content }}
      </div>
      <div class="showimage">
        <div v-if="!ccommentInfo.images">该用户还没有上传任何图片。</div>
        <img
          v-else
          v-for="(item, index) in ccommentInfo.images"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
      <div class="footer">
        <div class="footer-item">查看全部评论 ></div>
      </div>
    </div>
  </div>
  <div v-else class="dcomment-info" style="text-align: center;padding-bottom:8px">
    <div>该商品还没有用户进行评论。</div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  name: "DCommentInfo",
  props: {
    ccommentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    gettime(val) {
      // 时间戳转成date对象
      const date = new Date(val * 1000);
      // 格式化
      return formatDate(date, "yyyy-mm-dd");
    }
  }
};
</script>

<style scoped>
.dcomment-info {
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  outline: none;
  background-color: #fff;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
}

.header {
  display: flex;
  width: 100%;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  overflow: hidden;
}
.header-left {
  width: 40px;
  text-align: center;
}
.header-left img {
  width: 32px;
  height: 32px;
  overflow: auto;
}

.header-title {
  width: 36px;
  font-family: 微软雅黑;
  font-size: 18px;
  color: #00aa00;
}
.show-more {
  flex: 1;
}

.comment {
  height: 300px;
  width: 100%;
  margin-top: 8px;
  padding: 3%;
  overflow: hidden;
  box-shadow: 0 0.2px 0 #888888;
}
.user-info {
  width: 100%;
  height: 40px;
  display: flex;
  overflow: hidden;
  line-height: 40px;
  vertical-align: middle;
}

.user-headimg {
  width: 32px;
  height: 32px;
  overflow: auto;
  border-radius: 100px;
  margin-top: 4px;
}
.user-name {
  font-size: 12px;
  color: black;
  margin-left: 5px;
}
.datetime {
  flex: 1;
  font-size: 12px;
  color: black;
  text-align: center;
  float: right;
  overflow: hidden;
}

.comments {
  width: 100%;
  height: 60px;
  padding-top: 10px;
  font-size: 12px;
  color: black;
  font-family: 微软雅黑;
  padding-top: 15px;
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.showimage {
  height: 100px;
  width: 100%;
  overflow: hidden;
  line-height: 100px;
  vertical-align: middle;
}
.showimage img {
  height: 90px;
  width: 90px;
  overflow: hidden;
  border-radius: 8px;
  outline: none;
  margin-left: 20px;
  margin-top: 5px;
}
.showimage img:first-child {
  margin: 5px 0 0 0;
}

.footer {
  width: 100%;
  height: 80px;
  padding: 10% 0 0 35%;
}
.footer-item {
  width: 100px;
  height: 40px;
  font-size: 12px;
  color: #00aa00;
  border: 1px solid #00aa00;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  border-radius: 25px;
  outline: none;
}


</style>
