import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'name',
    price: 'price',
    current: 'current',
    sort: 'sort',
    sortList: [
      {key: 1, value: '商品1'},
      {key: 2, value: '商品2'},
      {key: 3, value: '商品3'}
    ],
    brand: 'brand',
    supplier: 'supplier',
    abstract: 'abstract',
    details: 'details',
    content: 'content'
  },
  mutations: {
    name (state, meaaage) {
      state.name = meaaage
    },
    price (state, meaaage) {
      state.price = meaaage
    },
    current (state, meaaage) {
      state.current = meaaage
    },
    sort (state, meaaage) {
      state.sort = meaaage
    },
    brand (state, meaaage) {
      state.brand = meaaage
    },
    supplier (state, meaaage) {
      state.supplier = meaaage
    },
    abstract (state, meaaage) {
      state.abstract = meaaage
    },
    details (state, meaaage) {
      state.details = meaaage
    },
    content (state, meaaage) {
      state.content = meaaage
    },
    file (state, meaaage) {
      state.file = meaaage
    }
  },
  action: {
    addStore (content) {
      content.commit('add')
    }
  }
})

export default store
