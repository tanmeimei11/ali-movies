import Pagebase from './page';
export default class MoviesList extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getCinemaList () {
    return await this.request( {
      url: '/h5/cinema/list'
    } );
  }
  static async getSchedule ( data ) {
    return await this.request( {
      url: '/h5/cinema/schedule',
      data: data
    } );
  }
}
