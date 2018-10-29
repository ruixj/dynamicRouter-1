/**
 * Created by Thierry on 2017/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
 
import pageState from './modules/page-state'
import headMenu from './modules/headmenu'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  state: {
    loading: true
  },

  modules: {
    pagestate:  pageState,
    headmenu:   headMenu
  },
  strict: debug
})
