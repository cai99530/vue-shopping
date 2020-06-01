import Toast from './Toast.vue'

const obj = {}

obj.install = (Vue) => {
  // 创建构造器
  const toastConstructor = Vue.extend(Toast)
  // 通过组件构造器创建组件对象
  const toast = new toastConstructor()
  // 将组件对象手动挂在到某个元素
  toast.$mount(document.createElement('div'))
  // toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj;
