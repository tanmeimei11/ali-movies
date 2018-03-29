import wepy from 'wepy';
import auth from '@/api/auth';
import Self from '@/api/self';
import tips from '@/utils/tips';
import { request } from '@/utils/request';
import report from '@/components/report-submit';
import track from '@/utils/track';
import util from '@/utils/util';
import tabbbar from '@/components/tabbbar';

export default class self extends wepy.page {
  config = {
    navigationBarTitleText: '我的'
  }
  components = {report, tabbbar}

  data = {
    pageName: 'self',
    list: [],
    num: '',
    type: '',
    isShowMobile: false,
    isFull: false,
    cards: [],
    cardNum: 0,
    userInfo: { // 用户信息
      avatar: '',
      name: '',
      phone: ''
    },
    cardInfos: [{ // 卡片信息
      id: '',
      title: 'in同城趴·电影王卡',
      desc: '可任意次数兑换观影券',
      time: '',
      isApply: true,
      num: ''
    }],
    listName: {
      'movie_ticket': '电影票',
      'movie_card': '电影卡',
      'union_select_seat': '关联选座',
      'redeem_movie_card': '兑换电影王卡',
      'contact_cs': '联系客服'
    },
    userTitle: {
      '0': 'normal',
      '1': 'wangka',
      '2': 'huabei'
    },
    contractID: '2018011801960713',

    isShowExchange: false,
    exchangeDisabled: true,
    change_code: '',
    phone: '',
    isfirst: true,
    cdkeyError: '',
    cdkeyText: '',
    phoneError: ''
  }

  methods = {
    app () {
      var link = `https://h5.in66.com/inpromo/in-movies/movieList.html`;
      wepy.navigateTo( {
        url: `/pages/webview/webview?h5url=${encodeURIComponent( link )}`
      } );
    },
    selfLink ( e ) {
      var type = e.currentTarget.dataset.type;
      switch ( type ) {
        case 'movie_ticket':
          wepy.navigateTo( {
            url: `/pages/ticket/ticket`
          } );
          break;
        case 'movie_card':
          wepy.navigateTo( {
            url: `/pages/card/card`
          } );
          break;
        case 'union_select_seat':
          break;
        case 'redeem_movie_card':
          this.isShowExchange = true;
          break;
        case 'contact_cs':
          break;
        case 'alipay_life_app':
          break;
      }
    },
    bindKeyInput ( e ) {
      this.num = e.detail.value;
      if ( e.detail.value.length === 11 ) {
        if ( !util.verifyPhone( this.num ) ) {
          return;
        }
        this.isFull = true;
      } else {
        this.isFull = false;
      }
    },
    async submit () {
      if ( this.isFull ) {
        tips.loading();
        var res = await request( {
          url: '/mnp/user/update_phone',
          method: 'POST',
          data: {
            phone: this.num
          }
        } );
        if ( res.succ ) {
          tips.loaded();
          this.userInfo.phone = this.num;
          my.showToast( {
            type: 'success',
            content: this.type + '成功',
            duration: 3000
          } );
          this.isShowMobile = false;
          this.$apply();
        } else {
          tips.loaded();
          tips.error( '网络错误' );
        }
      }
    },
    open ( e ) {
      console.log( e );
      this.isShowMobile = true;
      this.type = e.currentTarget.dataset.type;
    },
    close () {
      this.isShowMobile = false;
    },
    toCard ( e ) {
      this.cardNum = e.currentTarget.dataset.index;
      track( 'my_card_click' );
      wepy.navigateTo( {
        url: `/pages/card/card?card_id=${e.currentTarget.dataset.id}`
      } );
    },
    apply () {
      wepy.navigateTo( {
        url: '/pages/detail/detail'
      } );
    },

    /**
     * 确认兑换按钮
     */
    async exchange () {
      if ( !util.verifyPhone( this.phone.trim() ) ) {
        this.phoneError = 'error';
        return;
      }

      try {
        await Self.cardChange( {
          change_code: this.change_code,
          phone: this.phone
        } );
        // 兑换成功
        this.isShowExchange = false;
        await this.init();
      } catch ( e ) {
        // 兑换失败
        this.cdkeyError = 'error';
        this.cdkeyText = e.message;
        this.$apply();
      }
    },

    cdkeyInput ( e ) {
      this.cdkeyError = '';
      this.exchangeDisabled = false;
      this.change_code = e.detail.value;

      if ( this.change_code.trim() === '' || !this.phone ) {
        this.exchangeDisabled = true;
      }
    },

    phoneInput ( e ) {
      this.phoneError = '';
      this.exchangeDisabled = false;
      this.phone = e.detail.value;

      if ( this.change_code.trim() === '' || !this.phone ) {
        this.exchangeDisabled = true;
      }
    },

    closePopup ( e ) {
      console.log( e );
      if ( e.target.dataset.force === '1' || e.target.id === 'exchangePopup' ) {
        this.cdkeyError = '';
        this.isShowExchange = false;
      }
    }
  }

  async init () {
    var myInfoRes = await Self.getMyInfo();
    console.log( myInfoRes );
    this.list = myInfoRes.feature_list;
    this.userInfo = myInfoRes.profile;
    // 读取手机号
    this.isfirst = !this.userInfo.phone;
    this.phone = this.userInfo.phone;
    this.$apply();
  }
  async onLoad () {
    track( 'my_page_enter' );
  }
  async onShow () {
    track( 'my_page_screen' );
    await auth.ready();
    await this.init();
  }
}
