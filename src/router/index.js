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

export default new Router({
  routes: [
    {
    path:'/',
    name:'Index',
    component: Index
    },
    {
      path:'/create',
      name:'Create',
      component: Create
    },
    {
      path:'/detail',
      name:'Detail',
      component: Detail
    },
    {
      path:'/edit',
      name:'Edit',
      component: Edit
    },

    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/my',
      name:'My',
      component: My
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
    {
      path:'/user',
      name:'User',
      component: User
    },
  ]
})
