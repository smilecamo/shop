<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.edit')}}</span>
    <Divider dashed />
    <Edit></Edit>
    <router-view></router-view>
    <Button type="primary" @click='submit'>{{$t('submit')}}</Button>
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
        url: 'http://47.100.31.2:8083/merchandise/commodity/quyCommodity',
        params: {
          'id': id
        }
      })
        .then((res) => {
          let ads = []
          let ad = 'url=' + res.data.data.icon
          ads.push(this.$qs.parse(ad))
          this.$store.state.shopId = res.data.data.id
          this.$store.commit('name', res.data.data.name)
          this.$store.commit('price', res.data.data.origin_price)
          this.$store.commit('sort', res.data.data.cate_id)
          this.$store.commit('brand', res.data.data.brand_id)
          this.$store.commit('supplier', res.data.data.supplier)
          this.$store.commit('abstract', res.data.data.brief)
          this.$store.commit('thumbnail', ads)
          this.$store.commit('icon', res.data.data.icon)
          this.$store.commit('content', res.data.data.description)
          this.$store.commit('imgList', res.data.data.atlass)
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('err')
        })
    },
    submit () {
      let re = /^[0-9]+.?[0-9]*/
      if (this.$store.state.name === '') {
        this.$Message.error(this.$t('err.name'))
      } else if (!re.test(this.$store.state.price)) {
        this.$Message.error(this.$t('err.price'))
      } else if (this.$store.state.sort === '') {
        this.$Message.error(this.$t('err.sort'))
      } else if (this.$store.state.brand === '') {
        this.$Message.error(this.$t('err.brand'))
      } else if (this.$store.state.supplier === '') {
        this.$Message.error(this.$t('err.supplier'))
      } else if (this.$store.state.abstract === '') {
        this.$Message.error(this.$t('err.Description'))
      } else if (this.$store.state.content === '') {
        this.$Message.error(this.$t('err.empty'))
      } else if (this.$store.state.icon === '') {
        this.$Message.error(this.$t('err.img'))
      } else if (this.$store.state.imgList.length <= 0) {
        this.$Message.error(this.$t('err.imgList'))
      } else {
        this.$axios({
          method: 'POST',
          url: 'http://47.100.31.2:8083/merchandise/commodity/upCommodity',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            id: this.$store.state.shopId,
            name: this.$store.state.name,
            origin_price: this.$store.state.price,
            cate_id: this.$store.state.sort,
            brand_id: this.$store.state.brand,
            supplier: this.$store.state.supplier,
            brief: this.$store.state.abstract,
            description: this.$store.state.content,
            icon: this.$store.state.icon,
            is_effect: 0,
            atlass: this.$store.state.imgList
          }
        })
          .then((res) => {
            if (res.data.code === 200) {
              this.$Message.success('success')
              this.$router.push({path: '/have'})
            } else {
              this.$Message.err('err')
            }
          })
          .catch((err) => {
            console.log(err)
            this.$Message.error('err')
          })
      }
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
