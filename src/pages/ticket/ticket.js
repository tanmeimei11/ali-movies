import wepy from 'wepy';
import auth from '@/api/auth';
import Ticket from '@/api/ticket';
// import tips from '@/utils/tips';
import report from '@/components/report-submit';
import empty from '@/components/empty';
// import track from '@/utils/track';

export default class ticket extends wepy.page {
  config = {
    navigationBarTitleText: '电影票'
  }
  data = {
    list: [],
    list2: [],
    ticket: true
  }

  components = {report, empty, empty1: empty}

  methods = {
    ticketOn () {
      this.ticket = true;
      this.$apply();
    },
    ticketOff () {
      this.ticket = false;
      this.$apply();
    },
    use ( e ) {
      if ( e.currentTarget.dataset.item.status !== '0' ) return;
      wepy.reLaunch( {
        url: `/pages/index/index`
      } );
    }
  }

  async init () {
    var myInfoRes = await Ticket.getMyInfo();
    var myLotteryRes = await Ticket.getMyLottery();
    this.list = myInfoRes.ticket_list;
    this.list2 = myLotteryRes.ticket_list;
    this.$apply();
  }
  async onLoad ( options ) {
    await auth.ready();
    await this.init();
  }
}
