/**
 * Created by xiongjian on 2017/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
 
import pagestate from './modules/pagestate'
import headmenu  from './modules/headmenu'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
 
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
