import {fetchUserInfo} from '@/api';

const state = {
  userInfo: {},
};

const mutations = {
  SET_USER_INFO(state, val) {
    state.userInfo = val;
  },
};

const actions = {
  FETCH_USER_INFO({ commit }, userId) {
    return fetchUserInfo(userId)
    .then(({ data }) => { commit('SET_USER_INFO', data) })
    .catch()
  },
};

const getters = {
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