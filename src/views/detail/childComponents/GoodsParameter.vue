<template>
  <div class="goods-parameter" v-if="Object.keys(cgoodsParam).length !== 0">
    <table class="size">
      <tr v-for="(item, index) in sizeTable" :key="index">
        <td v-for="(i, index) in item" :key="index">{{ i }}</td>
      </tr>
    </table>

    <div class="explain">
      <p>{{ ruleKey }}</p>
      <p>{{ disclaimer }}</p>
    </div>
    <table class="info">
      <tr v-for="(item, index) in infoSetTable" :key="index">
        <td v-for="(i, key, index) in item" :key="index">{{ i }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GoodsParameter",
  data() {
    return {
      sizeTable: [],
      infoSetTable: [],
      ruleKey: "",
      infoKey: "",
      disclaimer: ""
    };
  },
  props: {
    cgoodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    cgoodsParam() {
      this.sizeTable.push(...this.cgoodsParam.rule.tables[0]);
      this.infoSetTable.push(...this.cgoodsParam.info.set);

      this.infoKey = this.cgoodsParam.info.key;
      this.ruleKey = this.cgoodsParam.rule.key;
      this.disclaimer = this.cgoodsParam.rule.disclaimer;
    }
  }
};
</script>

<style scoped>
.goods-parameter {
  width: 100%;
  background-color: #fff;
  margin-top: 8px;
  border-radius: 8px;
  outline: none;
  overflow: hidden;
}
.size {
  width: 100%;
  font-family: 微软雅黑;
  font-size: 14px;
  text-align: center;
}
.size tr {
  box-shadow: 0 0.2px 0 #888888;
  height: 20px;
}
.size tr:last-child {
  box-shadow: none;
}
.size td:first-child {
  color: #00aa00;
}

.explain {
  margin-top: 8px;
  padding-left: 3%;
  font-family: 微软雅黑;
  font-size: 15px;
  color: black;
}

.info {
  width: 100%;
  font-family: 微软雅黑;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 3%;
  word-wrap: break-word;
}
.info tr {
  box-shadow: 0 0.2px 0 #888888;
  height: 20px;
}
.info tr:last-child {
  box-shadow: none;
}
/* .info td:last-child{
    padding-left: 10px;

  } */
.info td:first-child {
  width: 50px;
  color: #00aa00;
}
</style>
