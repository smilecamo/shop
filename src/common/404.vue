<template>
  <div>
    <img src='../assets/404.jpg' width="100%" height="100%" alt="404图片" style="position:absolute; left:0; top:0; z-index:-1;">
    <Button class='btn1' to="home">HOME</Button>
    <Button class='btn2' @click="back">上一页</Button>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn1{
  border 0
  width 370px
  height 50px
  position absolute
  left 30%
  top 80%
}
.btn2{
  border 0
  width 370px
  height 50px
  position absolute
  left 50%
  top 80%
}
</style>
