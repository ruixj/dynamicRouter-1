const prefix = '__falcon__'

export default {
  /**
   * Get object from localStorage
   *
   * @param {string} key
   * @return {any}
   */
  get (key) {
    let ret = window.localStorage.getItem(prefix + key)
    if (ret) {
      return JSON.parse(ret)
    }
    return null
  },

  /**
   * Set object for localStorage
   *
   * @param {string} key
   * @param {any} value
   * @return {boolean}
   */
  set (key, value) {
    window.localStorage.setItem(prefix + key, JSON.stringify(value))
    return true
  },

  /**
   * Remove object from localStorage
   *
   * @param {string} key
   * @return {boolean}
   */
  remove (key) {
    window.localStorage.removeItem(prefix + key)
    return true
  },


  setCookie (c_name, value, expiredays) {
     var exdate = new Date();　　　　
     exdate.setDate(exdate.getDate() + expiredays);　　　　
     document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  },

  //获取cookie 
  getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
       return (arr[2]);
    else
      return null;
  },
 
  //删除cookie
  delCookie (name)  {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  },
  /**
   * Get object from sessionStorage
   *
   * @param {string} key
   * @return {any}
   */
  getSession (key) {
    let ret = window.sessionStorage.getItem(prefix + key)
    if (ret) {
      return JSON.parse(ret)
    }
    return null
  },

  /**
   * Set object for sessionStorage
   *
   * @param {string} key
   * @param {any} value
   * @return {boolean}
   */
  setSession (key, value) {
    window.sessionStorage.setItem(prefix + key, JSON.stringify(value))
    return true
  },

  /**
   * Remove object from sessionStorage
   *
   * @param {string} key
   * @return {boolean}
   */
  removeSession (key) {
    window.sessionStorage.removeItem(prefix + key)
    return true
  },
}
