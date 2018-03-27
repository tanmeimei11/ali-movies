import wepy from 'wepy';
import Index from '@/api/index';
import report from '@/components/report-submit';
import researchWindow from '@/components/researchWindow';
import receiveCardModal from '@/components/index/receiveCardModal';
import adBanner from '@/components/adBanner';
import qrcodeFromMixin from '@/mixins/qrcodeFromMixin';
import auth from '@/api/auth';
// import track from '@/utils/track';

export default class index extends wepy.page {
  config = {
    navigationBarTitleText: 'in同城趴·电影'
  }
  components = {report, researchWindow, receiveCardModal, adBanner}

  mixins = [qrcodeFromMixin]

  data = {
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
      console.log( 'verify succ start submit' );
      await Index.submitHuabeiCardInfo( {
        phone: this.huabeiInfo.phone
      } );
      this.huabeiInfo.isShow = false;
      this.$apply();
    }
  }

  methods = {
    goChooseSeat ( item ) {
      if ( item.status === '1' ) {
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
    const _huabeiInfo = _data.huabei_profit_info;
    this.huabeiInfo.fromHuabei && _huabeiInfo && ( this.huabeiInfo = Object.assign( {}, this.huabeiInfo, {card: {
      start: _huabeiInfo.validity_date,
      end: _huabeiInfo.expiration_date
    },
      phone: _huabeiInfo.phone,
      isShow: _huabeiInfo.popup
    } ) );
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
