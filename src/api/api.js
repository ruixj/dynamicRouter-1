
import NetWorking from '@/utils/networking'
    
//获取验证码
const URL_GET_APPDEF = '/api/uidef/app/:name/:lang';
 
export function getAppDef(appname,applang){
   var pathparams = {
    "name":appname,
    "lang":applang
  }
  return NetWorking.doGet(URL_GET_APPDEF, 
                     pathparams, 
                     null 
                    )
 
}


//用户密码重置
const URL_RENEW_PWD = 'users/renewpwd';
 
export function renewpwd(mobilePhoneNum,newpassword,code,hashcode){
 
  return NetWorking.doPost(URL_RENEW_PWD, 
                     null, 
                     null,
                     {
                          params: {
                            username: mobilePhoneNum,
                            newpassword: newpassword,
                            code:code,
                            hashcode:hashcode
                          }
                     }
                    )
}

//获取销售人员的实际业绩
const URL_GET_MYSALES = ':id/sales';
 
export function getMySales(userId){
 
  pathparams = {
    id:userId
  }
  return NetWorking.doGet(URL_GET_MYSALES, 
                     pathparams, 
                     null 
                    )
}

