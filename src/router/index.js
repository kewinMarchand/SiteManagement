import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '../layouts/Login'
import SignUp from '../layouts/SignUp'
import Home from '../layouts/Home'
import AdminPanel from '../admin/AdminPanel'
import Profil from '../layouts/Profil'
import GitHub from '../layouts/GitHub'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/accueil',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/github',
      name: 'GitHub',
      component: GitHub,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// A chaque clic
router.beforeEach((to, from, next) => {
  // On récupère l'utilisateur courant dans firebase
  let currentUser = firebase.auth().currentUser
  // On vérifie si les routes demandent authentification
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('accueil')
  else next()
})

export default router
