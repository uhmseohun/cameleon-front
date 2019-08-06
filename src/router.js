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
import TagList from '@/views/Tag.vue'
import TagAdd from '@/views/AddTag.vue'

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
  if (localStorage.token) return next('/auth/login')
  next()
}

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        next('/subject')
      }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      beforeEnter: forbidAuth,
      meta: {
        title: '로그인'
      }
    },
    {
      path: '/auth/join',
      name: 'join',
      component: Join,
      beforeEnter: forbidAuth,
      meta: {
        title: '회원가입'
      }
    },
    {
      path: '/color',
      name: 'color',
      component: ColorList,
      beforeEnter: requireAuth,
      meta: {
        title: '색 온도 목록'
      }
    },
    {
      path: '/add/color',
      name: 'addcolor',
      component: ColorAdd,
      beforeEnter: requireAuth,
      meta: {
        title: '색 온도 추가'
      }
    },
    {
      path: '/class',
      name: 'class',
      component: ClassList,
      beforeEnter: requireAuth,
      meta: {
        title: '교실 목록'
      }
    },
    {
      path: '/add/class',
      name: 'addclass',
      component: ClassAdd,
      beforeEnter: requireAuth,
      meta: {
        title: '교실 추가'
      }
    },
    {
      path: '/subject',
      name: 'subject',
      component: SubjectList,
      beforeEnter: requireAuth,
      meta: {
        title: '과목 목록'
      }
    },
    {
      path: '/add/subject',
      name: 'addsubject',
      component: SubjectAdd,
      beforeEnter: requireAuth,
      meta: {
        title: '과목 추가'
      }
    },
    {
      path: '/tag',
      name: 'tag',
      component: TagList,
      beforeEnter: requireAuth,
      meta: {
        title: '태그 리스트'
      }
    },
    {
      path: '/add/tag',
      name: 'tagadd',
      component: TagAdd,
      beforeEnter: requireAuth,
      meta: {
        title: '태그 추가'
      }
    }
  ]
})
