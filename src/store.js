import Vue from 'vue';
import Vuex from 'vuex';

import data from './data';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data
  },
  getters: {
    output: state => {
      return state.data
        .reduce((acc, obj) => {
          const keys = ['Group Name', 'Meeting Rep Name', 'Meeting Rep Phone'];
          var concattedString = '';
          keys.forEach((key, index) => {
            index !== 2
              ? (concattedString = concattedString.concat(`${obj[key]} `))
              : (concattedString = concattedString.concat(obj[key]));
          });
          acc.push(concattedString);
          return acc;
        }, [])
        .join('\n');
    }
  }
});

export default store;
