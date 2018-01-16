import wepy from 'wepy'

/**
 * 模仿 axios api 规范
 * https://github.com/axios/axios
 */
export default class http {
  static async request (config) {
    wepy.showNavigationBarLoading()
    const myres = await wepy.httpRequest(config)
    wepy.hideNavigationBarLoading()
    if (this.isSuccess(myres)) {
      return myres.data.data
    } else {
      console.error(Object.assign(config, myres))
      throw this.requestException(myres)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess({ status, data }) {
    // 微信请求错误
    if (status !== 200) {
      return false
    }
    // 服务响应错误
    return !(data && parseInt(data.code) !== 0)
  }

  /**
   * 异常
   */
  static requestException({ status, data }) {
    const error = {}
    error.statusCode = status
    const serverData = data.data
    if (serverData) {
      error.serverCode = data.code
      error.message = data.message
      error.serverData = serverData
    }
    return error
  }

  static get (url, config) {
    config['url'] = url
    config['method'] = 'GET'

    return this.request(config)
  }

  static post (url, config) {
    config['url'] = url
    config['method'] = 'POST'

    return this.request(config)
  }

  static delete (url, config) {
    config['url'] = url
    config['method'] = 'DELETE'

    return this.request(config)
  }
}
