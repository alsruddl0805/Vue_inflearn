import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api';

Vue.use(Vuex)

/*
1. API -> actions에 호출
2. actions -> mutations에 commit을 통해 state 값 세팅
3. state에 세팅 된 값 페이지에서 호출 가능
*/
export default new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: {
        SET_NEWS(state, val) {
            state.news = val;
        },
        SET_ASK(state, val) {
            state.ask = val;
        },
        SET_JOBS(state, val) {
            state.jobs = val;
        },
    },
    actions: {
        FETCH_NEWS({ commit }) {
            fetchNewsList()
                .then(({ data }) => { commit('SET_NEWS', data) })
                .catch()
        },
        FETCH_ASK({ commit }) {
             fetchAskList()
                .then(({ data }) => { commit('SET_ASK', data) })
                .catch()
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
                .then(({ data }) => { commit('SET_JOBS', data) })
                .catch()
        }
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
});