<template>
  <div>
    <header-tab/>
    <Language />
    <Row class="content">
      <Col span="6">
      <Menu accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" /> 商品管理
          </template>
          <MenuItem name="add" to='/add'>
          <Icon type="ios-add-circle" /> 新增商品
          </MenuItem>
          <MenuItem name="have" to='/have'>
          <Icon type="ios-archive-outline" /> 已有商品
          </MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col span="18">
      <router-view/>
      </Col>
    </Row>
    <footer-tab/>
  </div>
</template>

<script>
import HeaderTab from '@/common/Header'
import FooterTab from '@/common/Footer'
import Language from '@/common/Language'
export default {
  name: 'App',
  components: {
    HeaderTab,
    FooterTab,
    Language
  }
}
</script>

<style scoped>
.content {
  width: 1240px;
  margin: 20px auto;
}
</style>
