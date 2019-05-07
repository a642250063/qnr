<template>
  <div class="head">
    <div>
      <span class="iconfont">&#xe7eb;</span>
      <input placeholder="O 输入城市/景点/游玩主题" type="text">
      <router-link to="/city">{{rouData}}</router-link>
      <span class="iconfont xia">&#xe8ec;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heada',
  data() {
    return {
      heada: '',
      rouData: ''
    }
  },
  props:[],
  mounted () {
    this.$route.params.toData?this.rouData=this.$route.params.toData:window.localStorage.city?this.rouData= window.localStorage.city:this.rouData= '常熟';
    window.localStorage.setItem('city',this.rouData)
  }
}

</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .head {
    color: white;
    background: #00bcd4;
    height: 0.86rem;
    width: 7.5rem;
    font-size: 0.2rem;
    border: 0.01rem solid transparent;
  }
  .head>div {
    margin-top: 0.13rem;
    margin-left: 0.16rem;
  }
  .head>div>*{
    display: inline-block;
    margin: 0;
    padding: 0;
    border: 0.01rem solid transparent;
    }
  .head p{
    font-size: 0.23rem;
  }
  .head input {
    height: 0.64rem;
    width: 5rem;
    font-size: 0.3rem;
    padding-left: 0.18rem;
    margin-left: 0.1rem;
    margin-right: 0.21rem;
    border-radius: 10px;
    outline:none;
  }
  .xia {
    position: relative;
    top: 0.03rem;
    height: 0.18rem;
  }
a {
    font-size: 0.28rem;
    color: white;
  }
</style>
