import wepy from 'wepy';
import Pagebase from './page';
import { paymentChannel, businessParty, payUrl, payPrepareUrl } from '@/utils/config';

export default class Last extends Pagebase {
  /**
   *  获取众筹状态接口
   */
  static async getDetailStatus ( queryObj ) {
    var _data = {
      product_id: 359,
      ...queryObj
    };
    // if ( shareCode ) {
    //   _data.share_code = shareCode;
    // }
    return await this.request( {
      url: '/info/product/detail_common_new',
      //   url: '/h5/info/detail_common',
      data: _data
    } );
  }
  /**
   * 创建订单接口
   */
  static async creatOrder ( url, _data ) {
    console.log( '_data', _data );
    return await this.request( {
      url: url,
      isBackRes: true,
      method: 'POST',
      data: {
        pay_channel: paymentChannel,
        ..._data
      }
    } );
  }

  /**
   * 获取订单信息接口
   * @param {*} createRes  创建订单的res
   */
  static async getOrderDetail ( createRes ) {
    var _data = {
      _token: wepy.$instance.globalData.xToken,
      payment_channel: createRes.paymentChannel || paymentChannel,
      business_party: createRes.businessParty || businessParty,
      order_detail: createRes.order_detail
    };

    if ( createRes.open_id ) {
      _data.extend_params = JSON.stringify( {
        open_id: createRes.open_id
      } );
    }
    return await this.request( {
      url: payUrl,
      data: _data
    } );
  }

  // 支付宝签约代扣
  static async getOrderPrepare ( createRes ) {
    var _data = {
      _token: wepy.$instance.globalData.xToken,
      payment_channel: createRes.paymentChannel || paymentChannel,
      business_party: createRes.businessParty || businessParty,
      order_detail: createRes.order_detail,
      // order_detail: createRes.order_detail,
      extend_params: JSON.stringify( { 'return_url': 'http://www.in66.com', 'need_purchase': '0', 'from_mini_app': '1' } )
    };

    if ( createRes.open_id ) {
      _data.extend_params = JSON.stringify( {
        open_id: createRes.open_id
      } );
    }
    return await this.request( {
      url: payPrepareUrl,
      data: _data
    } );
  }
}
