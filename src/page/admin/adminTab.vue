<template>
  <div>
    <header-tab/>
    <Row class="content">
      <Col span="6">
      <Menu accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" /> 商品管理
          </template>
          <MenuItem name="pending-review" to="pendingReview">
          <Icon type="ios-add-circle" /> 待审核商品
          </MenuItem>
          <MenuItem name="audited" to="audited">
          <Icon type="ios-archive-outline" /> 已审核商品
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-paper" /> 账户管理
          </template>
          <MenuItem name="NewAccount" to="newAccount">
          <Icon type="ios-add-circle" /> 新增账户
          </MenuItem>
          <MenuItem name="Account" to="account">
          <Icon type="ios-add-circle" /> 已有账户
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
export default {
  name: 'App',
  components: {
    HeaderTab,
    FooterTab
  }
}
</script>

<style scoped>
.content {
  width: 1240px;
  margin: 20px auto;
}
</style>
