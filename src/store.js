import Vue from 'vue';
import Vuex from 'vuex';

import data from './data';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data
  }
});

export default store;
