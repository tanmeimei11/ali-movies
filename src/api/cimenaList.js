import Pagebase from './page';
export default class CimenaList extends Pagebase {
  static async getSchedule ( data ) {
    return await this.request( {
      url: '/h5/movie/movieScheduledCinemas',
      data: data
    } );
  }
}
