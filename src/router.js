import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '@/views/Login.vue'
import Join from '@/views/Join.vue'
import ColorList from '@/views/Color.vue'
import ColorAdd from '@/views/AddColor.vue'
import ClassList from '@/views/Class.vue'
import ClassAdd from '@/views/AddClass.vue'
import SubjectList from '@/views/Subject.vue'
import SubjectAdd from '@/views/AddSubject.vue'
import Setting from '@/views/Setting.vue'

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
    },
    {
      path: '/color',
      name: 'color',
      component: ColorList,
      beforeEnter: requireAuth
    },
    {
      path: '/add/color',
      name: 'addcolor',
      component: ColorAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/class',
      name: 'class',
      component: ClassList,
      beforeEnter: requireAuth
    },
    {
      path: '/add/class',
      name: 'addclass',
      component: ClassAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/subject',
      name: 'subject',
      component: SubjectList,
      beforeEnter: requireAuth
    },
    {
      path: '/add/subject',
      name: 'addsubject',
      component: SubjectAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      beforeEnter: requireAuth
    }
  ]
})
