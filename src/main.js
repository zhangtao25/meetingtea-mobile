import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import cateList from './assets/data/cateList'//引用文件
cateList.data.unshift({name:'推荐',id:0})
Vue.prototype.GLOBAL = {cateList:cateList.data}//挂载到Vue实例上面

router.beforeEach((to, from, next) => {
  let statusBarBgc = 'white'
  if (JSON.stringify(to.meta) != '{}'){
    statusBarBgc = to.meta.statusBarBgc
  }
  console.log(statusBarBgc)
  // window.postMessage('hi')
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
