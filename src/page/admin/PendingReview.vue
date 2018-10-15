<template>
  <div>
    <span class="content-header">{{$t('admin.pendingPage')}}</span>
    <Divider dashed />
    <div>
    <Input @on-search='searchName'  suffix="ios-search" search placeholder="商品名称" style="width: auto" />
    <Input @on-search='searchSort' suffix="ios-search" search placeholder="商品分类" style="width: auto" />
    </div>
    <Table
    border
    ref="selection"
    :loading="loading"
    :columns="brandHeader"
    @on-selection-change="selection"
    :data="data1"
    ></Table>
    <div class="pages">
    <Button @click="delShops">{{$t('header.del')}}</Button>
    <Page
    :total="dataCount"
    :page-size="pageSize"
    @on-change="changepage"
    class="page"
    ></Page>
    </div>
    <BackTop />
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [],
      loading: true,
      name: '',
      password: '',
      Permission: '0',
      index: 1,
      ModifyAccount: false,
      // 设置初始化信息数
      dataCount: 0,
      // 每页显示的数量
      pageSize: 20,
      // 设置表格头部
      brandHeader: [
        {
          type: 'selection',
          width: 60,
          key: 'id',
          align: 'center'
        },
        {
          title: this.$t('shop.name'),
          key: 'name',
          tooltip: true
        },
        {
          title: this.$t('shop.sort'),
          key: 'cate',
          sortable: true,
          tooltip: true
        },
        {
          title: this.$t('shop.brand'),
          key: 'brand',
          sortable: true,
          tooltip: true
        },
        {
          title: this.$t('shop.supplier'),
          key: 'supplier',
          tooltip: true,
          render: (h, params) => {
            let texts = ''
            if (params.row.supplier === 1) {
              texts = 'kingstar auto'
            } else if (params.row.supplier === 2) {
              texts = '1000online'
            }
            return h('div', {
            }, texts)
          }
        },
        {
          title: this.$t('shop.cost'),
          key: 'origin_price',
          tooltip: true
        },
        {
          title: this.$t('shop.action'),
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'md-create'
                },
                style: {
                  marginRight: '10px',
                  fontSize: '24px',
                  color: '#2d8cf0',
                  padding: '0 10px',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    // 显示当前价和商品名称2
                    this.$store.commit('show', true)
                    this.$store.commit('shopId', params.row.id)
                    this.$router.push({path: '/Review'})
                  }
                }
              }, ''),
              h('Icon', {
                props: {
                  type: 'md-trash'
                },
                style: {
                  marginRight: '5px',
                  fontSize: '24px',
                  color: 'red',
                  padding: '0 5px',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.delUser(params.row.id)
                  }
                }
              }, '')
            ])
          }
        }
      ],
      data1: []
    }
  },
  created () {
    this.shopList()
  },
  methods: {
    // 按照商品名查询
    searchName (val) {
      this.$axios({
        method: 'POST',
        url: 'http://47.100.31.2:8083/merchandise/commodity/getCommodity',
        data: {
          'id': null,
          'name': val,
          'cateName': null,
          'brandName': null,
          'startDate': null,
          'endDate': null,
          'is_effect': 0,
          'currentPage': this.index,
          'pageSize': this.pageSize
        }
      })
        .then((res) => {
          console.log(res.data)
          this.loading = false
          this.data1 = res.data.data.list
          this.dataCount = res.data.data.totalCount
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('接口报错')
        })
    },
    // 按照分类查询
    searchSort (val) {
      this.$axios({
        method: 'POST',
        url: 'http://47.100.31.2:8083/merchandise/commodity/getCommodity',
        data: {
          'id': null,
          'name': null,
          'cateName': val,
          'brandName': null,
          'startDate': null,
          'endDate': null,
          'is_effect': 0,
          'currentPage': this.index,
          'pageSize': this.pageSize
        }
      })
        .then((res) => {
          this.loading = false
          this.data1 = res.data.data.list
          this.dataCount = res.data.data.totalCount
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('接口报错')
        })
    },
    changepage (index) {
      this.index = index
      this.shopList()
    },
    shopList () {
      this.$axios({
        method: 'POST',
        url: 'http://47.100.31.2:8083/merchandise/commodity/getCommodity',
        data: {
          'id': null,
          'name': null,
          'cateName': null,
          'brandName': null,
          'startDate': null,
          'endDate': null,
          'is_effect': 0,
          'currentPage': this.index,
          'pageSize': this.pageSize
        }
      })
        .then((res) => {
          console.log(res.data)
          this.loading = false
          this.data1 = res.data.data.list
          this.dataCount = res.data.data.totalCount
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('接口报错')
        })
    },
    // 删除单个
    delUser (id) {
      this.$axios({
        method: 'POST',
        url: 'http://47.100.31.2:8083/merchandise/commodity/delCommodity',
        params: {
          id: id
        }
      })
        .then((res) => {
          if (res.data.data === null) {
            this.$Message.success('success')
            this.shopList()
          } else {
            this.$Message.error('error')
          }
        })
    },
    // 删除多个
    // 选中的数据
    selection (selection) {
      let arr = []
      for (let i = 0; i < selection.length; i++) {
        console.log(selection[i].id)
        arr.push(selection[i].id)
      }
      let tt = [...new Set(arr)]
      this.arr = tt
    },
    // 删除多个商品
    delShops () {
      this.$axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        url: 'http://47.100.31.2:8083/merchandise/commodity/delCommoditys',
        params: {
          'id': this.arr
        }
      })
        .then((res) => {
          if (res.data.data === null) {
            this.$Message.success('success')
            this.shopList()
          } else {
            this.$Message.error('error')
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-content {
  margin-top: 20px;
}
.content-header {
  font-size: 20px;
}
.pages{
  position relative
  height 50px
}
.page{
  position absolute
  top 10px
  right 0
}
.left{
  position absolute
  top 10px
  left 0
}
</style>
