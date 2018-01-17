import wepy from 'wepy'
import base from './base'
// import event from '@/utils/event'
// import tips from '@/utils/tips'

export default class auth extends base {
  /**
   * 授权登录
   * 授权弹窗如果取消 PromiseStatus:pending
   */
  static async login () {
    try {
      const { authCode: code } = await wepy.getAuthCode({ scopes: 'auth_user' })
      console.log(code)
      const token = await this.post(`${this.baseUrl}/api/login`, { data: { code } })
      console.log('2')
      wepy.$instance.globalData.xToken = token
      console.log(`code: ${code}\ntoken: ${token}`)
    } catch (e) {
      // tips.modal('连接超时')
    }

    /**
     * try
     *   hack 当用户第一次使用 wepy.authorize 的Promise status 为 0
     * catch
     *   授权用户获取头像、用户名失败，则后端启用默认值
     * finally
     *  Event 全局通知，用户注册准备完毕 或 登录授权完毕
     */
    // try {
    //   const rst = await this._authorize()
    //   if (!rst || (rst && rst.errMsg !== 'authorize:ok')) await auth.userSync()
    // } finally {
    //   event.$emit('ready')
    // }
  }

  /**
   * 同步用户数据
   */
  static async userSync () {
    const { encryptedData, iv } = await wepy.getUserInfo()
    await this.post(`${this.baseUrl}/api/wxapp/sync-user`, { data: { encryptedData, iv } })
    console.log(`encryptedData: ${encryptedData}\niv: ${iv}`)
  }

  /**
   * 私有方法
   */
  static _authorize () {
    return Promise.race([
      wepy.authorize({ scope: 'scope.userInfo' }),
      new Promise(resolve => setTimeout(resolve, 200))
    ])
  }
}
