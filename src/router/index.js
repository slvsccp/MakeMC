import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () =>
      import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/montarburger',
    name: 'MontarBurger',
    component: () =>
      import(/* webpackChunkName: "montarburger" */ '../views/MontarBurger.vue')
  },
  {
    path: '/trabalheconosco',
    name: 'trabalheConosco',
    component: () =>
      import(
        /* webpackChunkName: "trabalheconosco" */ '../views/trabalheConosco.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
