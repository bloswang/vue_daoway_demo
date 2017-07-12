/**
 * Created by Administrator on 2017/7/11 0011.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "../components/home.vue"
import seller from '../components/seller.vue'
import downloadApp from "../components/downloadApp.vue"
import server_join from "../components/server_join.vue"
import seller_list from "../components/seller_list.vue"
import server_comments from "../components/server_comments.vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path : '/',
      component : home
    },
    {
      path : '/seller',
      component: seller
    },
    {
      path : '/downloadApp',
      component: downloadApp
    },
    {
      path : '/server_join',
      component: server_join
    },
    {
      path : '/seller_list',
      component: seller_list
    },
    {
      path : '/server_comments',
      component: server_comments
    },
  ]
})
