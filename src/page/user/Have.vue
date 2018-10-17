<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.Already')}}</span>
    <Divider dashed />
    <Table
      border
      ref="selection"
      :columns="columns4"
      @on-selection-change="selection"
      :data="data1"></Table>
    <div class="pages">
    <Page
    :total="dataCount"
    :page-size="pageSize"
    @on-change="changepage"
    class="page"
    ></Page>
    <Button
    type="error"
    class="left"
    @click="delShops"
    >Delete</Button>
    </div>
  </div>
</template>

<script>
export default {
  // 更新的时候
  beforeRouteUpdate (to, from, next) {
    // ...
    next()
  },
  data () {
    return {
      index: 1,
      pageSize: 20,
      dataCount: 0,
      columns4: [
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
          tooltip: true
        },
        {
          title: this.$t('shop.brand'),
          key: 'brand',
          tooltip: true
        },
        {
          title: this.$t('shop.supplier'),
          key: 'supplier',
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
                    // 不显示当前价和商品名称2
                    this.$store.commit('show', false)
                    this.$store.commit('shopId', params.row.id)
                    this.$router.push({path: '/edit'})
                  }
                }
              }, 'edit'),
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
                    this.delShop(params.row.id)
                    console.log(params.row.id)
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
  mounted () {
    this.list()
  },
  methods: {
    list () {
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
          'currentPage': this.index,
          'pageSize': this.pageSize
        }
      })
        .then((res) => {
          console.log(res.data)
          this.data1 = res.data.data.list
          this.dataCount = res.data.data.totalCount
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('err')
        })
    },
    changepage (index) {
      this.index = index
      this.list()
    },
    // 删除单个商品
    delShop (id) {
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
            this.list()
          } else {
            this.$Message.error('error')
          }
        })
    },
    // 选中的数据
    selection (selection) {
      let arr = []
      // var tt  = [...new Set([5,5,6,6,8,])]
      for (let i = 0; i < selection.length; i++) {
        console.log(selection[i].id)
        arr.push(selection[i].id)
        // var set = new Set(arr)
        // this.arr = Array.from(set)
      }
      let tt = [...new Set(arr)]
      this.arr = tt
      console.log(this.arr)
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
            this.list()
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
