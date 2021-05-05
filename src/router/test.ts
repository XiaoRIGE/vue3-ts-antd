import { RouteRecordRaw } from 'vue-router'

/** 测试页面的路由配置 */
const TestRouter: RouteRecordRaw = {
  // [
  //     path: '/testHome',
  //     name: 'testHome',
  //     component: () => import(/* webpackChunkName: "about" */ '@/views/test/List/index.vue'),
  // ]
  path: '/testHome',
  name: 'testHome',
  component: () => import(/* webpackChunkName: "about" */ '@/views/test/List/index.vue'),
  children: [
    {
      path: 'testDetail',
      name: 'testDetail',
      component: () => import(/* webpackChunkName: "about-me" */ '@/views/test/List/detail.vue')
    }
  ]
}

export default TestRouter
