import wepy from 'wepy'
import Index from '@/api/index'

export default class index extends wepy.page {
    config = {
        navigationBarTitleText: '杭州电影戏精卡'
    }
    components = {
    }

    mixins = []

    data = {
        funding: [],
        texts: ''
    }

    computed = {
    }

    methods = {
        toDetail() {
            wepy.navigateTo({
              url: '/pages/detail/detail'
            })
        }
    }

    events = {
    }

    async onLoad() {
        // var InfoRes = await Index.getFundingInfo()
        // this.funding = Index.initFundingInfo(InfoRes)
        // this.$apply()
        // console.log(this.funding)
    }
}