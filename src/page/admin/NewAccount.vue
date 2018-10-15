<template>
  <div>
    <span class="content-header">{{$t('admin.add')}}</span>
    <Divider dashed />
    <Form :label-width="80">
      <FormItem :label="$t('admin.name')">
        <Input v-model="name"
        placeholder="请输入用户名"
        clearable
        @on-blur='userName'
        />
      </FormItem>
      <FormItem :label="$t('admin.password')">
        <Input v-model="password" placeholder="请输入密码" clearable/>
      </FormItem>
      <FormItem :label="$t('admin.role')">
          <Select v-model="Permission">
            <Option value="0">用户</Option>
            <Option value="1">管理员</Option>
          </Select>
      </FormItem>
      <FormItem>
        <Button
        v-show="show"
        type="primary"
        @click="newAccount"
        >{{$t('admin.add')}}</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      Permission: '0',
      show: false
    }
  },
  methods: {
    // 判断用户名是否存在
    userName () {
      this.$axios({
        method: 'GET',
        url: `http://47.100.31.2:8083/merchandise/user/selUserName/${this.name}`
      })
        .then((res) => {
          if (res.data.data === true) {
            this.$Message.error('用户名已存在,请核对后重新输入')
            this.show = false
          } else {
            this.show = true
          }
        })
    },
    newAccount () {
      let name = this.name
      let password = this.password
      if (name === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        this.$axios({
          method: 'POST',
          url: 'http://47.100.31.2:8083/merchandise/user/addUser',
          data: {
            'id': null,
            'userName': this.name,
            'userPwd': this.password,
            'role': this.Permission
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.data === null) {
              this.$Message.success('success')
            } else {
              this.$Message.success('err')
            }
          })
        this.$router.push('Account')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-header {
  font-size: 20px;
}
</style>
