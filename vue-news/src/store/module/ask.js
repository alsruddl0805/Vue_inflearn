import { fetchAskInfo, fetchAskList } from "@/api";

const state = {
  ask: [],
  askInfo: [],
};

const mutations = {
  SET_ASK(state, val) {
    state.ask = val;
  },
  SET_ASK_INFO(state, val) {
    state.askInfo = val;
  },
};

const actions = {
  FETCH_ASK({ commit }) {
    fetchAskList()
    .then(({ data }) => { commit('SET_ASK', data) })
    .catch()
  },
  FETCH_ASK_INFO({ commit }, askId) {
    fetchAskInfo(askId)
    .then(({ data }) => { commit('SET_ASK_INFO', data) })
    .catch()
  },
};

const getters = {
      fetchedAsk(state) {
          return state.ask;
      },
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