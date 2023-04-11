import Vue from 'vue';
import Vuex from 'vuex';
import getPublicAPI from '@/services/getPublicAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isQuerying: false,
    apis: ['Dev'],
  },
  getters: {
    apis: (state) => state.apis,
  },
  mutations: {
    loadApis(state, apis) {
      state.apis = apis;
    },
  },
  actions: {
    async fetchApi(context, { title }) {
      console.log('Run fetching');
      context.state.isQuerying = true;
      try {
        const data = await getPublicAPI(title);
        console.log(data);
        //   context.commit('loadApis', {
        //     apis: data.entries,
        //   });
      } catch (error) {
        console.log(error);
      }
      context.state.isQuerying = false;
    },
  },
  modules: {},
});
