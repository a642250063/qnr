import Vue from 'vue'
import App from './app.vue'
import router from './router'
import areset from './css/reset.css'
import tu from './tu/iconfont.css'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  tu,
  axios,
  store,
  areset,
  router,
  render: h => h(App)
}).$mount('#app')

refresh()
window.onresize = function () {
  setTimeout(function () {
    refresh()
  }, 10)
}
function refresh() {
  let deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 1200) {
    document.documentElement.style.fontSize = 1200 / 12 + "px"
  } else {
    document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
  }
}
