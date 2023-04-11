import {fetchJobsList} from "@/api";

const state = {
  jobs: [],
};

const mutations = {
  SET_JOBS(state, val) {
    state.jobs = val;
  },
};

const actions = {
  FETCH_JOBS({ commit }) {
    fetchJobsList()
    .then(({ data }) => { commit('SET_JOBS', data) })
    .catch()
  },
};

const getters = {
  fetchedJobs(state) {
    return state.jobs;
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}