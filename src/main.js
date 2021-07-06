import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store'
import feathersClient from './feathers-client.js'

Vue.config.productionTip = false
console.log(feathersClient.service('todo').find())

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
