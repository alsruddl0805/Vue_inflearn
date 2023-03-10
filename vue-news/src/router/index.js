import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'

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
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})