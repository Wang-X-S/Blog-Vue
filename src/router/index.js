import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import My from '@/pages/My/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
Vue.use(Router)
import store from '../store'

const router = new Router({
  routes: [
    {
    path:'/',
    name:'Index',
    component: Index
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
    {
      path:'/user:blogId',
      name:'User',
      component: User
    },
    {
      path:'/create',
      name:'Create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path:'/detail:blogId',
      name:'Detail',
      component: Detail,
      meta:{requiresAuth:true}
    },
    {
      path:'/edit:blogId',
      name:'Edit',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path:'/my',
      name:'My',
      component: My,
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