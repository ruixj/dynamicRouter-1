/**
 * Created by xiongjian on 2017/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
 
import pageState from './modules/pagestate'
import headMenu from './modules/headmenu'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  namespaced: true,
  actions,
  state: {
    loading: true
  },

  modules: {
    pagestate,
    headmenu 
  },
  strict: debug
})
