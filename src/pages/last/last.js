import wepy from 'wepy';
import auth from '@/api/auth';
import Detail from '@/api/last';
import tips from '@/utils/tips';
import report from '@/components/report-submit';
import buyMultle from '@/components/last/buyMultle';
// import { wxPromisify } from '@/utils/common';
// import track from '@/utils/track';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'in同城趴·电影王卡'
  }
  components = { report, buyMultle }
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
    timeStr: '',
    renewInfo: {}, // 包月
    payAfter: { // 支付成功后的提示
      text: '前往“in同城趴电影”小程序选座',
      btnText: '前去选座'
    },
    buyMulteModal: {// 展示购买多张
      isShow: false,
      number: 2,
      defaultPrice: 59
    },
    isSigned: false // 是否已经签约
  }
  events = {
    changeBuyNum ( val ) {
      this.buyMulteModal.number = val;
    },
    closeBuyMutiModal () {
      this.buyMulteModal.isShow = false;
    },
    payOrder () {
      this.pay( '/mnp/order/create_common', {
        'buy_num': this.buyMulteModal.number,
        'product_id': 359,
        'deduction_mode': 'fs'
      } );
    }
  }
  methods = {
    openBuyMulteModal () {
      this.num = 2;
      this.buyMulteModal.defaultPrice = this.detailInfo.double_present_price;
      this.buyMulteModal.isShow = true;
    },
    toIndex () {
      console.log( 'shouye' );
      wepy.reLaunch( {
        url: `/pages/index/index`
      } );
    },
    startBuy () {
      this.ruleModal = false;
      this.payModal = true;
    },
    call () {
      my.makePhoneCall( { number: '0571-86009012' } );
    },
    closePayBtn () {
      this.payModal = false;
      this.ruleModal = false;
      this.succOne = false;
      this.succTwo = false;
      wepy.reLaunch( {
        url: `/pages/index/index`
      } );
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
      if ( this.isSigned ) {
        return;
      }
      this.payPrepare( '/agreement/agreement/create', {
        'product_id': this.renewInfo.product_id,
        'pay_channel': 'aliagreement',
        'paymentChannel': 'aliagreement',
        'businessParty': 'incrowdfunding_app'
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

  // 签约函数
  async payPrepare ( _url, _data ) {
    try {
      var createRes = await Detail.creatOrder( _url, _data );

      if ( createRes.code === '4160033001' || createRes.code === '4160033001' ) {
        tips.error( createRes.msg );
        return;
      }

      var _orderDetailData = await Detail.getOrderPrepare( {
        ...createRes,
        ..._data
      } );

      const res = await wepy.paySignCenter( { signStr: _orderDetailData.sign } );
      var exec = /\"resultStatus\"\:\"7000\"/;
      if ( !exec.test( JSON.stringify( res ) ) ) {
        tips.loaded();
        return;
      }
      this.isSigned = true;
      this.$apply();
    } catch ( error ) {
      tips.loaded();
      console.error( error );
    }
  }
  async pay ( _url, _data ) {
    try {
      var createRes = await Detail.creatOrder( _url, _data );

      if ( createRes.code === '4160033001' || createRes.code === '4160033001' ) {
        tips.error( createRes.msg );
        return;
      }

      var _orderDetailData = await Detail.getOrderDetail( {
        ...createRes,
        ..._data
      } );
      const { resultCode } = await wepy.tradePay( { orderStr: _orderDetailData.sign } );
      if ( resultCode.toString() !== '9000' ) {
        return;
      }
      this.payModal = false;
      this.buyMulteModal.isShow = false;
      this.succOne = this.num == 1;
      this.succTwo = this.num == 2;

      this.$apply();
      // this.refreshUnion()
    } catch ( error ) {
      tips.loaded();
      console.error( error );
    }
  }
  async init () {
    await auth.ready();
    var data = await Detail.getDetailStatus();
    this.btn_tips = data.btn_tips;
    this.productId = data.product_id;
    this.renewInfo = data.renew_info;
    this.payAfter = {
      text: data.win_msg || '前往“in同城趴电影”小程序首页即可观影选座',
      btnText: data.btn_msg || '前去选座'
    };
    this.timeStr = data.valid_data_str;
    this.isSigned = data.signed || false;
    this.detailInfo = data;
    this.tabbar = data.tabbar;
    this.equitybar = data.equitybar;
    this.price = data.pay_amount;
    this.width = data.current_card_count / data.total_card_count * 100 + '%';
    this.rule = this.initRulesText( data.desc );
    this.$apply();
  }
}
