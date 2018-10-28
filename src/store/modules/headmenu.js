/**
 * Created by Thierry on 2017/5/16.
 */
import * as types from '../mutation-types'
import storage from '../../utils/storage'

// initial state
const state = {
   headmenu:{}
}

// getters
const getters = {
  currentHeadMenu: state => state.headmenu,
}

// actions
const actions = {
 
}

// mutations
const mutations = { 
  [types.SET_HEADMENU] (state,obj) {
    state.headmenu = obj
  } 
}

export default {
  state,
  getters,
  actions,
  mutations
}
