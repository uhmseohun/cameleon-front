import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: Home,
      beforeEnter: forbidAuth
    }
  ]
})
