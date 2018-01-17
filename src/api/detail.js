import wepy from 'wepy'
import { isMock, DOMAIN, paymentChannel, businessParty, payUrl } from '@/utils/config'
import mockConfig from '@/mock/mockConfig'
import axios from '@/utils/axios'
import event from '@/utils/event'

console.log(paymentChannel)

const _readyStatus = new Promise(resolve => event.$on('ready', resolve))

export default class Detail {
  // 数据交互域名
  static async request (options) {
    // 域名添加
    !/^http/.test(options.url) && (options.url = DOMAIN + options.url)
    // mock 不走真是的request
    console.log(options.url)
    if (isMock) {
      console.log(require('../mock/' + mockConfig[options.url]))
      return require('../mock/' + mockConfig[options.url])
    }
    // 方法
    return await axios.request(options)
  }

  static ready () {
    return _readyStatus
  }

  /**
   * 创建订单
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
   * 获取订单信息
   * @param {*} createRes  创建订单的res
   */
  static async getOrderDetail(createRes) {
    console.log(createRes)
    return await this.request({
      url: payUrl,
      data: {
        payment_channel: 'newalipay',
        business_party: businessParty,
        order_detail: createRes.order_detail,
        extend_params: JSON.stringify({
          open_id: createRes.open_id
        })
      }
    })
  }

  /**
   * 下单接口
   */
  static async pay () {
    var createRes = await this.creatOrder()
    await this.getOrderDetail(createRes)
    var tradePayRes = await wepy.tradePay({
      orderStr: ''  // 即上述服务端已经加签的orderSr参数
    })

    wepy.alert(tradePayRes.resultCode)
  }
}
