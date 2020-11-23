import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
 
// name is optional LODASH
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
//        console.log(this.lodash.random(20))
//       console.log(this._.random(20))
//       console.log(this.custom.random(20))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
