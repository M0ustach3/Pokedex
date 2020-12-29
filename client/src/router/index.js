import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Items from "@/views/Items";
import Moves from "@/views/Moves";
import Pokemons from "@/views/Pokemons";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/items',
    name: 'Objets',
    component: Items
  },
  {
    path: '/moves',
    name: 'Capacités',
    component: Moves
  },
  {
    path: '/pokemons',
    name: 'Pokémons',
    component: Pokemons
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
