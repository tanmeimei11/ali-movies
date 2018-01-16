import wepy from 'wepy'
import pay from '@/utils/pay.js'
import {rulesText} from './config'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '我的'
  }
  components = {
  }

  data = {
    rulesText: rulesText
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
    // var m = await pay()
    // console.log(m)
    await this.slesp()
  }
  async slesp (params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  }
}
