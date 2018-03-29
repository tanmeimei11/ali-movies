import wepy from 'wepy';
import auth from '@/api/auth';
// import { request } from '@/utils/request';
// import tips from '@/utils/tips';
import giveGiftModal from '@/components/card/giveGiftModal';
import empty from '@/components/empty';
import report from '@/components/report-submit';
import track from '@/utils/track';
import Card from '@/api/card';

export default class cards extends wepy.page {
  config = {
    navigationBarTitleText: '我的电影卡'
  }
  components = {report, giveGiftModal, empty}

  data = {
    activeCardInfos: {},
    cardStatusText: '',
    giveGiftInfo: {
      show: false,
      tips: []
    },
    allCards: [],
    _activeSwiperIdx: 1,
    swiperLen: 0
  }

  onShareAppMessage ( res ) {
    var fun = () => {};
    var that = this;
    fun = this.shareCallBack( that );
    return {
      title: '送你一张电影王卡',
      desc: 'in同城趴电影王卡，让你三个月杭州电影无限看！',
      path: `/pages/detail/detail?directTo=detail&cardCode=${this.activeCardInfos.code}`,
      imageUrl: 'https://inimg01.jiuyan.info/in/2018/01/25/FB5D55FB-986F-6433-18B8-BAF8C0C797E3.jpg',
      success: fun
    };
  }

  events={
    closeGiveGiftModal () {
      this.giveGiftInfo.show = false;
    }
  }

  methods = {
    async oprateCard ( e ) {
      const _activeCardStatus = parseInt( this.activeCardInfos.status );
      if ( _activeCardStatus === 1 ) { // 取消转增
        this.cancelGiveCard();
        console.log( this.activeCardInfos, this.allCards[1] == this.activeCardInfos, this.allCards );
        this.$apply();
        return;
      }

      track( 'mycard_transfer' );
      this.giveGiftInfo = { // 转增
        show: true,
        tips: this.activeCardInfos.rules
      };
    },
    changeSwiper ( event ) {
      var _idx = event.detail.current;
      this._activeSwiperIdx = _idx + 1;
      this.activeCardInfos = this.allCards[_idx];
      this.$apply();
    }
  }

  async onLoad ( ) {
    track( 'mycard_page_screen' );
    await auth.ready();
    await this.init();
    this.$apply();
  }

  /**
   * 初始化页面信息
   */
  async init () {
    await this.initCardInfo( this.cardId );
  }
  /**
   * 初始化卡信息
   * @param {*} id
   */
  async initCardInfo () {
    const data = await Card.getCardInfo();
    this.swiperLen = data.cards.length;
    this.cardStatusText = data.btn_txt;

    this.allCards = data.cards.map( ( item ) => { // 转赠状态 0：未赠送，1：已送出未领取，2：已送出已领取，3：领取了别人的
      const card = item.card;
      return {
        ...Card.initCardInfo( card ),
        code: item.reward_code,
        status: card.reward_from_info ? 3 : parseInt( item.reward_status ),
        btnText: data.btn_txt[ item.reward_status ],
        rules: item.prompt_txt
      };
    } );

    this.activeCardInfos = this.allCards[0];
  }

  /**
   * 取消赠送
   * @memberof cards
   */
  async cancelGiveCard () {
    var res = await Card.cancelCardGive( this.activeCardInfos.code );
    this.activeCardInfos.code = res.reward_code;
    this.activeCardInfos.status = res.reward_status;
  }
  /**
   * 转增回调
   */
  shareCallBack ( that ) {
    return async ( ) => {
      var _actCard = that.activeCardInfos;
      if ( _actCard.status === 0 ) {
        var res = await Card.giveCard( _actCard.code );
        _actCard.status = res.reward_status;
        that.$apply();
      }
    };
  }
}
