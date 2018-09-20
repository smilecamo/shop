// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Store from 'store'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import createStore from './store/store'
import './common/view.js'
import './common/VueQuillEditor.js'
import langEN from './common/lang/en.js'
import langUS from './common/lang/us.js'
Vue.use(VueI18n)
var reg = new RegExp('"', 'g')
let lang = localStorage.getItem(`language`)
lang = lang.replace(reg, '')
Vue.config.lang = lang
Vue.locale('en-US', langUS)
Vue.locale('zh-CN', langEN)
Vue.config.productionTip = false
Vue.prototype.$Stores = Store
Vue.prototype.$axios = axios
const store = createStore()
// 导航守卫全局
router.beforeEach((to, from, next) => {
  // 标签页设置
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // 跳转拦截
  if (to.meta.needLogin === 'true') {
    // 获取login登录中设置的用户信息
    const users = JSON.parse(sessionStorage.getItem('user'))
    // const user = JSON.parse(window.localStorage.getItem('name'))
    // next()
    // console.log(users)
    // console.log($Cookie.get('name'))
    if (users === null) {
      next('/login')
    }
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
