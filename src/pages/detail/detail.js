import wepy from 'wepy'
import auth from '@/api/auth'
import Detail from '@/api/detail'
import report from '@/components/report-submit'
// import loadingMixin from '@/mixins/loadingMixin'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '活动页面'
  }
  components = { report }
  mixins = []
  data = {
    cardNumInfo: {
      title: '专享优惠 名额有限',
      desc: '为保障用户观影体验 限量发售五万张',
      num: '122/12321'
    },
    cinemas: [
      {
        address: '',
        addressImg: '',
        gps: '',
        name: ''
      }
    ],
    movies: [
      { name: '',
        URL: ''
      }
    ]
  }
  computed = {}
  methods = {
    async pay () {
      await this.pay()
    },

    formSubmit (e) {
      console.log(e)
    }
  }

  events = {}

  async onLoad() {
    var res = await Detail.getDetailData()
    this.cinemas = Detail.initCinemas(res.cinemas)
    this.movies = Detail.initMovies(res.movies)
    this.$apply()
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
    var pageRouter = getCurrentPages()
    pageRouter.map(item => {
      if (item.route === 'pages/self/self' || item.route === 'pages/detail/detail') {
        item.init()
      }
    })
    wepy.redirectTo({
      url: '../result/result'
    })
  }
  payFail() {

  }
}
