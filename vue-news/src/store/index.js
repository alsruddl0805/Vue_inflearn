import Vue from 'vue'
import Vuex from 'vuex'
import newsStore from './module/news'
import askStore from './module/ask'
import jobsStore from './module/jobs'
import {fetchList} from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        news: newsStore,
        ask: askStore,
        jobs: jobsStore,
    },
    state() {
        return {
            list: [],
        }
    },
    mutations: {
        SET_LIST(state, val) {
            state.list = val;
        },
    },
    actions: {
        FETCH_LIST({ commit }, name) {
            fetchList(name)
            .then(({ data }) => { commit('SET_LIST', data) })
            .catch()
        },
    },
});