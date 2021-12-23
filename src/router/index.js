import Vue from 'vue'
import VueRouter from 'vue-router'
import ListarUsuario from '../views/ListarUsuario.vue'
import CadastrarUsuario from '../views/CadastrarUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CadastrarUsuario',
    component: CadastrarUsuario
  },
  {
    path: '/listarUsuarios',
    name: 'ListarUsuario',
    component: ListarUsuario
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
