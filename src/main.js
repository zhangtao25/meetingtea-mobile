import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import vueg from 'vueg'
import 'vueg/css/transition-min.css'
Vue.use(vueg, router) //←注意这一句应该在router实例化之后

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
