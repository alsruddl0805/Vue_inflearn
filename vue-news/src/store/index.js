import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex)

/*
1. API -> actions에 호출
2. actions -> mutations에 commit을 통해 state 값 세팅
3. state에 세팅 된 값 페이지에서 호출 가능
*/
export default new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions,
});