import wepy from 'wepy';
import Index from '@/api/index';
import report from '@/components/report-submit';
import researchWindow from '@/components/researchWindow';
import receiveCardModal from '@/components/index/receiveCardModal';
import adBanner from '@/components/adBanner';
import tabbbar from '@/components/tabbbar';
import qrcodeFromMixin from '@/mixins/qrcodeFromMixin';
import auth from '@/api/auth';
import util from '@/utils/util';
import track from '@/utils/track';

export default class index extends wepy.page {
  config = {
    navigationBarTitleText: '电影中心'
  }
  components = {report, researchWindow, receiveCardModal, adBanner, tabbbar}

  mixins = [qrcodeFromMixin]

  data = {
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
    }
  }

  events = {
    closeResearchWindow () {
      this.showResearchWindow = false;
    },
    closeReceiveCardModal () {
      this.huabeiInfo.isShow = false;
    },
    changeReceBtnStatus ( type, phone ) {
      this.huabeiInfo.btnStatus = type;
      this.huabeiInfo.phone = phone;
    },
    async receive ( phone ) {
      var _query = wepy.$instance.globalData.query;
      await Index.submitHuabeiCardInfo( {
        phone: this.huabeiInfo.phone,
        fromHuabei: 1,
        tag: _query.tag,
        userId: _query.userId,
        voucherId: _query.voucherId
      } );
      track( 'pickseat_huabei_card_get' );
      this.huabeiInfo.isShow = false;
      this.$apply();
    }
  }

  methods = {
    goChooseSeat ( e ) {
      const item = e.target.dataset.item;
      if ( item.status === '1' ) {
        // wepy.navigateTo( {
        //   url: `/pages/cinemaList/cinemaList?id=${item.id}`
        // } );
        wepy.reLaunch( {
          url: `/pages/seat/seat`
        } );
        console.log( 'goChooseSeat' );
      }
    }
  }

  onShareAppMessage ( res ) {
    console.log( this.texts );
    return {
      title: this.texts.alipay_share_title,
      desc: this.texts.alipay_share_desc,
      path: `${this.texts.share_path}qrcode_from=${this.qrcode}`,
      imageUrl: this.texts.bg_img
    };
  }

  async onLoad ( options ) {
    track( 'index_page_screen' );
    var _options = Object.assign( {}, options, wepy.$instance.globalData.query );
    this.initQrcodeFrom( _options );
    this.initHuabei( _options );
    this.initRedirect( _options );
    await auth.ready();
    await this.initPageInfo( _options );
    await this.initShowWin( _options );
  }

  async initPageInfo () {
    var _data = await Index.getIndexInfo( {
      fromHuabei: this.huabeiInfo.fromHuabei
    } );
    this.movieList = _data.movies;
    this.bannerInfo = _data.ad_info;
    if ( _data.ad_info.length ) {
      track( 'pickseat_index_banner_expo' );
    }
    const _huabeiInfo = _data.huabei_profit_info;
    if ( this.huabeiInfo.fromHuabei && _huabeiInfo ) {
      this.huabeiInfo = Object.assign( {}, this.huabeiInfo, {card: {
        start: _huabeiInfo.validity_date,
        end: _huabeiInfo.expiration_date
      },
        phone: _huabeiInfo.phone,
        isShow: _huabeiInfo.popup,
        btnStatus: util.verifyPhone( _huabeiInfo.phone )
      } );
      track( 'pickseat_huabei_card_expo' );
    }
    this.$apply();
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

  async initHuabei ( options ) {
    this.huabeiInfo.fromHuabei = this.getQuery( options, 'fromHuabei' ) || 0;
    wepy.$instance.globalData.query.fromHuabei = 0;
  }
}
