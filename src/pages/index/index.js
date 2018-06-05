import wepy from 'wepy';
import Index from '@/api/index';
import report from '@/components/report-submit';
import researchWindow from '@/components/researchWindow';
import receiveCardModal from '@/components/index/receiveCardModal';
import adBanner from '@/components/adBanner';
import tabbbar from '@/components/tabbbar';
import buyCard from '@/components/index/buyCard';
import qrcodeFromMixin from '@/mixins/qrcodeFromMixin';
import receiveGiftModal from '@/components/index/receiveGiftModal';
import receiveTicketModal from '@/components/detail/receiveTicketModal';
import receiveFaildModal from '@/components/index/receiveFaildModal';
import auth from '@/api/auth';
import util from '@/utils/util';
import track from '@/utils/track';
import tips from '@/utils/tips';

export default class index extends wepy.page {
  config = {
    navigationBarTitleText: '电影中心'
  }
  components = { report, researchWindow, receiveCardModal, adBanner, tabbbar, buyCard, receiveGiftModal, receiveTicketModal, receiveFaildModal }

  mixins = [qrcodeFromMixin]

  data = {
    texts: {},
    tips: '',
    pageName: 'index',
    showResearchWindow: false,
    researchInfo: {},
    huabeiInfo: {
      fromHuabei: 0,
      isShow: false,
      btnStatus: false,
      phone: '',
      card: {
        start: '',
        end: ''
      }
    },
    bannerInfo: [],
    movieList: [],
    statusText: {
      '0': '已结束',
      '1': '选座',
      '4': '排片中'
    },
    isHiddenPage: false,
    isShowPop: false,
    receiveGiftInfo: {  // 接收卡片
      btnStatus: false,
      phoneNum: '',
      show: false,
      cardInfo: {}
    },
    cardCode: '', // 分享进来的转赠卡的卡片code
    receiveFaildInfo: { // 失败弹窗
      type: '',
      show: false,
      msg: ''
    }
  }

  events = {
    changeReceCardBtnStatus ( val, phoneNum ) {
      this.receiveGiftInfo.btnStatus = val;
      phoneNum && ( this.receiveGiftInfo.phoneNum = phoneNum );
    },
    closeReceiveModal () {
      this.receiveGiftInfo.show = false;
    },
    async receiveCard () {
      try {
        track( 'page_receive_box_confirm' );
        await Index.receiveCard( this.cardCode, this.receiveGiftInfo.phoneNum );
        wepy.reLaunch( {
          url: `/pages/self/self`
        } );
      } catch ( e ) {
        console.log( e );
        // 接收失败
        this.receiveGiftInfo.show = false;
        this.receiveFaildInfo = {
          ...this.receiveFaildInfo,
          show: true,
          msg: e.msg
        };

        this.$apply();
      }
    },
    closeRecevieFaild () {
      this.receiveFaildInfo.show = false;
      if ( this.receiveFaildInfo.type === 'notGetTicket' ) {
        track( 'fission_other_soldout_iknow' );
      }
    },
    closeResearchWindow () {
      this.showResearchWindow = false;
    },
    closeReceiveCardModal () {
      this.huabeiInfo.isShow = false;
      this.isHiddenPage = false;
    },
    changeReceBtnStatus ( type, phone ) {
      this.huabeiInfo.btnStatus = type;
      this.huabeiInfo.phone = phone;
    },
    async receive ( phone ) {
      tips.loading();
      var _query = wepy.$instance.globalData.query;
      await Index.submitHuabeiCardInfo( {
        phone: this.huabeiInfo.phone,
        fromHuabei: 1,
        tag: _query.tag,
        userId: _query.userId,
        voucherId: _query.voucherId
      } );
      track( 'pickseat_huabei_card_get' );
      tips.loaded();
      this.huabeiInfo.isShow = false;
      this.$apply();
      tips.toast( '领取成功' );
      this.isHiddenPage = false;
    }
  }

  methods = {
    goChooseSeat ( e ) {
      const item = e.target.dataset.item;
      if ( item.status === '1' ) {
        wepy.navigateTo( {
          url: `/pages/cinemaList/cinemaList?id=${item.id}`
        } );
        // 临时上新版本 part－8
        // wepy.reLaunch( {
        //   url: `/pages/seat/seat`
        // } );
      }
    }
  }

  onShareAppMessage ( res ) {
    return {
      title: this.texts.alipay_share_title,
      desc: this.texts.alipay_share_desc,
      path: `${this.texts.share_path}qrcode_from=${this.qrcode}`,
      imageUrl: this.texts.bg_img
    };
  }

  async onLoad ( options ) {
    track( 'index_page_screen' );
    track( 'index_page_enter' );
    var _options = Object.assign( {}, options, wepy.$instance.globalData.query );
    this.initQrcodeFrom( _options );
    this.initHuabeiOptions( _options );
    this.initRedirect( _options );
    await auth.ready();
    await this.initPageInfo( _options );
    await this.initShowWin( _options );
    if ( _options.cardCode ) { // 赠送卡的code
      this.cardCode = _options.cardCode;
      await this.initCardStatus();
    }

    this.clearOptions();
    track( 'index_page_enter_login' );
    await this.initHuabeiInfo( _options );

    this.$apply();
  }

  async initPageInfo ( _options ) {
    var _data = await Index.getIndexInfo( _options );
    this.movieList = _data.movies;
    this.bannerInfo = _data.ad_info;
    this.texts = _data.share_info;
    this.tips = _data.none_desc;
    this.isShowPop = _data.show_pop;
    this.$apply();
    if ( _data.ad_info.length ) {
      track( 'pickseat_index_banner_expo' );
    }
  }

  async initHuabeiInfo ( _options ) {
    if ( this.huabeiInfo.fromHuabei === 0 ) {
      return;
    }
    var _huabeiInfo = await Index.getHuaBeiInfo( _options );
    if ( _huabeiInfo.popup ) {
      this.isHiddenPage = true;
      this.huabeiInfo = Object.assign( {}, this.huabeiInfo, {
        card: {
          start: _huabeiInfo.validity_date,
          end: _huabeiInfo.expiration_date
        },
        phone: _huabeiInfo.phone,
        isShow: _huabeiInfo.popup,
        btnStatus: util.verifyPhone( _huabeiInfo.phone )
      } );
      track( 'pickseat_huabei_card_expo' );
    }
  }
  /**
   * 初始化接收卡
   * @param {*} statusRes
   */
  async initCardStatus () {
    this.receiveGiftInfo.cardInfo = await Index.getCardInfo( this.cardCode );
    var _info = this.receiveGiftInfo.cardInfo;
    if ( !_info.is_owner && _info.can_get ) {
      this.receiveGiftInfo.show = true;
      _info.phone && ( this.receiveGiftInfo.phoneNum = _info.phone );
    } else if ( !_info.is_owner && !_info.can_get ) {
      track( 'page_receive_box_expo' );
      this.receiveFaildInfo.show = true;
      this.receiveFaildInfo.msg = _info.msg;
    }
  }

  async initShowWin ( options ) {
    if ( options.showWin === 'research' ) {
      this.showResearchWindow = true;
      this.researchInfo = await Index.getResearchInfo();
    }
  }

  initRedirect ( options ) {
    if ( options.directTo === 'detail' ) {
      wepy.navigateTo( {
        url: `/pages/detail/detail${options.cardCode ? `?cardCode=${options.cardCode}` : ''}`
      } );
    }
  }

  async initHuabeiOptions ( options ) {
    this.huabeiInfo.fromHuabei = parseInt( this.getQuery( options, 'fromHuabei' ) || 0 );
    // wepy.$instance.globalData.query.fromHuabei = 0;
  }

  clearOptions () {
    if ( wepy.$instance.globalData.query.directTo === 'detail' ) {
      wepy.$instance.globalData.query.directTo = '';
    }
  }
}
