<template>
  <div class="add-content">
    <span class="content-header">
      <Icon type="ios-arrow-dropleft-circle" @click="back"/>
      商品审核页
    </span>
    <Divider dashed />
    <Edit></Edit>
    <div>
    <Button
      type="primary"
      style="width: 50%,margin: 0 auto"
      >审核通过</Button>
    <Button
      type="error"
      style="width: 50%,margin: 0 auto"
      >审核不通过</Button></div>
  <router-view />
  </div>
</template>

<script>
import Edit from '@/common/edit/edit'
export default {
  components: {
    Edit
  },
  created () {
    this.$store.state.name = ''
    this.$store.state.price = ''
    this.$store.state.current = ''
    this.$store.state.sort = ''
    this.$store.state.brand = ''
    this.$store.state.supplier = ''
    this.$store.state.abstract = ''
    this.$store.state.details = ''
    this.$store.state.content = ''
    this.$store.state.file = ''
    this.$store.state.imgList = []
    console.log(this.$route.params.name.role)
    console.log(this.$route.params.name.userName)
  },
  methods: {
    handle () {
      console.log(this.$store.state.name)
      console.log(this.$store.state.price)
      console.log(this.$store.state.current)
      console.log(this.$store.state.sort)
      console.log(this.$store.state.brand)
      console.log(this.$store.state.supplier)
      console.log(this.$store.state.abstract)
      console.log(this.$store.state.details)
      console.log(this.$store.state.content)
      console.log(this.$store.state.file)
      console.log(this.$store.state.imgList)
    },
    back () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.add-content{
  margin-top: 20px;
}
.content-header{
  font-size: 20px;
}
</style>
