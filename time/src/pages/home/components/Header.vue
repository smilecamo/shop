<template>
  <div class="header">
    <div class='headee-left'>
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class='header-center'>
      <span class="iconfont search-icon">&#xe632;</span>
      输入美食/城市/KTV
    </div>
    <div class='header-right'>
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  @import '~styles/variblse.scss';
  .header{
    display: flex;
    line-height: .86rem;
    color: '#ccc';
    background: $bgcolor;
    .header-left{
    width: .64rem;
    float: left;
    .back-icon{
      font-size: .4rem;
      text-align: center;
    }
    }
    .header-center{
      flex: 1;
      height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background: #fff;
      color: #ccc;
      border-radius: .1rem;
      line-height: .64rem;
    }
    .header-right{
      float: right;
      width: 1.24rem;
      text-align: center;
      .arrow-icon{
        font-size: .24rem;
      }
    }
  }
</style>
