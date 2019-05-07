<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in num">
        <div v-for="items in item" class="imgDiv" @click="toData">
          <img  class="daohangImg" :src="items.imgUrl" alt="">
          <p class="imgP">{{items.desc}}</p>
        </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  import toData from './toData/toData'

  export default {
    name: 'daohang',
    props: ['msg'],
    data() {
      return {
        swiperOption: {
        }
      }
    },
    methods:{
      toData(){
        this.$router.push({
          name: 'toData',
        })
      }
    },
    computed: {
      num() {
        let ar =this.msg.iconList
        let arr=[]
        for (let i=0;i<ar.length;i += 8) {
          arr.push(ar.slice(i,i+8))
        }
        return arr
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>

<style scoped lang="less">
  .daohangUl {
    width: 7.5rem;
  }
  .daohangUl li{
    display: inline-block;
  }
  .swiper-slide {
    width: 0.8rem;
  }
  .daohangImg{
    width: 1.2rem;
    margin-left: 0.33rem;
    margin-right: 0.33rem;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .imgDiv {
    display: inline-block;
    position: relative;
    text-align: center;
  }
  .imgDiv img {
    display: inline;
  }
  .imgP {
    font-size: 0.2rem;
    width: 100%;
    margin-bottom: 0.2rem;
  }
</style>
