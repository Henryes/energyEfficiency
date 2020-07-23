import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: "/",
    component: () => import("@/views/index/Index.vue"),
    redirect: "/homepage",
    children: [
      {
        path: "homepage",
        component: () => import("@/views/homepage/Index.vue"),
        name: "homepage",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      },
      {
        path: "list",
        component: () => import("@/views/list/Index.vue")
      },
    ]
  },
  // 资讯管理
  {
    path: "/information",
    component: () => import("@/views/index/Index.vue"),
    children: [
      {
        path: "test",
        component: () => import("@/views/test/Index.vue")
      },
      {
        path: "article-column",
        component: () => import("@/views/articleColumn/Index.vue")
      },
      {
        path: "article-list",
        component: () => import("@/views/information/Index.vue")
      },
      {
        path: "finger",
        component: () => import("@/views/finger/Index.vue")
      },
      {
        path: 'detail',
        component: () => import('@/views/information/Detail.vue')
      }
    ]
  },

  // {
  //   path:'/electricity',
  //   component: () => import('@/index/electricity.vue'),
  //   rediren:'/electricity',
  //   children:[
  //     {
  //       path:'/user',
  //       component: () => import('@/user/Index.vue')
  //     },
  //   ]
  // }
]
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router