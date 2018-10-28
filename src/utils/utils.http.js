/*import Vue from 'vue'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

export default {
  httpRequestPost (url, params, cb) {
  let dataStr = ''
  for (let key in params) {
    dataStr += key + '=' + params[key] + '&'
  }
  dataStr = dataStr.substr(0, dataStr.length - 1)

  AjaxPlugin.$http.post(url, dataStr)
    .then((response) => {
      if (cb) cb(response.data)
    })
  }

  /*
  getVerifyCode(phone) {
  var curCount = 120;
  var phoneNumber=phone;//手机号码
  if(phoneNumber != ""){

    //设置button效果，开始计时
    $("#button-code").attr("disabled", "true");
    $("#button-code").val("请在" + curCount + "秒内输入验证码");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //向后台发送处理数据
    $.ajax({
      type: "GET",
      dataType: "text", //数据格式:JSON
      url: '/api/auth/verifycode?phoneNumber='+phoneNumber, //目标地址
      error: function (XMLHttpRequest, textStatus, errorThrown) { },
      success: function (msg){
        var jsonObject= jQuery.parseJSON(msg);
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem("hashcode", jsonObject.hashcode);
        }
      }
    });
  }else{
    alert("手机号码不能为空！");
  }
}

  //timer处理函数
  function SetRemainTime() {
    if (curCount == 0) {
      window.clearInterval(InterValObj);//停止计时器
      $("#button-code").removeAttr("disabled");//启用按钮
      $("#button-code").val("重新发送验证码");
      code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
    }
    else {
      curCount--;
      $("#button-code").val("请在" + curCount + "秒内输入验证码");
    }
  }
}
*/
