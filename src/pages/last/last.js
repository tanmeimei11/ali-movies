import wepy from 'wepy';
import auth from '@/api/auth';
import Detail from '@/api/last';
import tips from '@/utils/tips';
// import report from '@/components/report-submit';
// import track from '@/utils/track';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'in同城趴·电影王卡'
  }
  data = {
    equitybar: [],
    rpTips: false,
    rpModal: false,
    btn_tips: '',
    btnDown: false,
    tabbar: {},
    tabBarUp: false,
    targetDiscount: {},
    buyMutiModalInfo: {
      'rp_deduction': []
    },
    clientTop: 0,
    realMoney: '',
    money: '',
    number: 1,
    payModal: false,
    nextNum: 0,
    moving: true,
    top_descs: '',
    openLocation: true,
    locationWindow: false,
    need_purchase: 1,
    confirm: {
      show: false
    },
    ag_card_id: '',
    original_price: '',
    price: '',
    productId: 459,
    countNum: '',
    currentIndex: 0,
    ruleModal: true,
    succOne: false,
    succTwo: false,
    loading: false,
    detailInfo: {},
    rule: {},
    num: 0,
    width: 0,
    renewInfo: {} // 包月
  }
  events = {
  }
  methods = {
    call () {
      my.makePhoneCall( { number: '0571-86009012' } );
    },
    closePay () {
      this.payModal = false;
      this.ruleModal = false;
      this.succOne = false;
      this.succTwo = false;
    },
    openPay () {
      this.payModal = true;
    },
    openRule () {
      this.ruleModal = true;
    },
    /*
    * 支付
    */
    submit ( e ) {
      this.num = e.currentTarget.dataset.num;
      this.pay( '/mnp/order/create_common', {
        'buy_num': this.num,
        'product_id': 359,
        'deduction_mode': 'fs'
      } );
    },
    submitRenew () {
      this.pay( '/agreement/agreement/create', {
        'product_id': this.renewInfo.product_id
      } );
    }
  }
  async onLoad () {
    await this.init();
  }
  initRulesText ( desc ) {
    var _r = [0, 1, 2, 3];
    return _r.map( ( item ) => {
      return {
        title: desc[`desc${item * 2 + 19}`],
        desc: desc[`desc${item * 2 + 19 + 1}`]
      };
    } );
  }
  async pay ( _url, _data ) {
    await auth.ready();
    try {
      var createRes = await Detail.creatOrder( _url, _data );

      if ( createRes.code === '4160033001' || createRes.code === '4160033001' ) {
        tips.error( createRes.msg );
        return;
      }

      var _orderDetailData = await Detail.getOrderDetail( {
        ...createRes,
        paymentChannel: 'aliagreement',
        businessParty: 'incrowdfunding_app'
      } );
      const { resultCode } = await wepy.tradePay( { orderStr: _orderDetailData.sign } );
      if ( resultCode.toString() !== '9000' ) {
        return;
      }
      this.payModal = false;
      if ( this.num == 1 ) {
        this.succOne = true;
      } else if ( this.num == 2 ) {
        this.succTwo = true;
      }
      this.$apply();
      // this.refreshUnion()
    } catch ( error ) {
      tips.loaded();
      console.error( error );
    }
  }
  async init () {
    var data = await Detail.getDetailStatus();
    this.btn_tips = data.btn_tips;
    this.productId = data.product_id;
    this.renewInfo = data.renew_info;
    this.detailInfo = data;
    this.tabbar = data.tabbar;
    this.equitybar = data.equitybar;
    this.price = data.pay_amount;
    this.width = data.current_card_count / data.total_card_count * 100 + '%';
    this.rule = this.initRulesText( data.desc );
    this.$apply();
  }
}
