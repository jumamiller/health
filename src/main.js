import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import routes from './routes/routes'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
