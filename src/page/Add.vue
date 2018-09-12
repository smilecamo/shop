<template>
  <div class="add-content">
    <span class="content-header">新增商品</span>
    <Divider dashed />
    <Edit></Edit>
  <router-view />
  </div>
</template>

<script>
import Edit from '../common/edit/edit'
export default {
  // 路由导航
  // 进入之前
  beforeRouteEnter (to, from, next) {
    // ...
    next(vm => {
      console.log(vm)
    })
  },
  // 更新的时候
  beforeUpdate (to, from, next) {
    // ...
    next()
  },
  // 离开
  beforeRouteLeave (to, from, next) {
    this.$Modal.confirm({
      title: '离开温馨提醒',
      content: '<p>你确定要离开当前页面</p>',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: () => {
        next()
      }
    }
    )
  },
  components: {
    Edit
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.add-content{
  margin-top: 20px;
}
.content-header{
  font-size: 20px;
}
</style>
