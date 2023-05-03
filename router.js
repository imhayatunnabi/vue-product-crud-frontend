

import ProductCreate from '@/components/product/ProductCreate.vue'
import ProductEdit from '@/components/product/ProductEdit.vue'
import ProductIndex from '@/components/product/ProductIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductIndex
  },
  {
    path: '/product/create',
    name: 'Create',
    component: ProductCreate
  }, {
    path: '/product/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router