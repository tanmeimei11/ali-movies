import Pagebase from './page';
export default class ticketDetail extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getNewTicketDetail (data) {
    return await this.request( {
      url: '/h5/user/ticket/newdetail',
      data: data
    } );
  }
  /**
   *  取消电影票
   */
  static async cancelTicket ( data ) {
    return await this.request( {
      url: '/h5/user/ticket/cancel',
      method: 'POST',
      data: data
    } );
  }
  /**
   * 获取二维码
   */
  static async getQRcode (data) {
    return await this.request( {
      url: '/h5/user/ticket/qr_code',
      data: data
    } );
  }

}
