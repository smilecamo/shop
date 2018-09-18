<template>
  <div>
    <span class="content-header">已有账户</span>
    <Divider dashed />
    <Input
    search
    enter-button
    placeholder="search name"
    style="width: auto"
    @on-search="searchName"
    />
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
          clearable/>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="password" placeholder="请输入密码" clearable/>
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
          title: '密码',
          key: 'userPassword',
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
                    this.password = params.row.userPassword
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
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          userName: 'Jim Green',
          userPassword: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          userName: 'Joe Black',
          userPassword: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
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
      this.$Message.info(`${this.name}--${this.password}`)
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    searchName (value) {
      if (value === '') {
        this.$Message.error('不能为空')
      } else {
        console.log(value)
      }
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
