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
    this.$store.commit('show', false)
    this.$store.commit('name', '')
    this.$store.commit('price', '')
    this.$store.commit('current', '')
    this.$store.commit('sort', '')
    this.$store.commit('brand', '')
    this.$store.commit('supplier', '')
    this.$store.commit('abstract', '')
    this.$store.commit('details', '')
    this.$store.commit('thumbnail', [])
    this.$store.commit('content', '')
    this.$store.commit('file', '')
    this.$store.commit('imgList', [])
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
