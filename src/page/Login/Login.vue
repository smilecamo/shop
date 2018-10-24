<template>
  <div class="login">
    <div class="login-div">
      <Tabs value="login">
        <TabPane label="Login" name="login">
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
              <Button style="width: 100%" type="primary" @click="login">Login</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="Reset Password" name="reset">
          <Form class="content">
            <FormItem prop="user">
              <Input
              type="text"
              v-model="resetUser"
              placeholder="Username"
              clearable
              size="large"
              prefix="md-contact"
              @on-blur='userName'
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
              @on-blur='userPwd'
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
              @keyup.enter.native='resetPwd'
              />
            </FormItem>
            <FormItem>
              <Button
              v-show='shows'
              style="width: 100%"
              type="primary"
              @click="resetPwd">reset</Button>
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
      resetUser: '',
      OldPassword: '',
      NewPassword: '',
      shows: false
    }
  },
  // created () {
  //   let userEntity = JSON.parse(sessionStorage.getItem('user'))
  //   // console.log(userEntity)
  // },
  methods: {
    // 判断用户名是否存在
    userName () {
      this.$axios(
        {
          method: 'GET',
          url: `/merchandise/user/selUserName/${this.resetUser}`
        })
        .then((res) => {
          if (res.data.data === false) {
            this.$Message.error(this.$t('err.userName'))
            this.shows = false
          }
        })
    },
    // 判断用户名密码是否一致
    userPwd () {
      this.$axios({
        method: 'POST',
        url: '/merchandise/user/selUser',
        params: {
          name: this.resetUser,
          pwd: this.OldPassword
        }
      })
        .then((res) => {
          if (res.data.data === false) {
            this.shows = false
            this.$Message.error(this.$t('err.NoUserName'))
          } else if (res.data.data === true) {
            this.shows = true
          } else {
            this.$Message.error('err')
            this.shows = false
          }
        })
        .catch((err) => {
          console.log(err)
          this.$Message.error('err')
        })
    },
    // 修改密码
    resetPwd () {
      if (this.resetUser === '' || this.OldPassword === '' || this.NewPassword === '') {
        this.$Message.error(this.$t('err.password'))
      } else {
        this.$axios({
          method: 'POST',
          url: '/merchandise/user/upUser',
          data: {
            'id': null,
            'userName': this.resetUser,
            'userPwd': this.NewPassword,
            'role': null
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.data === null) {
              this.$Message.success('success')
            }
          })
      }
    },
    login () {
      let user = this.user
      let password = this.password
      if (user === '' || password === '') {
        this.$Message.error(this.$t('err.password'))
      } else {
        this.$axios({
          method: 'POST',
          url: `/merchandise/adminLogin`,
          params: {
            username: user,
            password: password
          }
        })
          .then((res) => {
            const role = res.data.data.role
            const userName = res.data.data.userName
            let users = {
              role: role,
              user: userName
            }
            if (role === 1) {
              sessionStorage.setItem('role', JSON.stringify(users))
              this.$router.push('AdminTab')
              this.$store.commit('show', true)
              console.log(role, userName)
            } else if (role === 0) {
              sessionStorage.setItem('role', JSON.stringify(users))
              this.$router.push('add')
            } else {
              this.$Message.error(this.$t('err.login'))
            }
          })
          .catch((err) => {
            console.log(err)
            this.$Message.error('err')
          })
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
  top: 300px;
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
