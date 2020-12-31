import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const Items = () => import('@/views/Items')
const Moves = () => import('@/views/Moves')
const Pokemons = () => import('@/views/Pokemons')

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
