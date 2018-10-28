/**
 * Created by Thierry on 2017/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import currentUser from './modules/current-user'
import alert from './modules/alert'
import currentCustomer from './modules/current-customer'
import pageState from './modules/page-state'
import headMenu from './modules/headmenu'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  //modules: {
  //  currentUser,
  //  alert,
  //  currentProject,
  //  currentPlatform
  //},
  state: {
    loading: true
  },

  modules: {
    user:       currentUser,
    alert:      alert,
    customer:   currentCustomer,
    pagestate:  pageState,
    headmenu:   headMenu
  },
  strict: debug
})
