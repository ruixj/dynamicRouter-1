import router from './router'
import store  from './store'
import { getAppDef } from '@/api/api'

import * as types from '@/store/mutation-types'
const _import = require('./async/_import_' + process.env.NODE_ENV)//获取组件的方法
//import Layout from '@/components/layout' //Layout 是架构组件，不在后台返回，在文件里单独引入

var appdefs //用来获取后台拿到的路由

router.beforeEach((to, from, next) => {
  if (!appdefs) {//不加这个判断，路由会陷入死循环
    store.commit('pagestate/' + types.FETCH_PAGESTATE,"approutes")
    appdefs = store.getters['pagestate/getObjByName']("approutes")
    
    if (!appdefs) {
      getAppDef('callcenter','enu').then(res => {
        appdefs = res.data.application//后台拿到路由
        
        var obj    = {"fieldname":"approutes",
                      "fieldvalue":appdefs
                      }
        store.dispatch("pagestate/updatePageState",obj)
         
        routerGo(to, next)//执行路由跳转方法
      })
    } else { 
      routerGo(to, next)
    }
  } else {
    console.log("to:" + to)
    console.log("from:" + from)
    next()
  }

})


function routerGo(to, next) {
   	var routers = []
   	var objmap  = {}
   	
    var appRouters =	processObjdef(appdefs,objmap,"")
    
  
    var obj    = {"fieldname":"objmap",
                  "fieldvalue":objmap
                  }
    store.dispatch("pagestate/updatePageState",obj)
 
         obj    = {"fieldname":"currentappscreens",
                  "fieldvalue":objmap["/"]
                  }    
    store.dispatch("pagestate/updatePageState",obj)
    
    routers.push(appRouters)
    router.addRoutes(routers) //动态添加路由
 
    next({ ...to, replace: true })
}
 

function processObjdef(objdef,objmap,parentpath){
   var routerobj = {}
   if(objdef.type == 'application'){
      routerobj.path      = objdef.path
      routerobj.component = _import(objdef.component)
      

      var appobj = {}
      appobj.name = objdef.name
      if(parentpath)
      {
        if(parentpath != "/")
           appobj.path = parentpath + "/" + objdef.path
        else
          appobj.path = parentpath   + objdef.path
      }
      else
        appobj.path = objdef.path
         
      if(objdef.defaultscreen){
        if( appobj.path != "/")
          routerobj.redirect = appobj.path + "/" + objdef.defaultscreen
        else
          routerobj.redirect = appobj.path + objdef.defaultscreen
      }
	  
      if(objmap[parentpath] ){
         objmap[parentpath].push(appobj)
      }
      else
      {
         objmap[parentpath] = []
         objmap[parentpath].push(appobj)
      }
       
      
      if (objdef.children && objdef.children.length) { 
       routerobj.children = []
        objdef.children.forEach(screenobjdef => {
          var child = processObjdef(screenobjdef,objmap,appobj.path)
          routerobj.children.push(child)
        }
        )
      }
      return routerobj
   }
   else if(objdef.type == 'screen'){
	  routerobj.path      = objdef.path
      routerobj.component =  _import(objdef.component)

      var screenobj = {}
      screenobj.name = objdef.name
      if(parentpath){
        if(parentpath != "/")
           screenobj.path = parentpath + "/" + objdef.path
        else
          screenobj.path = parentpath   + objdef.path
      }
      else
        screenobj.path = objdef.path
      
      if(objdef.defaultview){
        if(  screenobj.path != "/")
          routerobj.redirect = screenobj.path  + "/" + objdef.defaultview
        else
          routerobj.redirect = screenobj.path  + objdef.defaultview
      }   
	  
      if(objmap[parentpath] ){
         objmap[parentpath].push(screenobj)
      }
      else
      {
         objmap[parentpath] = []
         objmap[parentpath].push(screenobj)
      }
      
      if (objdef.children && objdef.children.length) { 
        routerobj.children = []        
        objdef.children.forEach(viewobjdef => {
          var child = processObjdef(viewobjdef,objmap,screenobj.path)
          routerobj.children.push(child)
        }
        )
      }
      
      return routerobj
   } 
   else if(objdef.type=='view'){
   	  routerobj.path      = objdef.path
      routerobj.component =  _import(objdef.component)
 
      var viewobj = {}
      viewobj.name = objdef.name
      if(parentpath){
        if(parentpath != "/")
           viewobj.path = parentpath + "/" + objdef.path
        else
          viewobj.path = parentpath   + objdef.path
      }
      else
        viewobj.path = objdef.path
      
      if(objmap[parentpath] ){
         objmap[parentpath].push(viewobj)
      }
      else
      {
         objmap[parentpath] = []
         objmap[parentpath].push(viewobj)
      }
      return routerobj
   }
   
   
}
