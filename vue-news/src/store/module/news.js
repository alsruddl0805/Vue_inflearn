import { fetchNewsList, fetchUserInfo } from "@/api";

const state = {
  news: [],
  userInfo: [],
};

const mutations = {
  SET_NEWS(state, val) {
    state.news = val;
  },
  SET_USER_INFO(state, val) {
    state.userInfo = val;
  },
};

const actions = {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
    .then(({ data }) => { commit('SET_NEWS', data) })
    .catch()
  },
  FETCH_USER_INFO({ commit }, userId) {
    fetchUserInfo(userId)
    .then(({ data }) => { commit('SET_USER_INFO', data) })
    .catch()
  },
};

const getters = {
  fetchedNewsList(state) {
    return state.news;
  },
  fetchedUserInfo(state) {
    return state.userInfo;
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}