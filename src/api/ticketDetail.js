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
   *  获取卡信息的数据接口
   */
  static async cancelTicket ( data ) {
    return await this.request( {
      url: '/h5/user/ticket/cancel',
      method: 'POST',
      data: data
    } );
  }
}
