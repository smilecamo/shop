<template>
  <div id="app">
    <header>toubu</header>
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
    <footer>weibu</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
header,footer{
  background: #ccc;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 64px;
}
.content{
  width: 1240px;
  margin: 20px auto;
}
</style>
