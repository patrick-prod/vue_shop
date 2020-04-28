import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import User from '../components/user/users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // console.log(to)
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // console.log(tokenStr)
  if (!tokenStr) return next('/login')
  return next()
})

export default router
