import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter)
Vue.config.productionTip = false

const vueRouter = new VueRouter({
  mode: 'history',
  routes
})

library.add(faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router: vueRouter,
  render: h => h(App),
}).$mount('#app')
