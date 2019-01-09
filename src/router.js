import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/home'
    },
    {
      path: '/main',
      component: () => import('./views/main.vue'),
      children:[
        {
          path: 'home',
          component: () => import('./views/main/home.vue'),
        },
        {
          path: 'classification',
          component: () => import('./views/main/classification.vue'),
        },
        {
          path: 'find',
          component: () => import('./views/main/find.vue'),
        },
        {
          path: 'bycar',
          component: () => import('./views/main/bycar.vue'),
        },
        {
          path: 'personal',
          component: () => import('./views/main/personal.vue'),
        },
      ],
    },
    {
      path: '/goods-list',
      component: () => import('./views/goods-list.vue'),
    },
    {
      path: '/goods-detail',
      component: () => import('./views/goods-detail.vue'),
    }
  ]
})
