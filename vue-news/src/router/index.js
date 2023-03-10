import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'

const routes = [
    {
        // path : url
        // component: url 주소로 이동했을 때 표시될 컴포넌트 
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