<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data(){
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message,time){
      this.isShow = true
      this.message = message
      setTimeout( () => {
        this.isShow = false
        this.message = ''
      },time)
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px 8px 10px;
  border-radius: 8px;
  outline: none;
  color: #fff;
  background-color: rgba(0,0,0,0.7);
  text-align: center;
}
</style>
