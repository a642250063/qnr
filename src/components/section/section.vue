<template>
    <div>
      <div class="s-head">
        <p>热销推荐</p>
      </div>
      <div class="s-section" v-for="item in msg.recommendList">
        <img :src="item.imgUrl" alt="">
        <div>
          <p class="p1">{{item.title}}</p>
          <p class="p2">{{item.desc}}</p>
          <button class="bt"> 查看详情 </button>
        </div>
      </div>
      <div class="week">
        <p>周末去哪儿</p>
      </div>
      <div class="weekend" v-for="item in msg.weekendList">
        <img :src="item.imgUrl" alt="">
        <p class="wkp1">{{item.title}}</p>
        <p class="wkp2">{{item.desc}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'sect',
    props:['msg']//recommendList
  }
</script>

<style scoped lang="less">
  .s-head {
    background: #eeeeee;
    width: 100%;
    height: 0.8rem;
    border: 0.01rem solid transparent;
  }
  .s-head p{
    margin: 0.27rem 0 0 0.3rem;
    font-size: 0.3rem;
  }
  .s-section {
    height: 1.9rem;
    border: 1px solid transparent;
    border-bottom: 1px solid #eeeeee;
  }
  .s-section>img {
    margin: 0.1rem 0.2rem 0.1rem 0.1rem;
    height: 1.69rem;
  }
  .p1 {
    font-size: 0.36rem;
    border: 1px solid transparent;
    margin-top: 0.2rem;
  }
  .p2 {
    font-size: 0.24rem;
    border: 1px solid transparent;
    position: relative;
    top: 0.1rem;
  }
  .s-section>div {
    display: inline-block;
    border: 1px solid transparent;
    vertical-align: top;
    height: 1.9rem;
  }
  .s-section>div>button {
    background: #ff9300;
    border: 1px solid transparent;
    position: relative;
    top: -0.2rem;
    width: 1.6rem ;
    border-radius: 10px;
    height: 0.5rem;
  }
  .week {
    font-size: 0.36rem;
    height: 0.8rem;
  }
  .week>p{
    margin-top: 0.27rem;
    margin-left: 0.2rem;
  }
  .weekend {
    font-size: 0.36rem;
  }
  .weekend>img {
    width: 100%;
  }
  .wkp1 {
    margin-left: 0.1rem;
    margin-top: 0.2rem;
    height: 0.57rem;
  }
  .wkp2 {
    color: #666666;
    margin-top: 0.22rem;
    margin-left: 0.1rem;
    height: 0.57rem;
  }
</style>
