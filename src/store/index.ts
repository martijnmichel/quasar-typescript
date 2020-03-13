import Vue from 'vue';
import Vuex from 'vuex';

import wm from './wm';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // general state
    wm
  },
  mutations: {},
  actions: {}
});
export default store;
