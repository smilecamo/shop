<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.edit')}}</span>
    <Divider dashed />
    <Edit></Edit>
    <router-view></router-view>
    <Button type="primary">{{$t('submit')}}</Button>
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
  mounted () {
    this.shopDeatil(this.$store.state.shopId)
  },
  methods: {
    shopDeatil (id) {
      this.$axios({
        method: 'GET',
        url: '/api/merchandise/commodity/quyCommodity',
        params: {
          'id': id
        }
      })
        .then((res) => {
          console.log(res.data.data.supplier)
          this.$store.state.shopId = res.data.data.id
          this.$store.commit('name', res.data.data.name)
          this.$store.commit('price', res.data.data.current_price)
          this.$store.commit('sort', res.data.data.cate_id)
          this.$store.commit('brand', res.data.data.brand_id)
          this.$store.commit('supplier', res.data.data.supplier)
          this.$store.commit('abstract', res.data.data.brief)
          this.$store.commit('thumbnail', res.data.data.icon)
          this.$store.commit('content', res.data.data.description)
          this.$store.commit('imgList', res.data.data.atlass)
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('接口报错')
        })
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
