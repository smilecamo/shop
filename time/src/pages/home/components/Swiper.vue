<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-img" src="https://img1.qunarzz.com/travel/poi/1806/f9/cfca7afe4866cc37.jpg_r_640x290x70_0c9a459f.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://img1.qunarzz.com/travel/poi/1806/f0/e4f27a9b68566e37.jpg_r_640x290x70_fa5edc7d.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 45.33%;
  background: #eee;
  .swiper-img{
  width: 100%;
  }
}

</style>
