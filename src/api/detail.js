import wepy from 'wepy'
import auth from './auth'
import { isMock, DOMAIN, paymentChannel, businessParty, payUrl, token } from '@/utils/config'
import mockConfig from '@/mock/mockConfig'
import axios from '@/utils/axios'

export default class Detail {
  // 数据交互域名
  static async request (options) {
    // 域名添加
    !/^http/.test(options.url) && (options.url = DOMAIN + options.url)
    // mock
    if (isMock) {
      return require('../mock/' + mockConfig[options.url])
    }
    // 方法
    return await axios.request(options)
  }

  /**
   * 创建订单接口
   */
  static async creatOrder() {
    return await this.request({
      url: '/mnp/order/create',
      data: {
        product_id: 159,
        pay_channel: paymentChannel
      }
    })
  }

  /**
   * 获取订单信息接口
   * @param {*} createRes  创建订单的res
   */
  static async getOrderDetail(createRes) {
    var _data = {
      _token: wepy.$instance.globalData.xToken || token,
      payment_channel: paymentChannel,
      business_party: businessParty,
      order_detail: createRes.order_detail,
      extend_params: JSON.stringify({
        open_id: createRes.open_id
      })
    }
    return await this.request({
      url: payUrl,
      data: _data
    })
  }

  /**
   * 下单
   */
  static async pay () {
    await auth.ready()
    var createRes = await this.creatOrder()
    var getOrderRes = await this.getOrderDetail(createRes)
    var tradePayRes = await wepy.tradePay({
      orderStr: getOrderRes.sign  // 即上述服务端已经加签的orderSr参数
    })

    wepy.alert(tradePayRes.resultCode)
  }
}
