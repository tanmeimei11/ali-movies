import Pagebase from './page';
export default class CimenaList extends Pagebase {
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
      url: '/h5/movie/movieScheduledCinemas',
      data: data
    } );
  }
}
