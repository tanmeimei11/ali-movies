import wepy from 'wepy'
import auth from '@/api/auth'
import Detail from '@/api/detail'
// import loadingMixin from '@/mixins/loadingMixin'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '活动页面'
  }
  components = {}
  mixins = []
  data = {}
  computed = {}
  methods = {
    async pay () {
      await this.pay()
    }
  }

  events = {
  }

  async onLoad() {
  }

  /**
   *  支付
   */
  async pay() {
    try {
      await auth.ready()
      var createRes = await Detail.creatOrder()
      var getOrderRes = await Detail.getOrderDetail(createRes)
      var tradePayRes = await wepy.tradePay({
        orderStr: getOrderRes.sign
      })

      // 支付成功
      if (tradePayRes.resultCode === '9000') {
        this.paySucc()
      } else {
        this.payFail()
      }
    } catch (e) {

    }
  }

  /**
   *  支付成功
   */
  paySucc() {
    wepy.redirectTo({
      url: '../result/result'
    })
  }
  payFail() {

  }
}
