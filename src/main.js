import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import VueRouter from '../node_modules/vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'

Vue.component('icon', Icon);

Vue.config.productionTip = false

Vue.use(BootstrapVue, VueRouter, router);

const route = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }]
})

new Vue({
  VueRouter,
  router,
  route,
  store,
  render: h => h(App)
}).$mount('#app')