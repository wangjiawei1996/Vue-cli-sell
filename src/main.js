// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

var routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

var router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
