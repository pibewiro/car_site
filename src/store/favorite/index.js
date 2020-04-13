import axios from 'axios';

const state = {
  favorites: {},
  favIds: []
};
const mutations = {
  GET_FAVORITES: (state, payload) => {
    state.favorites = payload.data;
    state.favIds = payload.favoriteIds;
  },

  ADD_FAVORITES: (state, payload) => {
    state.favIds = payload.data;
  }
};

const getters = {};

const actions = {
  async addFavorites({
    commit
  }, obj) {
    const response = await axios.post(`${process.env.VUE_APP_API_ROOT}/favorite`, {
      ...obj.data
    });

    commit('ADD_FAVORITES', response.data)
  },

  async getFavorites({
    commit
  }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/favorite/${obj.userId}`);
    commit('GET_FAVORITES', response.data);
  },

  async deleteFavorites({
    commit
  }, obj) {
    console.log(obj)
    const response = await axios.delete(`${process.env.VUE_APP_API_ROOT}/favorite/${obj.data.userId}/${obj.data.favId}`);
    commit('ADD_FAVORITES', response.data)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}