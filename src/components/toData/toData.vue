<template>
  <div class="detail">
    <div class="detail-ban">
      <img :src="detailData.bannerImg">
      <router-link to="/"><div class="btn-back"><span class="iconfont icon-left"></span></div></router-link>
      <div class="btn-gel">
        <span class="iconfont icon-image-fill"></span>2
      </div>
      <p>{{detailData.sightName}}</p>
    </div>
    <div>
      <div class="detail-fist" v-for="item in detailData.categoryList">
        <p><span class="iconfont icon-youhuijuan"></span>{{item.title}}</p>
        <div class="detail-sod" v-for="ison in item.children">
          <p><span class="iconfont icon-youhuijuan"></span>{{ison.title}}</p>
          <div class="detail-last" v-for="isonChid in ison.children">
            <p><span class="iconfont icon-youhuijuan"></span>{{isonChid.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "toData",
    // data() {
    //   return {
    //     detailData:""
    //   }
    // },
    computed: {
      detailData(){
        return this.$store.state.toData
      }
    },
    // created() {
    //   axios.get('http://www.shouzi.ltd/quner/detail.php')
    //     .then(res => {
    //         this.detailData = res.data.data
    //         console.log(this.detailData)
    //       }
    //     )
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //
    // }
  }
</script>

<style scoped lang="less">
  .detail {

    .detail-ban {
      position: relative;
      & > p {
        position: absolute;
        bottom: .3rem;
        color: #fff;
        font-size: .35rem;
      }

      img {
        width: 100%;
        display: block;
      }

      .btn-back {
        position: absolute;
        width: .82rem;
        height: .82rem;
        top: .2rem;
        left: .2rem;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, .4);

        span {
          position: absolute;
          left: 50%;
          top: 50%;
          font-size: .5rem;
          transform: translate(-50%, -50%);
        }
      }

      .btn-gel {
        padding: .05rem .5rem;
        position: absolute;
        right: 0;
        color: #fff;
        bottom: .2rem;
        font-size: .3rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .5);
      }
    }

    li {
      padding: .25rem 0;
      font-size: .3rem;
      border-bottom: 1px #ccc solid;
    }

    .detail-fist {
      font-size: .25rem;
      p {
        padding-left: .06rem;
        border-bottom: 1px #f2f2f2 solid;
        span{
          display: inline-block;
          background: #00bcd4;
          border-radius: 50%;
          padding: .05rem;
          color: #fff;
          font-size: .25rem;
          margin: .2rem;
          transform: rotate(30deg);
        }
      }
      .detail-sod {
        & > p {
          padding-left: .26rem;
        }
        .detail-last {
          & > p {
            padding-left: .46rem;
          }
        }
      }


    }
  }
</style>







<!--<template>-->
<!--  <div>-->
<!--    <div>-->
<!--      <router-link to="/index"><span class="iconfont back">&#xe7eb;</span></router-link>-->
<!--    </div>-->
<!--    <div>-->
<!--      <div class="data-img">-->
<!--        <img :src="res.bannerImg" alt="" >-->
<!--        <p>{{res.sightName}}</p>-->
<!--      </div>-->
<!--      <div>-->
<!--        文字-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import axios from 'axios'-->

<!--  export default {-->
<!--    name: 'toData',-->
<!--    data(){-->
<!--      return {-->
<!--        res: ''-->
<!--      }-->
<!--    },-->
<!--    created () {-->
<!--      axios.get('http://www.shouzi.ltd/quner/detail.php')-->
<!--        .then((res) => {-->
<!--          this.res = res.data.data-->
<!--          console.log(this.res)-->
<!--        })-->
<!--        .catch(function (error) {-->
<!--          console.log(error)-->
<!--        })-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--  .back {-->
<!--    position:absolute;-->
<!--    border: 1px solid transparent;-->
<!--    border-radius: 50%;-->
<!--    margin-top: 0.2rem;-->
<!--    margin-left: 0.2rem;-->
<!--    width: 0.5rem;-->
<!--    height: 0.5rem;-->
<!--    text-align: center;-->
<!--    line-height: 0.5rem;-->
<!--    background: rgba(0,0,0,0.6);-->
<!--  }-->
<!--  .back a {-->
<!--    color: white;-->
<!--    font-size: 1rem;-->
<!--  }-->
<!--  .data-img {-->
<!--    position: relative;-->
<!--  }-->
<!--  .data-img img{-->
<!--    width: 7.5rem;-->
<!--  }-->
<!--  .data-img p {-->
<!--    position: absolute;-->
<!--    bottom: 0.3rem;-->
<!--    left: 0.2rem;-->
<!--    color: white;-->
<!--    font-size: 0.28rem;-->
<!--  }-->
<!--</style>-->
