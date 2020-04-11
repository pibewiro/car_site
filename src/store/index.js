import Vuex from 'vuex';
import Vue from 'vue';
import auth from './auth'
import user from './user'
import car from './car'

Vue.use(Vuex);

const modules = {
  auth,
  user,
  car
};

export default new Vuex.Store({
  modules
})