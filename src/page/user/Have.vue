<template>
  <div class="add-content">
    <span class="content-header">{{$t('user.Already')}}</span>
    <Divider dashed />
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
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
          tooltip: true
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
                    this.$router.push({path: `/edit`})
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
                    console.log(params.row.name)
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
        url: '/api/merchandise/commodity/getCommodity',
        data: {
          'id': null,
          'name': null,
          'cateName': null,
          'brandName': null,
          'startDate': null,
          'endDate': null,
          'currentPage': 1,
          'pageSize': 20
        }
      })
        .then((res) => {
          console.log(res.data)
          this.data1 = res.data.data.list
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
