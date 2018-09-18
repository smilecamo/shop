<template>
  <div class="Setting">
    <Form :label-width="80" width='320' inline>
    <FormItem label="Language" >
      <Select v-model="language" style="width:100px">
        <Option value="US">US</Option>
        <Option value="EN">EN</Option>
      </Select>
    </FormItem>
    <Button>退出</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: ''
    }
  },
  created () {
    this.language = this.$store.state.language
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
