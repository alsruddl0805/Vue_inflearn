import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'
import ItemView from '@/views/ItemView'
import UserView from '@/views/UserView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        component: NewsView,
    },
    {
        path: '/ask',
        component: AskView,
    },
    {
        path: '/jobs',
        component: JobsView,
    },
    {
        path: '/item',
        component: ItemView,
    },
    {
        path: '/user/:id',
        component: UserView,
    },
    {
        path: '/item/:id',
        component: ItemView,
    },
]

export default new VueRouter({
    mode: 'history',
    routes,
})