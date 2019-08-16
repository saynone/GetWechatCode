function isUsingWechat() {
    let r = navigator.userAgent
    let j = r.indexOf("MicroMessenger")
    if (j == -1) return false
    return true
  }
  
  function getWechatCode() {
      // 提取url中的code, 若没有则发请求
      let q = window.location.search
      if (q.indexOf('code=') == -1){
          requestForCode()
      } else {
          let vars = q.substring(1).split('&')
          for (let pair of vars){
              let i = pair.split('=')
              if (i[0]=='code') return i[1]
          }
      }
  }
  
  function requestForCode() {
      let baseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize'
      let appConfig = {
          appid: '',
          redirect_uri:'http://127.0.0.1:8000/',
          reponse_type :'code',
          scope:'snsapi_base',
      }
      let state = window.location.href
      appConfig.redirect_uri = appConfig.redirect_uri + '?redirect='+ state
      let target = encodeURIComponent(appConfig.redirect_uri)
      let finalUrl = `${baseUrl}?appid=${appConfig.appid}&redirect_uri=${target}&response_type=${appConfig.reponse_type}&scope=${appConfig.scope}&state=#wechat_redirect`
      window.location.replace(finalUrl)
  }
  
  export const wechatCodeMixin = {
    data(){
        return {
          wechatCode: '',
        }
    },
    beforeCreate() {
      if (isUsingWechat()) {
        this.wechatCode = getWechatCode()
      }
    //   console.log("wechatcode: ", this.wechatCode)
    },
  }
  