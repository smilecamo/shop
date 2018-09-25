<template>
  <div>
    <span class="content-header">修改账户</span>
    <Divider dashed />
    <Form :label-width="80">
      <FormItem label="用户名">
        <Input v-model="name"
        disabled
        placeholder="请输入用户名"
        clearable/>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="password" placeholder="请输入密码" clearable/>
      </FormItem>
        <FormItem label="权限">
          <Select v-model="role">
            <Option value="0">用户</Option>
            <Option value="1">管理员</Option>
          </Select>
        </FormItem>
      <FormItem>
        <Button
        type="primary"
        @click="modeifyAccount"
        >
        修改账户</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      id: '',
      password: '',
      role: '0'
    }
  },
  created () {
    let roles = this.$route.params.role
    let role = roles.toString()
    this.role = role
    this.name = this.$route.params.name
    this.id = this.$route.params.id
  },
  methods: {
    modeifyAccount () {
      let name = this.name
      let password = this.password
      if (name === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        console.log(this.role, this.password, this.id)
        // this.$router.push('Account')
        this.$axios({
          method: 'POST',
          url: '/api/merchandise/user/upUser',
          data: {
            'id': null,
            'userName': this.name,
            'userPwd': this.password,
            'role': this.role
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.data === null) {
              this.$Message.success('success')
              this.$router.push('Account')
            }
          })
          .catch((err) => {
            this.$Message.err(err)
          })
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
