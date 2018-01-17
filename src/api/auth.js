import wepy from 'wepy'
import base from './base'
import event from '@/utils/event'

var _readyStatus = false

event.$on('ready', status => { _readyStatus = status })

export default class auth extends base {
  static async ready () {
    return _readyStatus ? Promise.resolve() : await this.login()
  }

  /**
   * 授权登录
   * 授权弹窗如果取消 PromiseStatus:pending
   */
  static async login () {
    const { authCode: code } = await wepy.getAuthCode({ scopes: 'auth_user' })
    const token = await this.post(`${this.baseUrl}/api/login`, { data: { code } })
    wepy.$instance.globalData.xToken = token
    event.$emit('ready', true)
    console.log(`code: ${code}\ntoken: ${token}`)
  }
}