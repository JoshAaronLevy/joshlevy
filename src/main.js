import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faLink
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import Icon from 'vue-awesome/components/Icon'
import store from './store'

library.add(faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('icon', Icon);

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')