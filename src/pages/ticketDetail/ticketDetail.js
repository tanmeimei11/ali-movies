import wepy from 'wepy';
import auth from '@/api/auth';
import TicketDetail from '@/api/ticketDetail';
import tips from '@/utils/tips';
import report from '@/components/report-submit';
import empty from '@/components/empty';
import track from '@/utils/track';

export default class ticketDetail extends wepy.page {
  config = {
    navigationBarTitleText: '电影票详情'
  }
  data = {
    query: {},
    detail: {},
    canceled: false,
    cancelWindow: false,
    maskOn: true,
    verify: false,
    detailList: [],
    detail: {},
    cancelWindow: false,
    activeIndex: 0,
    cancelTxt: ''
  }

  components = {report}

  methods = {
    maskOn () {
      this.maskOn = false
      this.$apply()
    },
    cancelWindowOff() {
      this.cancelWindow = false
      track('ticket_qrcode_page_cancel')
      this.$apply()
    },
    cancelWindowOn () {
      this.cancelWindow = true
      this.$apply()
    },
    async cancel () {
      try {
        var res = await TicketDetail.cancelTicket({ticket_id: this.query.id})
        track('ticket_qrcode_page_confirm')
        tips.toast(res.cancel_result_msg)
        this.cancelWindow = false
        var pageList = getCurrentPages()
        pageList.forEach((item,i) => {
          if (item.route.indexOf('ticket/ticket') >= 0) {
            item.init()
          }
        })
        this.init()
      } catch (error) {
        console.log(error)
        // this.$toast(error)
      }
    }
  }
  async getTicketQRCode() {
    var pageList = getCurrentPages()
    var url = pages[pages.length-1].route
    if (url.indexOf('ticketDetail/ticketDetail') == -1) return
    var res = await TicketDetail.getQRcode({ticket_id: this.query.id})
    this.detail.qr_code = res.qr_code
    this.$apply()
    if (res.verify == '1') {
      this.verify = true
      this.$apply()
      return
    }
    setTimeout(() => {
      this.getTicketQRCode()
    }, 5000);
  }
  // async getTicketQRCode() {
  //     let flag = false
  //     const option = {
  //         name: 'getTicketQRCode',
  //         params: { ticket_id: this.query.id },
  //         interval: 5000,
  //         succ: (res) => {
  //             const {
  //                 data,
  //                 succ,
  //                 msg
  //             } = res
  //             if (!succ) {
  //                 flag = true // 轮询结束？？
  //                 return this.$toast(msg)
  //             }
  //             this.detail.qr_code = data.qr_code
  //             if (data.verify == '1') { // eslint-disable-line
  //                 this.verify = true
  //             }
  //         },
  //         isStop: () => {
  //             return flag || this.verify
  //         }
  //     }
  //     this.polling(option)
  // }

  async init () {
    try {
      var res = await TicketDetail.getNewTicketDetail({ticket_id: this.query.id})
      // if (!succ) return this.$toast(msg)
      this.detail = res.tickets[0] || []
      this.cancelTxt = res.cancel_confirm_msg
      if (this.detail.verify == '1') { // eslint-disable-line
          // 电影票已经核销,不需要轮询
          this.verify = true
          this.maskOn = false
          // this.canceled = true
      } else if (this.detail.verify === '2' || this.detail.verify === '4') {
          // 2：已失效   4：已取消  
          this.canceled = true
      } else if (this.detail.verify === '3') {
          // 轮询修改二维码，5000ms一次
          this.maskOn = false
          this.getTicketQRCode()
      } else {
          // 轮询修改二维码，5000ms一次
          this.getTicketQRCode()
      }
      this.$apply()
    } catch (error) {
      console.log(error)
      // this.$toast(error)
    }
    // var myInfoRes = await Ticket.getMyInfo();
    // this.$apply();
  }
  async onLoad ( options ) {
    this.query = Object.assign( {}, options, wepy.$instance.globalData.query );
    this.$apply()
    await auth.ready();
    await this.init();
  }
}
