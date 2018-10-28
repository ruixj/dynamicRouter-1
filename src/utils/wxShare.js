import Vue from 'vue'
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)//使用微信插件

import NetWorking from './networking'

const wxShare = (obj,callback)=>{
	// console.log(obj,callback);
	function getUrl(){
		var url = window.location.href;
		var locationurl = url.split('#')[0];
		//console.log(locationurl);

		return locationurl;
	}
	if(obj){
		var title = obj.title==undefined||obj.title==null?'泉水系统':obj.title;
		var link = obj.link==undefined||obj.link==null?window.location.href:obj.link;
		var desc = obj.desc==undefined||obj.desc==null?'泉水系统':obj.desc;
		var imgUrl = obj.imgUrl==undefined||obj.imgUrl==null?'src/img/share.png':obj.imgUrl;
		var debug = obj.debug==true?true:false;
	}else{
		alert('请传分享参数');
	}
	//微信分享
	NetWorking.doGet(
		'utils/getWxToken',
		null,
		{
			params: {
				url: getUrl()
			}
		}
	).then(
		response => {
			let wxdata = response.data;
			wxdata.debug = debug;
			wxdata.jsApiList= [
				// 所有要调用的 API 都要加到这个列表中
				'onMenuShareTimeline',//分享到朋友圈
				'onMenuShareAppMessage',//分享给朋友
				'onMenuShareQQ',//分享到QQ
				'onMenuShareQZone',//分享到QQ空间
				'onMenuShareWeibo'//分享到腾讯微博
			];
			Vue.wechat.config(wxdata);

			Vue.wechat.ready(function () {
				//分享到朋友圈
				Vue.wechat.onMenuShareTimeline({
					title:title, // 分享标题
					link: link, // 分享链接
					desc: desc, // 分享描述
					imgUrl:imgUrl, // 分享图标
					success: function () {
						callback && callback();
						// 用户确认分享后执行的回调函数
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
				//分享到朋友
				Vue.wechat.onMenuShareAppMessage({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
						// 用户确认分享后执行的回调函数
						callback && callback();
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
				//分享到QQ
				Vue.wechat.onMenuShareQQ({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						callback && callback();
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});

				//分享到QQ空间
				Vue.wechat.onMenuShareQZone({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						callback && callback();
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});

				//分享到腾讯微博
				Vue.wechat.onMenuShareWeibo({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						callback && callback();
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
			})
		}
	)
}

export {wxShare}