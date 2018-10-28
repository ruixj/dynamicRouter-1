/**
 * Created by Thierry on 2017/5/16.
 */
import * as types from '../mutation-types'
import storage from '../../utils/storage'

// initial state
const state = {
  user: {},
	userModel: {},
    token: '',
    openid:'',
	pendingActNum: '',
	urlParamsMap: {},
	lastLoginAs: ''
}

// getters
const getters = {
  currentUser: state => state.user,
	currentUserModel: state => state.userModel,
  currentToken: state => state.token,
	currentUrlParams: state => state.urlParamsMap,
	lastLoginAs: state => state.lastLoginAs
}

// actions
const actions = {
	createUser ({commit}, user) {
		commit(types.CREATE_USER, user)
	},

	fetchUser ({commit}) {
		commit(types.FETCH_USER)
	},

	deleteUser ({commit}) {
		commit(types.DELETE_USER)
	},

  createUserModel ({commit}, user) {
    commit(types.CREATE_USER_MODEL, user)
  },

  fetchUserModel({commit}) {
    commit(types.FETCH_USER_MODEL)
  },

  deleteUserModel ({commit}) {
    commit(types.DELETE_USER_MODEL)
  },
  createToken ({commit}, user) {
    commit(types.CREATE_TOKEN, user)
  },

  fetchToken ({commit}) {
    commit(types.FETCH_TOKEN)
  },

  deleteToken ({commit}) {
    commit(types.DELETE_TOKEN)
  },

	createPendingActNum ({commit}, pendingActNum) {
		commit(types.CREATE_PENDING_ACT_NUM, pendingActNum)
	},

	fetchPendingActNum ({commit}) {
		commit(types.FETCH_PENDING_ACT_NUM)
	},

	deletePendingActNum ({commit}) {
		commit(types.DELETE_PENDING_ACT_NUM)
	},

	createUrlParams ({commit}, urlParams) {
		commit(types.CREATE_URL_PARAMS, urlParams)
	},

	fetchUrlParams ({commit}) {
		commit(types.FETCH_URL_PARAMS)
	},

	deleteUrlParams ({commit}) {
		commit(types.DELETE_URL_PARAMS)
	},

	createlastLoginAs ({commit}, urlParams) {
		commit(types.CREATE_LAST_LOGIN_AS, urlParams)
	},

	fetchlastLoginAs ({commit}) {
		commit(types.FETCH_LAST_LOGIN_AS)
	},

	deletelastLoginAs ({commit}) {
		commit(types.DELETE_LAST_LOGIN_AS)
	},
	createopenid ({commit}, urlParams) {
		commit(types.SET_WXOPENID, urlParams)
	},

	fetchopenid ({commit}) {
		commit(types.FETCH_WXOPENID)
	},

	deleteopenid ({commit}) {
		commit(types.DELETE_WXOPENID)
	}
}

// mutations
const mutations = {
  [types.CREATE_USER] (state, user) {
    state.user = user
    storage.set('current_user', user)
  },

  [types.FETCH_USER] (state) {
    state.user = storage.get('current_user')
  },

  [types.DELETE_USER] (state) {
    storage.remove('current_user')
    state.user = {}
  },

	[types.CREATE_USER_MODEL] (state, userModel) {
		state.userModel = userModel
		storage.set('current_user_model', userModel)
	},

	[types.FETCH_USER_MODEL] (state) {
		state.userModel = storage.get('current_user_model')
	},

	[types.DELETE_USER_MODEL] (state) {
		storage.remove('current_user_model')
		state.userModel = {}
	},

  [types.CREATE_TOKEN] (state, token) {
    state.token = token
    storage.set('current_token', token)
  },

  [types.FETCH_TOKEN] (state) {
    state.token = storage.get('current_token')
  },

  [types.DELETE_TOKEN] (state) {
    storage.remove('current_token')
    state.token = ''
  },

	[types.CREATE_PENDING_ACT_NUM] (state, pendingActNum) {
		state.pendingActNum = pendingActNum
		storage.set('pending_act_num', pendingActNum)
	},

	[types.FETCH_PENDING_ACT_NUM] (state) {
		state.pendingActNum = storage.get('pending_act_num')
	},

	[types.DELETE_PENDING_ACT_NUM] (state) {
		storage.remove('pending_act_num')
		state.pendingActNum = ''
	},

	[types.CREATE_URL_PARAMS] (state, urlParams) {
		if(state.urlParamsMap == null){
			state.urlParamsMap = new Object()
		}

		state.urlParamsMap[urlParams.name] = urlParams
		storage.set("urlParamsMap", state.urlParamsMap)

	},

	[types.FETCH_URL_PARAMS] (state) {
		state.urlParamsMap = storage.get('urlParamsMap')
	},

	[types.DELETE_URL_PARAMS] (state) {
		storage.remove('urlParamsMap')
		state.urlParamsMap = ''
	},

	[types.CREATE_LAST_LOGIN_AS] (state, lastLoginAs) {
		state.lastLoginAs = lastLoginAs
		storage.set('lastLoginAs', lastLoginAs)
	},

	[types.FETCH_LAST_LOGIN_AS] (state) {
		state.lastLoginAs = storage.get('lastLoginAs')
	},

	[types.DELETE_LAST_LOGIN_AS] (state) {
		storage.remove('lastLoginAs')
		state.lastLoginAs = ''
	},
	
	[types.SET_WXOPENID] (state, openid) {
		state.openid = openid
		storage.set('openid', openid)
	},

	[types.FETCH_WXOPENID] (state) {
		state.openid = storage.get('openid')
	},

	[types.DELETE_WXOPENID] (state) {
		storage.remove('openid')
		state.openid = ''
	},	
}

export default {
  state,
  getters,
  actions,
  mutations
}
