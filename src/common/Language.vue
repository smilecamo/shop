<template>
  <div class="connet">

  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'en-US'
    }
  },
  created () {
    this.language = this.$Stores.get('language')
  },
  methods: {
    changeLang (value) {
      this.$Stores.set('language', value)
      this.$router.go()
    },
    quit () {
      sessionStorage.clear()
      this.$Message.success('quit')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
.connet{
  width 1240px
  margin 0 auto
}
.Setting{
  float right
}
</style>
