<template>
  <div class="add-content">
    <span class="content-header">
      <Icon type="ios-arrow-dropleft-circle" @click="back"/>
      {{$t('admin.reviewPage')}}
    </span>
    <Divider dashed />
    <Edit></Edit>
    <div>
    <Button
      type="primary"
      style="width: 50%,margin: 0 auto"
      @click="handle"
      >{{$t('admin.passed')}}</Button>
    <!-- <Button
      type="error"
      style="width: 50%,margin: 0 auto"
      >审核不通过</Button> -->
      </div>
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
    this.shopDetail(this.$store.state.shopId)
  },
  methods: {
    shopDetail (id) {
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
          this.$store.commit('name1', res.data.data.activityName)
          this.$store.commit('price', res.data.data.origin_price)
          this.$store.commit('activityPrice', res.data.data.activityPrice)
          this.$store.commit('current', res.data.data.current_price)
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
    handle () {
      let re = /^[0-9]+.?[0-9]*/
      if (this.$store.state.name === '') {
        this.$Message.error(this.$t('err.name'))
      } else if (this.$store.state.name1 === '' || null) {
        this.$Message.error(this.$t('err.name'))
      } else if (!re.test(this.$store.state.price)) {
        this.$Message.error(this.$t('err.price'))
      } else if (!re.test(this.$store.state.activityPrice)) {
        this.$Message.error(this.$t('err.price'))
      } else if (!re.test(this.$store.state.current)) {
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
            activityName: this.$store.state.name1,
            activityPrice: this.$store.state.activityPrice,
            origin_price: this.$store.state.price,
            current_price: this.$store.state.current,
            cate_id: this.$store.state.sort,
            brand_id: this.$store.state.brand,
            supplier: this.$store.state.supplier,
            brief: this.$store.state.abstract,
            description: this.$store.state.content,
            icon: this.$store.state.icon,
            is_effect: 1,
            sale_count: 0,
            atlass: this.$store.state.imgList
          }
        })
          .then((res) => {
            if (res.data.code === 200) {
              this.$Message.success('success')
              this.$router.push({path: '/audited'})
            } else {
              this.$Message.error('err')
            }
          })
          .catch((err) => {
            console.log(err)
            this.$Message.error('err')
          })
      }
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
