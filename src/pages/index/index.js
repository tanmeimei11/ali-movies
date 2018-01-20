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
    btnon: false,
    texts: {}
  }

  computed = {
  }

  methods = {
    toDetail () {
      if (!this.btnon) {
        return
      }
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
    this.btnon = InfoRes.cf_start === 'true' ? true : false
    this.$apply()
  }
}
