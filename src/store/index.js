import Vuex from 'vuex';
import Vue from 'vue';
import auth from './auth'
import user from './user'
import car from './car';
import favorite from './favorite'

Vue.use(Vuex);

const modules = {
  auth,
  user,
  car,
  favorite
};

export default new Vuex.Store({
  modules
})