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
  // promise
  FETCH_ASK_INFO({ commit }, askId) {
    return fetchAskInfo(askId)
    .then(({ data }) => { commit('SET_ASK_INFO', data) })
    .catch()
  },

  // async
  async FETCH_ASK_INFO1({ commit }, askId) {
    const response = await fetchAskInfo(askId);
    commit('SET_ASK_INFO', response.data);
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