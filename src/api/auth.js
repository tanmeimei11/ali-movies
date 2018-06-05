import wepy from 'wepy';
import base from './base';
import tips from '@/utils/tips';

export default class auth extends base {
  static _readyStatus = false

  /**
   * 授权登录准备
   * 授权弹窗如果取消 PromiseStatus:pending
   */
  static async ready () {
    return this._readyStatus ? Promise.resolve() : await this.login();
  }

  /**
   * 授权登录
   * 授权弹窗如果取消 PromiseStatus:pending
   */
  static async login () {
    tips.setLoading();
    const { authCode: code } = await wepy.getAuthCode( { scopes: 'auth_base' } );
    const { tg_auth: token, _aries } = await this.post( `${this.baseUrl}/api/login`, { data: { code, 'auth_base': 1 } } );
    wepy.$instance.globalData.xToken = token;
    wepy.$instance.globalData.xAries = _aries;
    this._readyStatus = true;
    console.log( `code: ${code}\ntoken: ${token}` );
  }
}
