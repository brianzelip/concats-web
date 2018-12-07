import Vue from 'vue';
import Vuex from 'vuex';

import store from './store';
import App from './components/App.vue';

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
