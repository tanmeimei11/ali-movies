import wepy from 'wepy';
import Index from '@/api/index'

export default class index extends wepy.page {
  config = {
    navigationBarTitleText: '我的电影卡'
  }
  components = {
  }

  mixins = []

  data = {
    texts: {}
  }

  computed = {
  }

  methods = {
    toDetail () {
      wepy.navigateTo( {
        url: '/pages/detail/detail'
      } );
    }
  }

  events = {
  }

  async onLoad () {
    var InfoRes = await Index.getIndexInfo()
    this.texts = InfoRes
    this.$apply()
  }
}
