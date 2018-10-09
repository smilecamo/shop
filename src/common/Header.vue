<template>
  <div>
    <header>
      <div class="connet">
        XX购物商场
      <div class="Setting">
      <Form :label-width="80" width='320' inline>
      <FormItem :label="$t('header.language')" style="margin-top: 14px">
        <Select v-model="language" style="width:100px" @on-change='changeLang'>
          <Option value="en-US">en-US</Option>
          <Option value="zh-CN">zh-CN</Option>
        </Select>
      </FormItem>
      <Button @click='quit'>
        <!-- {{$t('header.quit')}} -->
        <Icon type="md-power" size='20'/>
      </Button>
      </Form>
    </div>
    </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'en-US'
    }
  },
  created () {
    this.language = this.$Stores.get('language')
  },
  methods: {
    changeLang (value) {
      this.$Stores.set('language', value)
      this.$router.go()
    },
    quit () {
      sessionStorage.clear()
      this.$Message.success('quit')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
header{
  background: #ccc;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 64px;
}
.connet{
  width 1240px
  margin 0 auto
}
.Setting{
  float right
}
</style>
