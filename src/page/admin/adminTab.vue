<template>
  <div class="content-div">
    <header-tab/>
    <Row class="content">
      <Col span="6">
      <Menu accordion>
        <Submenu name="1">
          <template slot="title">
            {{$t('user.management')}}
          </template>
          <MenuItem name="pending-review" to="pendingReview">
          <Icon type="ios-add-circle" /> {{$t('admin.pending')}}
          </MenuItem>
          <MenuItem name="audited" to="audited">
          <Icon type="ios-archive-outline" /> {{$t('admin.audited')}}
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            {{$t('admin.account')}}
          </template>
          <MenuItem name="NewAccount" to="newAccount">
          <Icon type="ios-add-circle" /> {{$t('admin.add')}}
          </MenuItem>
          <MenuItem name="Account" to="account">
          <Icon type="ios-add-circle" /> {{$t('admin.existing')}}
          </MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col span="18">
      <router-view/>
      </Col>
    </Row>
    <!-- <footer-tab class="footer"/> -->
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
.content-div{
  position: relative;
  min-height: 100%;
}
.content {
  width: 1240px;
  margin: 20px auto;
}
.footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -130px;
}
</style>
