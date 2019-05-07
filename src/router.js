import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index.vue'
import city from '@/components/city/city'
import toData from '@/components/toData/toData'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index' ,name: 'index', component: index},
    { path: '/city', name: 'city', component: city },
    { path: '/toData', name: 'toData', component: toData },
    { path: '*', redirect: '/index'}
  ],
  mode: 'history'
})
