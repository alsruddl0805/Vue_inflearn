import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo} from '@/api';

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
    },
    FETCH_USER_INFO({ commit }, userId) {
      fetchUserInfo(userId)
      .then(({ data }) => { commit('SET_USER_INFO', data) })
      .catch()
    },
}