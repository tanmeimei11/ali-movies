import Pagebase from './page';
export default class Select extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getSeatInfo () {
    return await this.request( {
      url: '/h5/seat/list'
    } );
  }
}
