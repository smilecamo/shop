<template>
  <div>
    <span class="content-header">{{$t('admin.existing')}}</span>
    <Divider dashed />
    <Table
      border
      ref="selection"
      :loading="loading"
      :columns="brandHeader"
      :data="data1"
      :formatter='role'
      @on-selection-change="selection"
    ></Table>
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
    @click='delUsers'
    >Delete</Button>
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
      dataCount: 100,
      // 每页显示的数量
      pageSize: 20,
      // 设置表格头部
      brandHeader: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '账户名',
          key: 'userName',
          sortable: true,
          tooltip: true
        },
        {
          title: '权限',
          key: 'role',
          sortable: true,
          tooltip: true,
          render: (h, params) => {
            let texts = ''
            if (params.row.role === 0) {
              texts = '用户'
            } else if (params.row.role === 1) {
              texts = '管理员'
            }
            return h('div', {
            }, texts)
          }
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
                    console.log(params.row.userName)
                    this.$router.push({name: 'ModifyAccount', params: { name: params.row.userName, role: params.row.role, id: params.row.id }})
                    // this.ModifyAccount = true
                    // this.name = params.row.userName
                    // let per = params.row.role
                    // this.Permission = per.toString()
                    // console.log(this.Permission)
                  }
                }
              }, 'View'),
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
  methods: {
    // 改变页码获取当前页码
    changepage (index) {
      this.index = index
      this.roleList()
    },
    // 弹出框确认按钮
    ok () {
      if (this.name === '' || this.password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        this.$axios({
          method: 'POST',
          url: '/api/merchandise/user/upUser',
          data: {
            'id': null,
            'userName': this.name,
            'userPwd': this.password,
            'role': null
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.data === null) {
              this.$Message.success('success')
            } else {
              this.$Message.error('err')
            }
          })
      }
    },
    // 弹出框取消按钮
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    // 修改用户密码
    userName () {
      this.$axios({
        method: 'GET',
        url: `/api/merchandise/user/selUserName/${this.name}`
      })
        .then((res) => {
          if (res.data.data === false) {
            this.$Message.error('用户名不存在,请核对后重新输入')
          }
        })
    },
    // 加载数据表格
    roleList () {
      this.$axios({
        method: 'POST',
        url: '/api/merchandise/user/selUserList',
        params: {
          currentPage: this.index,
          pageSize: 20
        }
      })
        .then((res) => {
          this.loading = false
          let list = res.data.data
          this.dataCount = list.totalCount
          this.pageSize = 20
          this.data1 = list.list
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 转换数据
    role (val) {
      console.log(val, 45)
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
    // 删除单个用户
    delUser (val) {
      this.$axios({
        method: 'POST',
        url: '/api/merchandise/user/delUser',
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        params: {
          id: val
        }
      })
        .then((res) => {
          if (res.data.data === null) {
            this.$Message.success('success')
            this.roleList()
          } else {
            this.$Message.error('error')
          }
        })
    },
    // 删除多个用户
    delUsers (val) {
      this.$axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        // responseType: 'json',
        url: '/api/merchandise/user/delUsers',
        params: {
          'id': this.arr
        }
      })
        .then((res) => {
          if (res.data.data === null) {
            this.$Message.success('success')
            this.roleList()
          } else {
            this.$Message.error('error')
          }
        })
    }
  },
  created () {
    this.roleList()
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
