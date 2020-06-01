<template>
  <div id="profile">
    <div class="head">
      <img src="~assets/image/profile/touxiang.svg" alt="">
    </div>
    <div class="input">
      <input type="text" value="" placeholder="邮箱/手机号">
      <input type="password" value="" placeholder="请输入密码">
      <div class="select">
        <div style="width:50%">短信登陆</div>
        <div style="flex:1;text-align:right">免费注册</div>
      </div>
    </div>
    <div class="submit">
      <div>
        提交
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",

};
</script>

<style scoped>
#profile{
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 99;
  background-color: #fff;
  overflow: hidden;
}

.head{
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.input{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 300px;
  width: 70%;
}
input{
  border: none;
  width: 100%;
  height: 20px;
  border-bottom: 2px #00AA00 solid;
  margin-top: 60px;
  background-color: rgba(0,0,0,0);
}
.select{
  margin-top: 10px;
  display: flex;
}

.submit{
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 60px;
  width: 70%;
  text-align: center;
  background-color: #00AA00;
  line-height: 60px;
  vertical-align: middle;
  font-weight: 500;
  font-size: 25px;
  color: white;
  border-radius: 30px;
  outline: none;
}
</style>
