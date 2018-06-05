import Pagebase from './page';
export default class Index extends Pagebase {
  /**
   * 获取我的信息接口
   */
  // static async getIndexInfo () {
  //   return await this.request( {
  //     url: '/index/info'
  //   } );
  // }
  /**
   *  获取弹窗数据接口
   */
  static async getResearchInfo () {
    return await this.request( {
      url: '/info/research'
    } );
  }
  /**
   *  获取页面数据接口
   */
  static async getIndexInfo ( data ) {
    return await this.request( {
      url: '/info/alipay/frontpage',
      data: data
    } );
  }
  /**
   *  获取花呗弹窗数据接口
   */
  static async getHuaBeiInfo ( data ) {
    return await this.request( {
      url: '/mnp/alipay/checkhuabei',
      data: data
    } );
  }
  /**
   *  获取弹窗数据接口
   */
  static async submitHuabeiCardInfo ( data ) {
    return await this.request( {
      url: '/mnp/alipay/fetchHuabeiProfit',
      method: 'POST',
      data: data
    } );
  }

  /**
   * @static 获得卡的信息
   * @param {any} code
   * @memberof Detail
   */
  static async getCardInfo ( code ) {
    return await this.request( {
      url: '/mnp/card/reward_info',
      data: {
        reward_code: code
      }
    } );
  }

  /**
   * 领取别人赠送的卡
   * @param {*} code
   * @param {*} phone
   */
  static async receiveCard ( code, phone ) {
    return await this.request( {
      url: '/mnp/card/fetch',
      method: 'POST',
      data: {
        reward_code: code,
        phone: phone
      }
    } );
  }
}
