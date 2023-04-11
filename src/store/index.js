import Vue from 'vue';
import Vuex from 'vuex';
import getPublicAPI from '@/services/getPublicAPI';

Vue.use(Vuex);

const PAGE_SIZE = 20;

export default new Vuex.Store({
  state: {
    isQuerying: false,
    pagesAvailable: 1,
    allPublicApis: null,
    selectedApis: null,
  },
  getters: {
    selectedApis: (state) => state.selectedApis,
    isQuerying: (state) => state.isQuerying,
    pagesAvailable: (state) => state.pagesAvailable,
    allPublicApis: (state) => state.allPublicApis,
  },
  mutations: {
    loadApis(state, apis) {
      state.allPublicApis = apis;
      state.selectedApis = apis.slice(0, PAGE_SIZE);
    },
    setPages(state, apis) {
      state.pagesAvailable = Math.ceil(apis / PAGE_SIZE);
    },
    clearState(state) {
      state.pagesAvailable = 1;
      state.allPublicApis = null;
      state.selectedApis = null;
    },
  },
  actions: {
    async fetchApi(context, { title, category }) {
      context.state.isQuerying = true;
      try {
        const data = await getPublicAPI(title, category);
        if (data.count !== 0) {
          context.commit('loadApis', data.entries);
          context.commit('setPages', data.entries.length);
        } else {
          context.commit('clearState');
        }
      } catch (error) {
        console.log(error);
      }
      context.state.isQuerying = false;
    },
    async getPaginatedResults(context, { currentPage }) {
      const start = currentPage === 1 ? 0 : (currentPage - 1) * 20;
      const end =
        currentPage === context.state.pagesAvailable
          ? context.state.allPublicApis.length
          : currentPage * 20;
      context.state.selectedApis = context.state.allPublicApis.slice(
        start,
        end
      );
    },
  },
  modules: {},
});
