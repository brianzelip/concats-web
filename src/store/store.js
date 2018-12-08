import Vue from 'vue';
import Vuex from 'vuex';

import * as state from './state.js';
import * as getters from './getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters
});

export default store;
