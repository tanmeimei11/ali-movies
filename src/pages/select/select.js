import wepy from 'wepy';
import auth from '@/api/auth';
import Ticket from '@/api/ticket';
import tips from '@/utils/tips';
import report from '@/components/report-submit';
import track from '@/utils/track';

export default class ticket extends wepy.page {
  config = {
    navigationBarTitleText: '选座'
  }
  data = {
  }

  methods = {
  }

  async init () {
  }
  async onLoad ( options ) {
    await auth.ready();
    await this.init();
  }
}
