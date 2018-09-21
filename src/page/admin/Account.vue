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
    >Delete</Button>
    </div>
    <Modal
        v-model="ModifyAccount"
        title="修改账户"
        @on-ok="ok"
        @on-cancel="cancel">
      <Form :label-width="80">
        <FormItem label="用户名">
          <Input v-model="name"
          placeholder="请输入用户名"
          @on-blur='userName'
          clearable/>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="password" placeholder="请输入密码" clearable/>
        </FormItem>
        <FormItem label="权限">
          <Select v-model="Permission">
            <Option value="0">用户</Option>
            <Option value="1">管理员</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
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
                    this.ModifyAccount = true
                    this.name = params.row.userName
                    let per = params.row.role
                    this.Permission = per.toString()
                    console.log(this.Permission)
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
          console.log(list)
          this.dataCount = list.totalCount
          this.pageSize = 20
          this.data1 = list.list
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 全选
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
    //     import qs from 'qs';
    // const data = { 'bar': 123 };
    // const options = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: qs.stringify(data),
    //   url,
    // };
    delUser (val) {
      this.$axios({
        method: 'POST',
        url: '/api/merchandise/user/delUser',
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        data: {
          'id': this.$qs.stringify(val)
        }
      })
        .then((res) => {
          console.log(res)
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
