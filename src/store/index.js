import Vue from 'vue';
import Vuex from 'vuex';
import getPublicAPI from '@/services/getPublicAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isQuerying: false,
    apis: null,
  },
  getters: {
    apis: (state) => state.apis,
    isQuerying: (state) => state.isQuerying,
  },
  mutations: {
    loadApis(state, apis) {
      state.apis = apis;
    },
  },
  actions: {
    async fetchApi(context, { title, category }) {
      context.state.isQuerying = true;
      try {
        const data = await getPublicAPI(title, category);
        context.commit('loadApis', data.entries);
        console.log(data.entries);
      } catch (error) {
        console.log(error);
      }
      context.state.isQuerying = false;
    },
  },
  modules: {},
});
