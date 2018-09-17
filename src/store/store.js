import Vue from 'vue'
import Vuex from 'vuex'
// 初始数据
import defaultStore from './state/state'
// 更改数据
import mutations from './mutation/mutation'
// 异步更改数据
import actions from './action/action'
// 组装数据
import getters from './getters/getters'
Vue.use(Vuex)
// 生成store仓库
export default () => {
  return new Vuex.Store({
    state: defaultStore,
    mutations,
    getters,
    actions
    // action: {
    //   addStore (content) {
    //     content.commit('add')
    //   }
    // }
  })
}
