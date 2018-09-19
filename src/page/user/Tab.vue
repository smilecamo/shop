<template>
  <div>
    <header-tab/>
    <Language />
    <Row class="content">
      <Col span="6">
      <Menu accordion active-name="add" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            {{$t('user.management')}}
          </template>
          <MenuItem name="add" to='/add'>
          <Icon type="ios-add-circle" /> {{$t('user.add')}}
          </MenuItem>
          <MenuItem name="have" to='/have'>
          <Icon type="ios-archive-outline" /> {{$t('user.Already')}}
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
  },
  created () {
    console.log(JSON.parse(window.localStorage.getItem('name')))
  }
}
</script>

<style scoped>
.content {
  width: 1240px;
  margin: 20px auto;
}
</style>
