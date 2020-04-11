import axios from 'axios';
const state = {
  user: null,
};
const mutations = {
  GETUSER(state, payload) {
    state.user = payload
  }
};
const getters = {};
const actions = {
  async registerUser({
    commit
  }, obj) {
    const fd = new FormData()
    fd.set('firstname', obj.data.firstname)
    fd.set('lastname', obj.data.lastname)
    fd.set('username', obj.data.username)
    fd.set('password', obj.data.password)
    fd.set('email', obj.data.email)
    fd.set('address.city', obj.data.address.city)
    fd.set('address.state', obj.data.address.state)
    fd.set('phone', obj.data.phone)
    fd.set('active', obj.data.active)
    fd.set('imageUrl', null);
    fd.append('images', obj.formData)
    await axios.post(`${process.env.VUE_APP_API_ROOT}/user`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    commit('')
  },

  async getUser({
    commit
  }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/user/${obj.id}`, {
      headers: {
        'x-access-token': obj.token
      }
    })
    commit('GETUSER', response.data)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}