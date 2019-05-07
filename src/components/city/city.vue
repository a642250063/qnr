<template>
    <div class="city">
      <div class="cebian"> <!--     侧边栏字母       -->
          <ul>
            <li v-for="item,index in city.cities" :key="item.id" @click="toclick(index)">
              <p>{{index}}</p>
            </li>
          </ul>
      </div>
      <div class="city-footer wrapper" ref="wrapper">
        <div class="content" ref="content">
          <div class="bg">
            <div class="city-head">
              <router-link to="/index"><span class="iconfont back">&#xe7eb;</span></router-link>
              <p>城市选择</p>
              <input placeholder="输入城市名或拼音" type="text" ref="inp" v-model="input1">
            </div>
            <div class="city-section" v-show="!input1">
              <div class="ct1"><p>当前城市</p></div>
              <div class="ct"><span>{{nowcity}}</span></div>
              <div class="ct1"><p>热门城市</p></div>
              <!--          热门城市-->
              <div class="ctd"><span v-for="item in city.hotCities" @click="toRouter(item.name)">{{item.name}}</span>
              </div>
              <!--          所有城市-->
              <div class="ct1 " v-for="item,index in city.cities" >
                <p :ref="index"><!--          首字母-->
                  {{index}}
                </p>
                <!--     城市       -->
                <span class="city-p2"v-for="items in item" @click="toRouter(items.name)" >
                  {{items.name}}
                </span>
              </div>
            </div>
            <div v-show="input1">
              <div v-for="item in arr" class="show">
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'city',
    data () {
      return {
        clickcity: '',
        input1: '',
        arr: []
      }
    },
    computed: {
      city() {
        return this.$store.state.city
      },
      nowcity() {
        //页面加载判断缓存中有无当前城市的数据
        if (window.localStorage.city) {
          return window.localStorage.city
        } else {
          return  "常熟"
        }
      }
    },
    mounted() {
      //挂载后引用BScroll插件
      this.scroll= new BScroll(this.$refs.wrapper,{click:true})
    },
    methods :{
      toclick(x) {
        this.scroll.scrollToElement(this.$refs[x][0], 1000)
      },
      toRouter(x){
        this.clickcity=x
        this.$router.push({
          name: 'index',
          params :{
            toData:this.clickcity
          }
        })
      }
    },
    watch: {
      //监听input
      input1 () {
        const result = []
        for (let i in this.city.cities) {
          // console.log((this.cityData[i]));
          this.city.cities[i].forEach((value) => {   //匹配搜索的条件
            if (value.spell.indexOf(this.input1) > -1 || value.name.indexOf(this.input1) > -1) {
              result.push(value)
            }
          })
        }
        this.arr = result
        console.log(result)
      }
    }
  }
</script>

<style scoped>
  .city {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 10;
    font-size: 0.24rem;
  }
  .back {
    margin-left: 0.2rem;
    margin-top: 0.23rem;
    font-size: 0.42rem;
    color: white;
    position: absolute;
    left: 0rem;
    top: 0rem;
  }
  .city-head {
    background: #00bcd4;
    height: 1.5rem;
    text-align: center;
    font-size: 0.42rem;
    border: 1px solid transparent;
  }
  .city-head>p{
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .city-head>input{
    text-align: center;
    font-size: 0.36rem;
    width: 7.25rem;
    height: 0.62rem;
    border-radius: 5px;
  }
  .ct1 {
    height: 100%;
    font-size: 0.26rem;
    background: white;
    padding-bottom: 0.2rem;
  }
  .ct1 p {
    height: 0.56rem;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    color: #666666;
    background: #eeeeee;
  }
  .city-section span {
    display: inline-block;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    width: 2.1rem;
    height: 0.46rem;
    line-height: 0.46rem;
    text-align: center;
    border: 1px solid #cccccc;
    color: #333333;
    border-radius: 5px;
  }
  .ct {
    height: 0.9rem;
  }
  .ctd {
    height: 1.7rem;
  }
  .show {
    height: 0.52rem;
    line-height: 0.52rem;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }
  .show p{
    color: #666666;
    margin-left: 0.2rem;
  }
  .city-footer {
    height: 100vh;
    width: 100%;
  }
  .cebian {
    position: fixed;
    top: 2rem;
    right: 0;
    z-index: 16;
  }
  .cebian ul {
  }
  .cebian ul li{
    font-size: 0.3rem;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
  }
</style>
