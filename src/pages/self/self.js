import wepy from 'wepy'
import {rulesText} from './config'
import {request} from '@/utils/request'
import {formatTime} from '@/utils/common'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '我的'
  }
  components = {
  }

  data = {
    rulesText: rulesText, // 规则文案
    userInfo: {
      avatar: 'http://u1.jiuyan.info/in/2014/08/08/BBC53228-ADAF-436A-81A9-C3AB5A3B53D1.jpg?v=2',
      name: '31241324312412341324123',
      phone: ''
    },
    cardInfos: [{
      id: '',
      title: '戏精卡',
      desc: '可任意次数兑换观影券',
      time: '2018.03.01-2018.05.31',
      num: 'NO.123456789101515'
    }]
  }

  methods = {
    plus () {
      this.mynum++
    },
    toast () {
      let promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      })

      promise.then((d) => {
        console.log('toast done')
      })
    }
  }

  events = {
    'index-emit': (...args) => {
      let $event = args[args.length - 1]
      console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`)
    }
  }

  async onLoad() {
    await this.getMyInfo()
  }

  async getMyInfo() {
    var myInfoRes = await request({
      url: '/mnp/user/my'
    })

    if (myInfoRes.succ) {
      this.initCardInfo(myInfoRes.data.cards)
      this.initUserInfo(myInfoRes.data)
    }
  }

  // 初始化用户信息
  initUserInfo(data) {
    this.userInfo = {
      avatar: data.avatar,
      name: data.nick_name,
      phone: data.phone
    }
  }

  // 初始化卡片信息
  initCardInfo(cards) {
    this.cardInfos = cards.map((item) => {
      return {
        id: item.id,
        title: item.name,
        desc: item.desc,
        time: this.getCardTime(item.start_date, item.end_date),
        num: `NO.${item.card_no}`
      }
    })
  }

  // 时间戳转换成 年月日
  getCardTime(sTime, eTime) {
    return `${formatTime(sTime)}-${formatTime(eTime)}`
  }
}
