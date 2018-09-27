<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.edit')}}</span>
    <Divider dashed />
    <Edit></Edit>
    <router-view></router-view>
    <Button type="primary" @click="add">{{$t('submit')}}</Button>
  </div>
</template>

<script>
import Edit from '@/common/edit/edit'
export default {
  beforeRouteEnter (to, from, next) {
    // ...
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // ...
    // console.log(this)
    next()
  },
  components: {
    Edit
  },
  methods: {
    add () {
      console.log(this.$store.state.imgList)
    }
  }
}
</script>

<style scoped>
.add-content {
  margin-top: 20px;
}
.content-header {
  font-size: 20px;
}
</style>
