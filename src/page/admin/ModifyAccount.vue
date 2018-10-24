<template>
  <div>
    <span class="content-header">{{$t('admin.Modify')}}</span>
    <Divider dashed />
    <Form :label-width="80">
      <FormItem :label="$t('admin.name')">
        <Input v-model="name"
        disabled
        :placeholder="$t('please.username')"
        clearable/>
      </FormItem>
      <FormItem :label="$t('admin.password')">
        <Input v-model="password" :placeholder="$t('please.password')" clearable/>
      </FormItem>
        <FormItem :label="$t('admin.role')">
          <Select v-model="role" :label="$t('please.choose')">
            <Option value="0">用户</Option>
            <Option value="1">管理员</Option>
          </Select>
        </FormItem>
      <FormItem>
        <Button
        type="primary"
        @click="modeifyAccount"
        >
        {{$t('admin.Modify')}}</Button>
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
        this.$Message.error(this.$t('err.password'))
      } else {
        console.log(this.role, this.password, this.id)
        // this.$router.push('Account')
        this.$axios({
          method: 'POST',
          url: '/merchandise/user/upUser',
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
