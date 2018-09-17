<template>
  <div>
    <header-tab/>
    <Row class="content">
      <Col span="6">
        <Menu accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
                商品管理
              </template>
                <MenuItem name="add" to='/add'>
                <Icon type="ios-add-circle" />
                新增商品
                </MenuItem>
                <MenuItem name="have" to='/have'>
                <Icon type="ios-archive-outline"/>
                已有商品
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
.content{
  width: 1240px;
  margin: 20px auto;
}
</style>
