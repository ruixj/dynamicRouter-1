/**
 * Created by Thierry on 2017/5/16.
 */
import * as types from '../mutation-types'
import storage from '../../utils/storage'

// initial state
const state = {
   pagestate:{}
}

// getters
const getters = {
  currentPageState: state => state.pagestate,
  getObjByName:  (state) => (name) => {
     state.pagestate[name]
  }
  
}

// actions
const actions = {
 	updatePageState ({commit}, obj) {
	   commit(types.UPDATE_PAGESTATE, obj)
	} 
}

// mutations
const mutations = { 
  [types.UPDATE_PAGESTATE] (state,obj) {
    state.pagestate[obj.fieldname] = obj.fieldvalue
    storage.set(obj.fieldname, obj.fieldvalue)
  }, 
  [types.FETCH_PAGESTATE] (state,fieldname) {
    state.pagestate[fieldname] = storage.get(fieldname)
  },

  [types.DELETE_PAGESTATE] (state,fieldname) {
    storage.remove(fieldname)
    if (state.pagestate[fieldname] )
       delete state.pagestate[fieldname] 
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
