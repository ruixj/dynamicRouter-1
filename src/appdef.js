import router from './router'
import store  from './store'
import { getAppDef } from '@/api/api'

import * as types from '@/store/mutation-types'
const _import = require('./router/_import_' + process.env.NODE_ENV)//获取组件的方法
import Layout from '@/views/layout' //Layout 是架构组件，不在后台返回，在文件里单独引入

var appRoutes //用来获取后台拿到的路由

router.beforeEach((to, from, next) => {
  if (!appRoutes) {//不加这个判断，路由会陷入死循环
    store.commit('pagestate/' + types.FETCH_PAGESTATE)
    appRoutes = store.getters['pagestate/getObjByName']("approutes")
    if (!appRoutes) {
        getAppDef('callcenter','enu').then(res => {
        appRoutes = res.data.application//后台拿到路由
        obj = {"approutes":appRoutes}
        store.dispatch("pagestate/updatePageState",obj)
        //saveObjArr('router', appRoutes) //存储路由到localStorage

        routerGo(to, next)//执行路由跳转方法
      })
    } else {//从localStorage拿到了路由
      //appRoutes = getObjArr('router')//拿到路由
      //appRoutes = store.getters['pagestate/getObjByName']("approutes")
      routerGo(to, next)
    }
  } else {
    next()
  }

})


function routerGo(to, next) {
  appRoutes = filterAsyncRouter(appRoutes) //过滤路由
  router.addRoutes(appRoutes) //动态添加路由
  //global.antRouter = appRoutes //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
}


function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {//Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}


function convertAppdef2Router(appDef){
   	
}

function processObjdef(objdef){
   routerobj = {}
   if(objdef.type == 'application'){
      routerobj.path      = objdef.path
      routerobj.component = _import(objdef.component)
      
      if(objdef.defaultscreen)
         routerobj.redirect = objdef.defaultscreen
         
      routerobj.children = objdef.children.filter(screenobjdef => {
         processObjdef(screenobjdef)
      }
      )
      return routerobj
   }
   else if(objdef.type = 'screen'){
	  routerobj.path      = objdef.path
      routerobj.component =  _import(objdef.component)
      
      if(objdef.defaultview)
         routerobj.redirect = objdef.defaultview
         
      routerobj.children = objdef.children.filter(viewobjdef => {
         processObjdef(viewobjdef)
      }
      )
      return routerobj
   } 
   else if(objdef.type='view'){
   	  routerobj.path      = objdef.path
      routerobj.component =  _import(objdef.component)
 
      routerobj.children = objdef.children.filter(viewobjdef => {
         processObjdef(viewobjdef)
      }
      )
      return routerobj
   }
   
   
}
