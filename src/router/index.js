import Vue from 'vue'
import Router from 'vue-router'
import ADD from '@/page/ADD'
import Have from '@/page/Have'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ADD',
      name: 'ADD',
      component: ADD
    },
    {
      path: '/have',
      name: 'Have',
      component: Have
    }
  ]
})
