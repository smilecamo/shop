<template>
  <div class="login">
    <div class="login-div">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form class="content" ref="formInline">
            <FormItem prop="user">
              <Input
              type="text"
              v-model="user"
              placeholder="Username"
              clearable
              size="large"
              prefix="md-contact"
              />
            </FormItem>
            <FormItem prop="password">
              <Input
              type="password"
              v-model="password"
              placeholder="Password"
              clearable
              size="large"
              prefix="md-lock"
              @keyup.enter.native='login'
              />
            </FormItem>
            <FormItem>
              <Button style="width: 100%" type="primary" @click="login">Signin</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="重置密码" name="reset">
          <Form class="content">
            <FormItem prop="user">
              <Input
              type="text"
              v-model="resetUser"
              placeholder="Username"
              clearable
              size="large"
              prefix="md-contact"
              />
            </FormItem>
            <FormItem prop="password">
              <Input
              type="password"
              v-model="OldPassword"
              placeholder="Old Password"
              clearable
              size="large"
              prefix="md-lock"
              />
            </FormItem>
            <FormItem prop="password">
              <Input
              type="password"
              v-model="NewPassword"
              placeholder="New Password"
              clearable
              size="large"
              prefix="md-lock"
              />
            </FormItem>
            <FormItem>
              <Button style="width: 100%" type="primary" @click="reset">reset</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      password: '',
      role: '',
      resetUser: '',
      OldPassword: '',
      NewPassword: ''
    }
  },
  created () {
    let userEntity = JSON.parse(sessionStorage.getItem('user'))
    console.log(userEntity)
  },
  methods: {
    login () {
      let user = this.user
      let password = this.password
      let role = 'user'
      if (user === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        const userEntity = {
          name: user,
          age: password,
          role: role
        }
        sessionStorage.setItem('user', JSON.stringify(userEntity))
        // this.$Stores.set('user', { name: user })
        // console.log(this.$Stores.get('user').name)
        if (this.role === 'admin') {
          this.$router.push('AdminTab')
        } else {
          this.$router.push('add')
          // this.$Message.error('sh')
        }
        // this.role === 'admin' ? this.$router.push('AdminTab') : this.$router.push('userTab')
        // this.$router.push('AdminTab')
      }
    },
    reset () {
      let user = this.resetUser
      let password = this.OldPassword
      if (user === '' || password === '') {
        this.$Message.error('请输入用户名或密码')
      } else {
        console.log(user, password)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login {
  background-image: url('../../assets/bg.jpg');
  background-size: 100%;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
}

.login-div {
  position: absolute;
  right: 300px;
  bottom: 400px;
  width: 350px;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
}

.content {
  margin: 20px;
  width: 300px;
  height: 250px;
}
</style>
