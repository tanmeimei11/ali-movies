import Pagebase from './page';
export default class Cinema extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getCinemaList () {
    return await this.request( {
      url: '/h5/cinema/list'
    } );
  }
}
