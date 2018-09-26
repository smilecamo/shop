<template>
  <div>
    <span class="content-header">已审核页面</span>
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
      name: '',
      password: '',
      Permission: '0',
      index: 1,
      ModifyAccount: false,
      // 设置初始化信息数
      dataCount: 100,
      // 每页显示的数量
      pageSize: 20,
      // 设置表格头部
      brandHeader: [
        {
          title: '商品名称',
          key: 'userName',
          sortable: true,
          tooltip: true
        },
        {
          title: '分类名称',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '品牌名称',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '供应商',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '原价',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '当前价',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '会员价',
          key: 'role',
          sortable: true,
          tooltip: true
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row.userName)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delUser(params.row.id)
                    console.log(params.row.id)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      data1: [
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        },
        {
          userName: 'name',
          role: 'qiii'
        }
      ]
    }
  },
  methods: {
    changepage (index) {
      this.index = index
      console.log(index)
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
