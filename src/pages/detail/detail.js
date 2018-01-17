import wepy from 'wepy'
import Detail from '@/api/detail'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '活动页面'
  }
  components = {
  }

  mixins = []

  data = {
  }

  computed = {}

  methods = {
  }

  events = {
  }

  async onLoad() {
    console.log(Detail)
    await Detail.pay()
  }
}
