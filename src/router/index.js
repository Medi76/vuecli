import { createRouter, createWebHistory } from 'vue-router'
import EmployeView from '../views/EmployeView.vue'


const routes = [
 {
  Path:'/',
  component:EmployeView
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
