# GetWechatCode
通过一个域名中转获取OAuth2.0网页授权code for Vue

## 使用方法
- 将wechatCodeMixin引入需要微信web授权的vue页面
- 根据自己的appid和回调uri配置其中的appconfig
- 将wechatcode_backend部署在回调uri的django项目中