import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import state from './state.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})

export default store
