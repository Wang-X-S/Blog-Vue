import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import store from '../store'

const router = new Router({
  routes: [
    {
    path:'/',
    name:'Index',
    component: ()=>import('@/pages/Index/template.vue')
    },
    {
      path:'/login',
      name:'Login',
      component: ()=>import('@/pages/Login/template.vue')
    },
    {
      path:'/register',
      name:'Register',
      component: ()=>import('@/pages/Register/template.vue')
    },
    {
      path:'/user/:blogId',
      name:'User',
      component: ()=>import('@/pages/User/template.vue')
    },
    {
      path:'/create',
      name:'Create',
      component: ()=>import('@/pages/Create/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/detail/:blogId',
      name:'Detail',
      component: ()=>import('@/pages/Detail/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/edit/:blogId',
      name:'Edit',
      component: ()=>import('@/pages/Edit/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/my',
      name:'My',
      component: ()=>import('@/pages/My/template.vue'),
      meta:{requiresAuth:true}
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('checkLogin').then(isLogin=>{
      if (!store.getters.isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})


export default router