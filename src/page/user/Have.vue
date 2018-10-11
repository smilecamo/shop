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
          align: 'center'
        },
        {
          title: this.$t('shop.name'),
          key: 'name',
          tooltip: true
        },
        {
          title: this.$t('shop.sort'),
          key: 'age',
          tooltip: true
        },
        {
          title: this.$t('shop.brand'),
          key: 'address',
          tooltip: true
        },
        {
          title: this.$t('shop.supplier'),
          key: 'address',
          tooltip: true
        },
        {
          title: this.$t('shop.cost'),
          key: 'address',
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
                    let img = [
                      {
                        id: 1,
                        name: 'zzz',
                        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4056687946,2460418786&fm=27&gp=0.jpg'
                      }
                    ]
                    this.$store.commit('name', params.row.name)
                    this.$store.commit('imgList', img)
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
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  mounted () {
    this.$axios.get('/api/merchandise/brand/list')
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })
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
