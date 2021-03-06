import wepy from 'wepy';
import auth from '@/api/auth';
import Detail from '@/api/detail';
import tips from '@/utils/tips';
import report from '@/components/report-submit';
import receiveGiftModal from '@/components/detail/receiveGiftModal';
import receiveTicketModal from '@/components/detail/receiveTicketModal';
import buyMutiModal from '@/components/detail/buyMutiModal';
import receiveFaildModal from '@/components/detail/receiveFaildModal';
import channelModal from '@/components/detail/channelModal';
import notice from '@/components/detail/notice';
import moviePart from '@/components/detail/moviePart';

import shareConnectMixin from '@/mixins/shareConnectMixin';
import loadingMixin from '@/mixins/loadingMixin';
import track from '@/utils/track';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'in同城趴·电影王卡'
  }
  components = { report, receiveGiftModal, buyMutiModal, receiveFaildModal, receiveTicketModal, channelModal, notice, moviePart }
  mixins = [shareConnectMixin, loadingMixin]
  data = {
    toView: '',
    detailCode: {},
    cinemas: {
      img: '',
      list: [
        {
          address: '',
          addressImg: '',
          gps: '',
          name: ''
        }
      ]
    },
    movies: [
      {
        name: '',
        url: ''
      }
    ],
    moviesSections: [],  // 电影模块的list
    movieImg: '', // 电影模块的底图
    cardImg: '', // 支付卡片的图片
    rules: [],
    detailStatus: {
      is_buy: '0',
      fetch_ticket: false
    },
    isPay: false,
    detailText: {},
    qrcode_from: '',
    shareInfo: {},  // 分享信息
    showShareWindow: false,
    buyMutiModalInfo: {  // 购买多张的信息
      show: false,
      number: 1,
      basePrice: '',
      baseDesc: ''
    },
    receiveGiftInfo: {  // 接收卡片
      btnStatus: false,
      phoneNum: '',
      show: false,
      cardInfo: {}
    },
    receiveFaildInfo: { // 失败弹窗
      type: '',
      show: false,
      msg: ''
    },
    receiveTicketInfo: { // 接收电影票
      show: false,
      fetch_ticket: false,
      shareCode: '',
      userInfo: {}
    },
    channelModalInfo: { // 渠道优惠券弹窗
      rp_code: null,
      show: false,
      imgUrl: ''
    },
    noticeInfo: { // 右下角提示信息
      show: false,
      rp_notice: []
    },
    discountInfo: { // 优惠抵扣信息
      show: false,
      ticketId: '',
      detail: []
    },
    cardCode: '', // 分享进来的转赠卡的卡片code
    bgImages: [], // 背景图
    partBg: '',
    shareImage: '',
    bgStyle: '',
    statusQuery: {}, // 状态参数
    fixBtnText: ['', '']// fix按钮的文案
  }
  events = {
    closeBuyMutiModal() {
      this.buyMutiModalInfo.show = false;
    },
    changeBuyNum(num) {
      this.buyMutiModalInfo.number = num;
    },
    changeReceBtnStatus(val, phoneNum) {
      this.receiveGiftInfo.btnStatus = val;
      phoneNum && (this.receiveGiftInfo.phoneNum = phoneNum);
    },
    closeRecevieFaild() {
      this.receiveFaildInfo.show = false;
      if (this.receiveFaildInfo.type === 'notGetTicket') {
        track('fission_other_soldout_iknow');
      }
    },
    closeReceiveModal() {
      this.receiveGiftInfo.show = false;
    },
    closeRecevieTicket() {
      this.receiveTicketInfo.show = false;
    },
    // 关闭渠道红包弹窗
    closeChannelModal() {
      this.channelModalInfo.show = false;
      this.noticeInfo.show = true;
    },
    async receive() {
      try {
        track('page_receive_box_confirm');
        await Detail.receiveCard(this.cardCode, this.receiveGiftInfo.phoneNum);
        wepy.reLaunch({
          url: `/pages/self/self`
        });
      } catch (e) {
        // 接收失败
        this.receiveGiftInfo.show = false;
        this.receiveFaildInfo = {
          ...this.receiveFaildInfo,
          show: true,
          msg: '领取失败了'
        };

        this.$apply();
      }
    },
    async payOrder() {
      try {
        this.isPay = true;
        track('page_number_box_pay');
        await this.pay();
      } catch (e) {
      }
    }
  }
  methods = {
    toIndex() {
      wepy.reLaunch({
        url: `/pages/index/index`
      });
    },
    closeBuyMutiModal() {
      this.buyMutiModalInfo.show = false;
    },
    openBuyMutiModal() {
      if (this.discountInfo.ticketId && this.discountInfo.show) {
        track('fission_minus_50_buy');
      } else {
        track('page_buy');
      }
      this.buyMutiModalInfo.show = true;
    },
    gotoBottom() {
      track('page_rule');
      this.toView = '';
      this.$apply();
      this.toView = 'details';
      this.$apply();
    },
    getMovieTicket(type) {
      if (type === 'lingqu') {
        // 来自弹窗的领取
        track('fission_other_immediately_receive');
      } else {
        track('fission_immediately_get');
      }

      wepy.navigateTo({
        url: `/pages/ticket/ticket`
      });
    },
    async normalPay() {
      this.openBuyMutiModal();
    },
    shareCode() {
      track('page_share_buy');
    },
    async sharePay() {
      this.showShareWindow = true;
      track('page_share_get_cash');
    },
    closeShareWindow() {
      this.showShareWindow = false;
    },
    trackContact() {
      track('page_custom_service');
    }
  }
  onShareAppMessage(res) {
    console.log(this.shareInfo);
    return {
      title: this.shareInfo.alipay_share_title,
      desc: this.shareInfo.alipay_share_desc,
      path: `/pages/detail/detail`,
      imageUrl: this.shareInfo.share_img
      // 'http://inimg07.jiuyan.info/in/2018/01/26/20A52317-E4EB-3657-E024-F2EF040B2E86.jpg'
    };
  }
  onReachBottom() {
    track('page_slide_to_end');
  }
  async onLoad(options) {
    track('page_screen');
    this.initOptions(options);
    track('page_enter');
    await this.init();
  }
  async init() {
    var res = await Detail.getDetailData(this.detailCode);
    this.cinemas = Detail.initCinemas(res.cinemas, res.all_cinema_addr_img);
    this.moviesSections = Detail.initMovies(res.movie_sections);
    this.detailText = this.initBuyText(res);
    this.rules = this.initRulesText(res.desc);
    this.initBuyInfo(res);
    this.initBgImages(res);
    this.initFixBtnText(res);
    this.$apply();
    await auth.ready();
    track('page_entry');
    this.detailStatus = await Detail.getDetailStatus(this.statusQuery);
    this.initReceiveTicketInfo(this.detailStatus);
    this.initChannelDiscount(this.detailStatus);
    this.shareInfo = await Detail.getShareInfo();
    if (this.cardCode) { await this.initCardStatus(); };
    this.$apply();
  }
  /**
   * 初始化fixed按钮的文案
   * @param {*} res
   */
  initFixBtnText(res) {
    this.fixBtnText = res.btn_txts;
  }
  /**
   *  初始化从哪里进来  // 1.立即升级 2.分享送三张电影票 3.红包
   *  返回  createorder cfstatus 接口的参数
   */
  getDetailStatusQuery() {
    var _data = {};
    this.receiveTicketInfo.shareCode && (_data.share_code = this.receiveTicketInfo.shareCode);
    this.discountInfo.ticketId && (_data.ticket_id = this.discountInfo.ticketId);
    this.channelModalInfo.rp_code && (_data.rp_code = this.channelModalInfo.rp_code);
    this.statusQuery = _data;
    this.$apply();
    return _data;
  }
  /**
   * 初始化接收卡的信息
   * @param {*} res
   */
  initReceiveTicketInfo(res) {
    if (this.discountInfo.ticketId) {  // 升级点进来
      this.discountInfo.show = true;
      this.noticeInfo.show = true;
      return;
    }

    // 分享三张电影票点进来
    if (res.ticket_switch) { // 票已经领完了
      track('fission_other_soldout_expo');
      this.receiveFaildInfo = {
        type: 'notGetTicket',
        show: true,
        msg: res.ticket_desc
      };
    } else if (res.fetch_ticket && res.share_user_info && this.receiveTicketInfo.shareCode) {  // 送你三张电影票
      track('fission_other_receivebox_expo');
      this.receiveTicketInfo = {
        ...this.receiveTicketInfo,
        show: true,
        userInfo: res.share_user_info
      };
    }
  }
  /**
   * 初始化渠道优惠信息
   */
  initChannelDiscount(res) {
    if (res.rp_bg_img) {
      this.channelModalInfo.imgUrl = res.rp_bg_img;
      this.channelModalInfo.show = true;
      track('movie_fission_redpack_expo');
    }
    if (res.rp_notice && res.rp_notice.length) {
      this.noticeInfo.rp_notice = res.rp_notice;
    }
    if (res.rp_deduction && res.rp_deduction.length) {
      this.discountInfo.detail = res.rp_deduction;
      this.discountInfo.show = true;
    }
  }
  /**
   * 初始化背景图
   * @param {*} res
   */
  initBgImages(res) {
    this.movieImg = res.movies_bottom_pic;
    this.cardImg = res.card_img;
    this.bgImages = res.bg_imgs;
    this.bgStyle = `background-image:url(${this.bgImages[0]}),url(${this.bgImages[1]}),url(${this.bgImages[2]})`;
    this.partBg = res.bg_img_01;
  }

  /**
  * 初始化支付信息
  * @param {*} res
  */
  initBuyInfo(res) {
    this.buyMutiModalInfo = {
      ...this.buyMutiModalInfo,
      basePrice: parseInt(res.pay_price),
      baseDesc: res.pay_notice
    };
  }
  /**
   * 初始化接收卡
   * @param {*} statusRes
   */
  async initCardStatus() {
    this.receiveGiftInfo.cardInfo = await Detail.getCardInfo(this.cardCode);
    var _info = this.receiveGiftInfo.cardInfo;
    if (!_info.is_owner && _info.can_get) {
      this.receiveGiftInfo.show = true;
      _info.phone && (this.receiveGiftInfo.phoneNum = _info.phone);
    } else if (!_info.is_owner && !_info.can_get) {
      track('page_receive_box_expo');
      this.receiveFaildInfo.show = true;
      this.receiveFaildInfo.msg = _info.msg;
    }
  }
  /**
   * 初始化购买状态
   * @param {*} statusRes
   */
  initDetailStatus(statusRes) {
    return statusRes;
  }
  /**
   * 初始化购买文案
   * @param {*} desc
   */
  initBuyText(res) {
    return {
      ...res.desc,
      current_person_count: res.current_person_count
    };
  }
  /**
   * 初始化 规则信息
   * @param {*} desc
   */
  initRulesText(desc) {
    var _r = [0, 1, 2, 3];
    return _r.map((item) => {
      return {
        title: desc[`desc${item * 2 + 17}`],
        desc: desc[`desc${item * 2 + 17 + 1}`]
      };
    });
  }
  /**
   * 初始化连接上的参数
   * @param {*} options
   */
  initOptions(options) {
    console.log(wepy.$instance.globalData.query);
    this.detailCode = Object.assign({}, options, wepy.$instance.globalData.query);
    // var this.detailCode =  Object.assign({}, options, wepy.$instance.globalData.query)
    if (this.detailCode.qrcode_from) {
      wepy.$instance.globalData.query.qrcode_from = this.detailCode.qrcode_from;
      this.data.qrcode_from = this.detailCode.qrcode_from;
    }
    this.data.shareId = this.detailCode.share_uid || '';
    this.cardCode = this.detailCode.cardCode || '';
    if (this.detailCode.ticketId) {  // 立即升级点过来
      this.discountInfo.ticketId = this.detailCode.ticketId;
      this.discountInfo.show = true;
    }
    if (this.detailCode.shareCode) { // 由别人分享电影票点进来
      this.receiveTicketInfo.shareCode = this.detailCode.shareCode;
    }
    if (this.detailCode.rp_code) {
      this.channelModalInfo.rp_code = this.detailCode.rp_code;
    }
    this.$apply();
    this.getDetailStatusQuery();
  }
  /**
   *  支付
   */
  async pay() {
    try {
      await auth.ready();
      var createRes = await Detail.creatOrder(this.buyMutiModalInfo.number, this.statusQuery);
      if (createRes.code === '4000032129' || createRes.code === '4000031814') {
        tips.error(createRes.msg);
        return;
      }

      var getOrderRes = await Detail.getOrderDetail(createRes);
      track('page_wx_pay_start');
      const { resultCode } = await wepy.tradePay({ orderStr: getOrderRes.sign });
      if (resultCode.toString() !== '9000') {
        throw new Error('支付失败');
      }
      track('page_pay_successful');
      this.paySucc(createRes.order_no);
    } catch (e) {
      // this.buyMutiModalInfo.show = false;
      this.$apply();
      track('page_pay_failed');
    }
  }
  /**
   *改变购买状态
   */
  async changeDetailStatus() {
    var statusRes = await Detail.getDetailStatus();
    this.detailStatus = statusRes;
    this.$apply();
  }
  /**
   *  支付成功
   */
  paySucc(orderNo) {
    this.clearCutInfo();
    wepy.navigateTo({
      url: `../result/result?orderNo=${orderNo}`
    });
  }
  payFail() {
  }
  /**
   *  清除优惠信息
   */
  clearCutInfo() {
    this.noticeInfo.show = false;
    this.discountInfo.show = false;
    this.discountInfo.ticketId = '';
    this.buyMutiModalInfo.show = false;
    this.$apply();
  }
}
