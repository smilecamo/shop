<template>
  <div>
    <span class="content-header">{{$t('admin.ReviewedPage')}}</span>
    <Divider dashed />
    <Table
    border
    ref="selection"
    :loading="loading"
    :columns="brandHeader"
    :data="data1"
    ></Table>
    <div class="pages">
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
      loading: false,
      index: 1,
      ModifyAccount: false,
      // 设置初始化信息数
      dataCount: 0,
      // 每页显示的数量
      pageSize: 20,
      // 设置表格头部
      brandHeader: [
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
          title: this.$t('shop.price'),
          key: 'current_price',
          tooltip: true
        },
        {
          title: this.$t('shop.time'),
          key: 'create_time',
          tooltip: true,
          render: (h, params) => {
            let time = ''
            let un = params.row.create_time
            let date = new Date(un * 1000)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            let hours = date.getHours() + ':'
            let m = date.getMinutes()
            time = year + '-' + month + '-' + day + ' ' + hours + m
            return h('div', {
            }, time)
          }
        }
        // {
        //   title: '操作',
        //   key: 'action',
        //   width: 150,
        //   align: 'center',
        //   render: (h, params) => {
        //     return h('div', [
        //       // h('Icon', {
        //       //   props: {
        //       //     type: 'md-create'
        //       //   },
        //       //   style: {
        //       //     marginRight: '10px',
        //       //     fontSize: '24px',
        //       //     color: '#2d8cf0',
        //       //     padding: '0 10px',
        //       //     cursor: 'pointer'
        //       //   },
        //       //   on: {
        //       //     click: () => {
        //       //       this.$store.commit('show', true)
        //       //       this.$router.push({name: 'Review', params: { name: params.row }})
        //       //     }
        //       //   }
        //       // }, ''),
        //       h('Icon', {
        //         props: {
        //           type: 'md-trash'
        //         },
        //         style: {
        //           marginRight: '5px',
        //           fontSize: '24px',
        //           color: 'red',
        //           padding: '0 5px',
        //           cursor: 'pointer'
        //         },
        //         on: {
        //           click: () => {
        //             this.$Message.success('success')
        //           }
        //         }
        //       }, '')
        //     ])
        //   }
        // }
      ],
      data1: []
    }
  },
  mounted () {
    this.shopList()
  },
  methods: {
    changepage (index) {
      this.index = index
      this.shopList()
      console.log(index)
    },
    shopList () {
      this.$axios({
        method: 'POST',
        url: '/merchandise/commodity/getCommodity',
        data: {
          'id': null,
          'name': null,
          'cateName': null,
          'brandName': null,
          'startDate': null,
          'endDate': null,
          'is_effect': 1,
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
          this.$Message.error('err')
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
