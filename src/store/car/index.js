import axios from 'axios';
const state = {
  cars: null,
  total: null,
};
const mutations = {
  GET_CAR(state, payload) {
    state.cars = payload.data;
    state.total = payload.total;
  }
};
const getters = {};

const actions = {
  async getCars({
    commit
  }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/car`, {

      params: {
        page: obj.page === null ? null : obj.page,
        limit: obj.limit
      }
    })
    commit('GET_CAR', response.data)
  },

  async addCar({
    commit
  }, obj) {
    const fd = new FormData();
    fd.set('make', obj.make)
    fd.set('model', obj.model)
    fd.set('color', obj.make)
    fd.set('price', obj.price)
    fd.set('mileage', obj.mileage)
    fd.set('vin', obj.vin)
    fd.set('active', true)
    fd.set('user', obj.user)
    fd.set('year', obj.year)

    for (let i = 0; i < obj.images.length; i++) {
      fd.append('imageUrl', obj.images[i])
    }

    await axios.post(`${process.env.VUE_APP_API_ROOT}/car`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': obj.token
      }
    })

    commit('')
  },

  async getUserCars({
    commit
  }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/car/user/${obj.id}`, {

      headers: {
        'x-access-token': obj.token
      },
    })
    commit('GET_CAR', response.data)
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}