import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Log from '../views/Log.vue'
import Products from '../views/Products.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Log',
    component: Log
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/menu/:id',
    name: 'Menu',
    component: Menu
  }
]

const router = new VueRouter({
  
  base: process.env.BASE_URL,
  routes
})

/* mode: 'history', */

export default router
