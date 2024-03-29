import Vue from 'vue'
import Vuex from 'vuex'
import newsStore from './module/news'
import askStore from './module/ask'
import {fetchList} from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        news: newsStore,
        ask: askStore,
    },
    state() {
        return {
            list: [],
        }
    },
    // 공통
    mutations: {
        SET_LIST(state, val) {
            state.list = val;
        },
    },
    actions: {
        // promise
        FETCH_LIST({ commit }, name) {
            return fetchList(name)
            .then((res) => {
                commit('SET_LIST', res.data)
                return res;
            })
            .catch()
        },

        // async & await
        async FETCH_LIST1({ commit }, name) {
            const response = await fetchList(name);
            commit('SET_LIST', response.data)
            return response;
        },

        // 추후 FETCH_LIST1.then().catch(); 등의 구문으로 활용 가능
    },
});