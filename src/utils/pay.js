import http from './axios'
import {payment_channel, business_party, payUrl} from './config'
import wepy from 'wepy'
var pay = async () => {
  var createRes = await http.request({
    url: '/mnp/order/create',
    data: {
      product_id: 159,
      pay_channel: payment_channel
    }
  })

  // 进行微信支付
  if (createRes.succ) {
    http.request({
      url: payUrl,
      data: {
        payment_channel: payment_channel,
        business_party: business_party,
        order_detail: createRes.data.order_detail,
        extend_params: JSON.stringify({
          open_id: createRes.data.open_id
        })
      }
    })
  }

  var tradePayRes = await wepy.tradePay({
    orderStr: 'myOrderStr'  // 即上述服务端已经加签的orderSr参数
  })

  wepy.alert(tradePayRes.resultCode)
}

module.exports = pay
