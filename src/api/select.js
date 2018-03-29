import Pagebase from './page';
export default class Select extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getSeatInfo (data) {
    return await this.request( {
      url: '/h5/seat/list',
      data: data
    } );
  }
  /**
   *  获取卡信息的数据接口
   */
  static async submitSeat ( data ) {
    return await this.request( {
      url: '/h5/seat/ordercreate',
      method: 'POST',
      data: data
    } );
  }
}
