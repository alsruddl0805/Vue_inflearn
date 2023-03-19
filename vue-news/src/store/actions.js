import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api';

export default {
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
}