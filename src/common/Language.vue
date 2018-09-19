<template>
  <div class="Setting">
    <Form :label-width="80" width='320' inline>
    <FormItem :label="$t('header.language')">
      <Select v-model="language" style="width:100px" @on-change='changeLang'>
        <Option value="en-US">en-US</Option>
        <Option value="zh-CN">zh-CN</Option>
      </Select>
    </FormItem>
    <Button @click='quit'>{{$t('header.quit')}}</Button>
    </Form>
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
.Setting{
  width 400px
  height 60px
  position absolute
  right 30px
  top 20px
}
</style>
