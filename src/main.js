// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Store from 'store'
import axios from 'axios'
import qs from 'qs'
import VueI18n from 'vue-i18n'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import App from './App'
import router from './router'
import createStore from './store/store'
import './common/view.js'
import './common/VueQuillEditor.js'
import langEN from './common/lang/en.js'
import langUS from './common/lang/us.js'
Vue.use(VueI18n)
// 图片设置
Vue.component('ImgInputer', ImgInputer)
// 语言设置
if (localStorage.getItem(`language`)) {
  let reg = new RegExp('"', 'g')
  let lang = localStorage.getItem(`language`)
  lang = lang.replace(reg, '')
  Vue.config.lang = lang
} else {
  Vue.config.lang = 'en-US'
}
Vue.locale('en-US', langUS)
Vue.locale('zh-CN', langEN)
Vue.config.productionTip = false
Vue.prototype.$Stores = Store
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
const store = createStore()
// 导航守卫全局
router.beforeEach((to, from, next) => {
  // 标签页设置
  // 跳转拦截
  // 获取login登录中设置的用户信息
  const users = JSON.parse(sessionStorage.getItem('role'))
  // 如果权限为1并且需要登录的进入管理员页面
  if (to.meta.needLogin === 'true' && to.meta.admin === 'true') {
    users.role === 1 ? next() : next('/err')
  } else if (to.meta.needLogin === 'true') {
    users === null ? next('/login') : next()
  } else {
    next()
  }
})
router.beforeResolve((to, from, next) => {
  next()
})
router.afterEach((to, from) => {

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
