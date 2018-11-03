/**
 * Created by Thierry on 2017/4/14.
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cmnutils from './cmnutils'

Vue.use(VueAxios, axios)

export default {

  httpMethod: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
    ALL: 'all'
  },

  path: 'http://localhost:8080/api/',
  
  registerRequestInterceptor(configcallback, errorcallback)
  {
      Vue.axios.interceptors.request.use(configcallback(config), errorcallback(error))
  },
  registerResponseInterceptor(responsecallback, errorcallback)
  {
      Vue.axios.interceptors.response.use(responsecallback(response),errorcallback(error))
  },
  /**
   *
   * @param url
   * @param pathParams
   * @param options
   * @returns {*|Promise}
   */
  doGet (url, pathParams = null, options = null) {
		return this.doRequest(url, this.httpMethod.GET, pathParams, null, options)
	},

  /**
   * Http Post
   * @param url
   * @param pathParams
   * @param body
   * @param options
   * @returns {*|Promise}
   */
  doPost (url, pathParams = null, body = null, options = null) {
    return this.doRequest(url, this.httpMethod.POST, pathParams, body, options)
  },

	/**
	 * Http Post
	 * @param url
	 * @param pathParams
	 * @param body
	 * @param options
	 * @returns {*|Promise}
	 */
	doPatch (url, pathParams = null, body = null, options = null) {
		return this.doRequest(url, this.httpMethod.PATCH, pathParams, body, options)
	},

  /**
   * Http Put
   * @param url
   * @param pathParams
   * @param body
   * @param options
   * @returns {*|Promise}
   */
  doPut (url, pathParams = null, body = null, options = null) {
    return this.doRequest(url, this.httpMethod.PUT, pathParams, body, options)
  },

  /**
   * Http Delete
   * @param url
   * @param pathParams
   * @param options
   * @returns {*|Promise}
   */
  doDelete (url, pathParams = null, options = null) {
    return this.doRequest(url, this.httpMethod.DELETE, pathParams, null, options)
  },
 
  doAll2 (urls, pathParams = null, options = null ) {
  	  return this.doRequest(urls, this.httpMethod.ALL, pathParams, null, options)
  },
   
  doAll (urls,callback, pathParams = null, options = null ) {
  	  return this.doRequest(urls, this.httpMethod.ALL, pathParams, null, options).then(Vue.axios.spread(callback))
  },

  /**
   * Download File
   * @param url
   * @param pathParams
   */
  doDownload (url, pathParams = null) {
    window.location.href = process.env.JAGUAR_HOST + this._wrapUrl(url, pathParams)
  },

  /**
   * Http Request
   * @param url
   * @param method
   * @param pathParams
   * @param body
   * @param options
   * @returns {Promise}
   */
  doRequest (url, method, pathParams, body, options) {
    let wrapURL = this._wrapUrl(url, pathParams)
    let request = null
    switch (method) {
      case this.httpMethod.GET: {
        request = Vue.axios.get(wrapURL, options)
        break
      }
      case this.httpMethod.POST: {
        request = Vue.axios.post(wrapURL, body, options)
        break
      }
      case this.httpMethod.PUT: {
        request = Vue.axios.put(wrapURL, body, options)
        break
      }
	    case this.httpMethod.PATCH: {
		    request = Vue.axios.patch(wrapURL, body, options)
		    break
	    }
      case this.httpMethod.DELETE: {
        request = Vue.axios.delete(wrapURL, options)
        break
      }
     case this.httpMethod.ALL: {
        
        //let arr = new Array()
        //for(var i=0; i<wrapURL.length; i++){
	    //    arr.push(Vue.axios.get(arr[i]))
        //}
        request = Vue.axios.all(url)
        break
      }
    }
    return request;
//    return this._requestPromise(request)
  },

  /**
   * Request Promise
   * @param request {Promise} Vue Http Promise
   * @returns {Promise}
   * @private
   */
  _requestPromise (request) {
    return new Promise(function (resolve, reject) {
      request.then(response => {
        if (response.body.status === 0) {
          resolve(response.body)
        } else {
          reject(response.body.message)
        }
      }, error => {
        reject(error.statusText)
      })
    })
  },

  /**
   * 从URL匹配出参数pathParams
   * @param {string} url
   * @param {object} params
   * @returns {string}
   * @private
   */
  _wrapUrl (url, params) {
  	  if(cmnutils.isArray(url)){
  	  //  for(var i=0; i<url.length; i++){
  	  //	url[i] = 'api/' + url[i]
	  //  }
	     return url
	  }else{
		  if (params !== null) {
			  let matches = this._getMatches(url)
			  for (let match of matches) {
				  let value = params[match.replace(':', '')]
				  if (value !== null) {
					  url = url.replace(match, value)
				  }
			  }
		  }
		  return this.path + url
	  }
  },

  /**
   * 正则Group匹配
   * @param {string} string
   * @returns {Array}
   * @private
   */
  _getMatches (string) {
    let matches = []
    let regex = /(:[a-z_]+)/
    let match = regex.exec(string)
    while (match !== null) {
      matches.push(match[1])
      string = string.replace(match[1], '')
      match = regex.exec(string)
    }
    return matches
  }

}
