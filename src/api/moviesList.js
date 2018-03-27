import Pagebase from './page';
export default class MoviesList extends Pagebase {
  static async getSchedule ( data ) {
    return await this.request( {
      url: '/h5/cinema/schedule',
      data: data
    } );
  }
}
