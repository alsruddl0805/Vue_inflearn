import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'
import ItemView from '@/views/ItemView'
import UserView from '@/views/UserView'
// import createListView from '@/views/CreateListView';
import bus from '@/utils/bus';
import store from '@/store';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        meta: { isListRequired: true },
        component: NewsView,
        // component: createListView('NewsView')
    },
    {
        path: '/ask',
        meta: { isListRequired: true },
        component: AskView,
        // component: createListView('AskView')
    },
    {
        path: '/jobs',
        meta: { isListRequired: true },
        component: JobsView,
        // component: createListView('JobsView')
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

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.isListRequired) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.path)
        .then(() => {
            console.log('router navigation 호출', to.path)
            next();
        })
        .catch((err) => console.log(err));
    }
})

export default router;