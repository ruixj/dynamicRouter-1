/**
 * Created by Thierry on 2017/5/16.
 */
import * as types from '../mutation-types'
import storage from '../../utils/storage'

// initial state
const state = {
  customer: {}
}

// getters
const getters = {
  currentCustomer: state => state.customer,
}

// actions
const actions = {
    createCustomer ({commit}, user) {
        commit(types.CREATE_CUSTOMER, user)
    },

    fetchCustomer ({commit}) {
        commit(types.FETCH_CUSTOMER)
    },

    deleteCustomer ({commit}) {
        commit(types.DELETE_CUSTOMER)
    } 
}

// mutations
const mutations = {
  [types.CREATE_CUSTOMER] (state, customer) {
    state.customer = customer
    //storage.set('current_customer', customer)
  },

  [types.FETCH_CUSTOMER] (state) {
    state.customer = storage.get('current_customer')
  },
  
  [types.UPDATE_CUSTOMER] (state,obj) {
    state.customer[obj.fieldname] = obj.fieldvalue
  },
  [types.DELETE_CUSTOMER] (state) {
    //storage.remove('current_customer')
    state.customer = {}
  } 
 
}

export default {
  state,
  getters,
  actions,
  mutations
}
