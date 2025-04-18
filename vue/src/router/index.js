import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UslugaView from '../views/UslugaView.vue'
import RegisterView from '../views/RegisterView.vue'
import PrijavaView from '../views/PrijavaView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usluga',
    name: 'Usluga',
    component: UslugaView
  },
  {
    path: '/kategorija/:id',
    name: 'Kategorija',
    component: UslugaView
  },
  {
    path: '/prijavi-promenu',
    name: 'Prijava',
    component: PrijavaView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
