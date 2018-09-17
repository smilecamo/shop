// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createStore from './store/store'
import './common/view.js'
import './common/VueQuillEditor.js'
Vue.config.productionTip = false

const store = createStore()
// 导航守卫全局
router.beforeEach((to, from, next) => {
  // if (to.fullPath === '/add') {
  //   next('/edit/1')
  // } else {
  //   next()
  // }
  next()
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
