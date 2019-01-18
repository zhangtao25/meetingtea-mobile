import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/home/recommend'
    },
    {
      path: '/main/home',
      redirect: '/main/home/recommend'
    },
    {
      path: '/main',
      component: () => import('./views/main.vue'),
      children:[
        {
          path: 'home',
          component: () => import('./views/main/home.vue'),
          children: [
            {
              path: 'recommend',
              component: () => import('./views/main/home/recommend.vue'),
            },
            {
              path: 'lv1-category',
              component: () => import('./views/main/home/lv1-category.vue'),
              meta:{
                statusBarBgc:'red'
              },
            },
          ]
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
      path: '/lv2-cate-list',
      component: () => import('./components/lv2-cate-list.vue'),
    },
    {
      path: '/goods-detail',
      component: () => import('./views/goods-detail.vue'),
      meta:{
        statusBarBgc:'blue'
      },
    }
  ]
})
