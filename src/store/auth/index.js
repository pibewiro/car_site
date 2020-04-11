import axios from 'axios'

const state = {
  user: {},
}
const mutations = {
  USERAUTH: (state, payload) => {
    state.user = payload;
    state.logged = true;
    state.error = {};
  },
  ERROR: (state, payload) => (state.error = payload),
  LOGOUT: (state) => (state.user = {})
}
const getters = {}


const actions = {
  async login({
    commit
  }, obj) {
    const response = await axios.post(`${process.env.VUE_APP_API_ROOT}/auth`, obj)
    commit('USERAUTH', response.data)
  },

  async logout({
    commit
  }, obj) {
    await axios.get(`${process.env.VUE_APP_API_ROOT}/auth`, {
      headers: {
        'x-access-token': obj.token
      }
    })
    commit('LOGOUT')
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}