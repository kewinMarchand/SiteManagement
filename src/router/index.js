import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layouts/Home'
import AdminPanel from '@/admin/AdminPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel
    }
  ]
})
