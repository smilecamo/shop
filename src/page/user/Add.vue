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
    this.$store.commit('abstract', '')
    this.$store.commit('details', '')
    this.$store.commit('thumbnail', [])
    this.$store.commit('content', '')
    this.$store.commit('file', '')
    this.$store.commit('imgList', [])
  },
  methods: {
    handle () {
      let re = /^[0-9]+.?[0-9]*/
      if (this.$store.state.name === '') {
        this.$Message.error('名字不能为空')
      } else if (!re.test(this.$store.state.price)) {
        this.$Message.error('价格类必须是数字并且不能为空')
      } else if (this.$store.state.sort === '') {
        this.$Message.error('分类不能为空')
      } else if (this.$store.state.brand === '') {
        this.$Message.error('品牌不能为空')
      } else if (this.$store.state.supplier === '') {
        this.$Message.error('供应商不能为空')
      } else if (this.$store.state.abstract === '') {
        this.$Message.error('描述详情不能为空')
      } else if (this.$store.state.content === '') {
        this.$Message.error('描述详情不能为空')
      } else if (this.$store.state.icon === '') {
        this.$Message.error('图片不能为空')
      } else if (this.$store.state.imgList.length <= 0) {
        this.$Message.error('图集不能为空')
      } else {
        this.$axios({
          method: 'POST',
          url: 'http://47.100.31.2:8083/merchandise/commodity/addCommodity',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            id: null,
            name: this.$store.state.name,
            origin_price: this.$store.state.price,
            cate_id: this.$store.state.sort,
            brand_id: this.$store.state.brand,
            supplier: this.$store.state.supplier,
            brief: this.$store.state.abstract,
            is_effect: 0,
            description: this.$store.state.content,
            icon: this.$store.state.icon,
            atlass: this.$store.state.imgList
          }
        })
          .then((res) => {
            if (res.data.code === 200) {
              this.$Message.success('success')
              this.$router.push({path: '/have'})
            } else {
              this.$Message.error('err')
            }
          })
          .catch((err) => {
            console.log(err)
            this.$Message.error('接口报错')
          })
      }
      console.log(this.$store.state.name)
      console.log(this.$store.state.price)
      console.log(this.$store.state.sort)
      console.log(this.$store.state.brand)
      console.log(this.$store.state.supplier)
      console.log(this.$store.state.abstract)
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
