<template>
  <div>
    <span class="content-header">{{$t('admin.add')}}</span>
    <Divider dashed />
    <Form :label-width="80">
      <FormItem :label="$t('admin.name')">
        <Input v-model="name"
        placeholder="请输入用户名"
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
      <FormItem>
        <Button
        type="primary"
        @click="newAccount"
        >新增账户</Button>
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
      Permission: '0'
    }
  },
  methods: {
    newAccount () {
      let name = this.name
      let password = this.password
      // let role = this.Permission
      if (name === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        // let PostUser = {

        // }
        this.$axios({
          method: 'POST',
          url: '/api/merchandise/user/addUser',
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
