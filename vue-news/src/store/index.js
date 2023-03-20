import Vue from 'vue'
import Vuex from 'vuex'
import newsStore from './module/news'
import askStore from './module/ask'
import jobsStore from './module/jobs'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        news: newsStore,
        ask: askStore,
        jobs: jobsStore,
    },
});