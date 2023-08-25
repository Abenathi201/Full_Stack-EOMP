import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContatcView.vue')
  },
  {
    path: '/singleProd/:prodID',
    name: 'singleProd',
    component: () => import('../components/SingleProductComp.vue')
  },
  {
    path: '/updateProd/:id',
    name: 'updateProd',
    component: () => import('../components/UpdateProduct.vue')
  },
  {
    path: '/updateUser/:id',
    name: 'updateUser',
    component: () => import('../components/UpdateUser.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/addThisProduct',
    name: 'addThisProduct',
    component: () => import('../components/AddProduct.vue')
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: () => import('../components/AddUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
