<template>
  <div>
    <header>
      <div class="connet">
        1000.la management
      <div class="Setting">
      <Form :label-width="80" width='320' inline>
      <FormItem label="language" style="margin-top: 14px">
        <Select v-model="language" style="width:100px" @on-change='changeLang'>
          <Option value="en-US">en-US</Option>
          <Option value="zh-CN">zh-CN</Option>
        </Select>
      </FormItem>
      <Button @click='quit'>
        <!-- {{$t('header.quit')}} -->
        <Icon type="md-power" size='20' color='red'/>
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
  height: 60px;
  text-align: center;
  line-height: 50px;
  font-size: 48px;
}
.connet{
  width 1240px
  margin 0 auto
}
.Setting{
  float right
}
</style>
