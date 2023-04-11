import {fetchAskInfo} from '@/api';

const state = {
  askInfo: {},
};

const mutations = {
  SET_ASK_INFO(state, val) {
    state.askInfo = val;
  },
};

const actions = {
  FETCH_ASK_INFO({ commit }, askId) {
    fetchAskInfo(askId)
    .then(({ data }) => { commit('SET_ASK_INFO', data) })
    .catch()
  },
};

const getters = {
      fetchedAskInfo(state) {
          return state.askInfo;
      },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}