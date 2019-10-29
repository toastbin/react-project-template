import { Message } from 'antd'

export default interceptor => {
  interceptor.request.use(config => {
    // TODO 如果需要加 token 什么的 在这里处理
    return config
  }, (err) => {
    return Promise.reject(err)
  })

  interceptor.response.use(res => {
    
    return res
  }, err => {
    if(!err.response) {
      return Promise.reject(err)
    }
    switch(err.response && err.response.status) {
      case 403: return Message.error('无权限!');
      case 404: return Message.error('找不到文件!');
      case 500: return Message.error('服务器错误, 请稍后重试!');
      default: Message.error('网络错误, 请稍后重试!')
    }
    return Promise.reject(err)
  })
}