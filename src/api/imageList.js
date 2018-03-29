import Pagebase from './page';
export default class Cinema extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getImagesList ( data ) {
    return await this.request( {
      url: '/info/ad/imgs',
      data: data
    } );
  }
}
