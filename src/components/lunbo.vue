<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide v-for="item in msg.swiperList"><img :src="item.imgUrl" alt=""></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'lunb',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        delay: 300,
        loopAdditionalSlides: 4,
        loopedSlides: 4,
        loopFillGroupWithBlank: true,
      }
    }
  },
  props: ['msg'],
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false)
  },
}
</script>

<style scoped lang="less">
.swiper-slide {
  font-size: 10px;
  height: 100px;
}
img{
  width: 100%;
  height: 100%;
}
.swiper-container-free-mode  .swiper-wrapper {
  -webkit-transition-timing-function: linear;    /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}
</style>
