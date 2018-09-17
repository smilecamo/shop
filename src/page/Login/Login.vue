<template>
  <div class="login">
    <div class="content">
      this is login
      <p>{{fullName}}</p>
      <p>{{names}}</p>
      <p>{{sortLists}}</p>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapActions
} from 'vuex'
export default {
  // 原生使用actions
  // mounted () {
  //   this.$store.dispatch('upDateName', {
  //     name: 'namessss',
  //     time: 2300
  //   })
  // },
  // 借助...mapActions
  mounted () {
    this.upDateName({
      name: 'namessss',
      time: 2300
    })
  },
  methods: {
    ...mapActions(['upDateName'])
  },
  computed: {
    ...mapGetters(['fullName']),
    // 自定义名称显示
    ...mapState({
      names: 'name',
      sortLists: (state) => state.sortList
    })
  }
}
</script>

<style lang="stylus">
.login{
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>
