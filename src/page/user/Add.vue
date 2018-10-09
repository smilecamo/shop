<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.add')}}</span>
    <Divider dashed />
    <Edit></Edit>
    <Button
      type="primary"
      @click=handle
      style="width: 50%,margin: 0 auto"
      >{{$t('submit')}}</Button>
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
    this.$store.state.thumbnail = []
    this.$store.state.content = ''
    this.$store.state.file = ''
    this.$store.state.imgList = []
  },
  methods: {
    handle () {
      console.log(this.$store.state.name)
      console.log(this.$store.state.price)
      console.log(this.$store.state.sort)
      console.log(this.$store.state.brand)
      console.log(this.$store.state.supplier)
      console.log(this.$store.state.abstract)
      console.log(this.$store.state.details)
      console.log(this.$store.state.content)
      console.log(this.$store.state.file, this.$store.state.imgList)
      console.log(this.$store.state.imgList)
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
