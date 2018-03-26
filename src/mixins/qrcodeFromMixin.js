import wepy from 'wepy';
import {getParamV} from '@/utils/common';

export default class qrcodeFromMixin extends wepy.mixin {
  initQrcodeFrom ( options ) {
    console.log( options );
    var qf = options.qrcode_from || wepy.$instance.globalData.query.qrcode_from || getParamV( options, 'qf' );
    wepy.$instance.globalData.qrcode_from = qf;
  }

  getQuery ( options, key ) {
    return options[key] || wepy.$instance.globalData.query[key] || getParamV( options, key );
  }
}
