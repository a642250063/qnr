import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //放数据
    msg: '',
    toData: '',
    city: '',
  },
  mutations:{
    //修改state属性
    msg (state,val) {
      state.msg=val
    },
    toData (state,val){
      state.toData=val
    },
    city (state,val) {
      state.city=val
    }
  },
  actions: {
    //放方法  请求数据   调用mutation方法
    getData(state) {
      //创建后请求数据
      axios.get('http://www.shouzi.ltd/quner/page.php')
      //请求index数据
        .then((msg) => {
          state.commit('msg', msg.data.data)
          console.log(state.state.msg)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('http://www.shouzi.ltd/quner/detail.php')
      //请求toData数据
        .then((res) => {
          state.commit('toData', res.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('http://www.shouzi.ltd/quner/city.php')
      //请求city数据
        .then((city) => {
          state.commit('city', city.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
