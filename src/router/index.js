import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/',redirect:'/home'},
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Axios.vue')
  },
     {
    path: '/js1',
    name: 'js1',
    component: () => import(/* webpackChunkName: "about" */ '../views/js1.vue')
  },
     {
    path: '/js2',
    name: 'js2',
    component: () => import(/* webpackChunkName: "about" */ '../views/js2.vue')
  },
       {
    path: '/js3',
    name: 'js3',
    component: () => import(/* webpackChunkName: "about" */ '../views/js3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
