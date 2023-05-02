

import ProductCreate from '@/components/product/ProductCreate.vue'
import ProductIndex from '@/components/product/ProductIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: ProductIndex
  },
  {
    path: '/create',
    name: 'Create',
    component: ProductCreate
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router