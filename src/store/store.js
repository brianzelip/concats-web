import Vue from 'vue';
import Vuex from 'vuex';

import data from './data.js';
import * as getters from './getters.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data
  },
  getters
});

export default store;
