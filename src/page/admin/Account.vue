<template>
  <div>
    <span class="content-header">{{$t('admin.existing')}}</span>
    <Divider dashed />
    <Divider dashed />
    <Table border ref="selection" :columns="brandHeader" :data="data1"></Table>
    <Page
    :total="dataCount"
    :page-size="pageSize"
    @on-change="changepage"
    ></Page>
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
      name: '',
      password: '',
      Permission: '',
      ModifyAccount: false,
      // 设置初始化信息数
      dataCount: 100,
      // 每页显示的数量
      pageSize: 20,
      // 设置表格头部
      brandHeader: [
        {
          title: '账户名',
          key: 'userName',
          sortable: true,
          tooltip: true
        },
        {
          title: '权限',
          key: 'Permission',
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
                    this.Permission = params.row.Permission
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
                    console.log(params.row.userName)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      data1: [
        {
          userName: 'John Brown',
          userPassword: 18,
          Permission: '0'
        },
        {
          userName: 'Jim Green',
          userPassword: 24,
          Permission: '0'
        },
        {
          userName: 'Joe Black',
          userPassword: 30,
          Permission: '1'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          Permission: '1'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          userName: 'Jon Snow',
          userPassword: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    changepage (index) {
      console.log(index)
    },
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
    cancel () {
      this.$Message.info('Clicked cancel')
    },
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
</style>
