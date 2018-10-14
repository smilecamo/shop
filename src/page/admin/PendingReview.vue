<template>
  <div>
    <span class="content-header">待审核页面</span>
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
      loading: true,
      name: '',
      password: '',
      Permission: '0',
      index: 1,
      ModifyAccount: false,
      // 设置初始化信息数
      dataCount: 0,
      // 每页显示的数量
      pageSize: 2,
      // 设置表格头部
      brandHeader: [
        {
          title: '商品名称',
          key: 'name',
          tooltip: true
        },
        {
          title: '分类名称',
          key: 'cate',
          sortable: true,
          tooltip: true
        },
        {
          title: '品牌名称',
          key: 'brand',
          sortable: true,
          tooltip: true
        },
        {
          title: '供应商',
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
          title: '原价',
          key: 'origin_price',
          tooltip: true
        },
        {
          title: '操作',
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
                    // this.delUser(params.row.id)
                    // this.$Message.success(params.row.id)
                    this.$Message.success('success')
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
    changepage (index) {
      this.index = index
      this.shopList()
    },
    shopList () {
      this.$axios({
        method: 'POST',
        url: '/api/merchandise/commodity/getCommodity',
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
