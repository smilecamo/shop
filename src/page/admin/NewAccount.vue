<template>
  <div>
    <span class="content-header">{{$t('admin.add')}}</span>
    <Divider dashed />
    <Form :label-width="80">
      <FormItem :label="$t('admin.name')">
        <Input v-model="name"
        :placeholder="$t('please.username')"
        clearable
        @on-blur='userName'
        />
      </FormItem>
      <FormItem :label="$t('admin.password')">
        <Input v-model="password" :placeholder="$t('please.password')" clearable/>
      </FormItem>
      <FormItem :label="$t('admin.role')">
          <Select v-model="Permission" :label="$t('please.choose')">
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
        url: `/merchandise/user/selUserName/${this.name}`
      })
        .then((res) => {
          if (res.data.data === true) {
            this.$Message.error(this.$t('err.username1'))
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
        this.$Message.error(this.$t('err.password'))
      } else {
        this.$axios({
          method: 'POST',
          url: '/merchandise/user/addUser',
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
