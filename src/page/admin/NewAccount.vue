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
            <Option value="用户">用户</Option>
            <Option value="管理员">管理员</Option>
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
      Permission: '用户'
    }
  },
  methods: {
    newAccount () {
      let name = this.name
      let password = this.password
      if (name === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        console.log(name)
        console.log(password)
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
