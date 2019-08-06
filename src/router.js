import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Join from '@/views/Join.vue'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (localStorage.token) {
    axios.defaults.headers.common.authorization =
      localStorage.token
    return next()
  }
  next('/auth/login')
}

function forbidAuth (to, from, next) {
  if (localStorage.token) return next('/')
  next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      beforeEnter: forbidAuth
    },
    {
      path: '/auth/join',
      name: 'join',
      component: Join,
      beforeEnter: forbidAuth
    }
  ]
})
