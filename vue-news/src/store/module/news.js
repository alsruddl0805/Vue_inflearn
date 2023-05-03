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
  // promise
  FETCH_USER_INFO({ commit }, userId) {
    return fetchUserInfo(userId)
    .then(({ data }) => { commit('SET_USER_INFO', data) })
    .catch()
  },

  // async
  async FETCH_USER_INFO1({ commit }, userId) {
    const response = await fetchUserInfo(userId);
    commit('SET_USER_INFO', response.data);
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