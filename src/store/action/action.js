export default {
  upDateName (store, data) {
    setInterval(() => {
      store.commit('name', data.name)
    }, data.time)
  }
}
