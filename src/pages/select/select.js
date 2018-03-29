import wepy from 'wepy';
import auth from '@/api/auth';
import Select from '@/api/select';
import tips from '@/utils/tips';
import report from '@/components/report-submit';
import track from '@/utils/track';

/**
 * 一维数据变二维数据
 * 情侣座分左 右
 * [[], [], []...]
 * flag: 1 为左侧 2 为右侧。规则来自淘宝电影
 */
function formatList (list) {
  let rst = []
  let i = 0
  let j = 0  // 记录左右, 累加
  let length = list.length

  for (; i < length; i++) {
    let itm = list[i]
    let row = Number(itm.placeholder_row_id) - 1
    let col = Number(itm.placeholder_col_id) - 1

    if (Number(itm.seat_type) === 1) itm.flag = (j++ % 2) + 1
    if (rst[row] === undefined) rst[row] = []

    rst[row][col] = itm
  }

  return rst
}

export default class ticket extends wepy.page {
  config = {
    navigationBarTitleText: '选座'
  }
  data = {
    wrapperWidth: '',
    query: {},
    is_biz: false,
    schedule_id: 0, // 排片id
    checking: false,
    movie_name: '',
    total_seat_count: '',
    choosed_seat_count: 0,
    movie_detail: '',
    row_list: [],   // 座位排数据
    seat_list: [],  // 座位数据
    selected: [],   // 选中座位，数组类型，便于扩展
    maxSeat: 2,     // 权限，现不开放多人选座
    bindingUserData: null,

    submitLoading: false,
    modal: {
      title: '',
      content: '',
      confirmText: '',
      show: false,
      redirect: ''
    },
    confirm: {
      show: false
    },
    scrollX: 0,
    selectIndex: function(rowIndex,colIndex){
      return 'selected'
    }
  }

  computed = {
    selectList () {
      if (this.selected.length === 0) return []

      let rst = []

      this.selected.forEach(value => {
        let coord = value.split(',')
        let itm = this.seat_list[coord[0]][coord[1]]
        rst.push(`${itm.row_num}排${itm.col_num}座`)
      })

      return rst
    }
  }

  showModal ({ title, content, confirmText, redirect }) {
    this.modal.title = title
    this.modal.content = content
    this.modal.confirmText = confirmText
    this.modal.redirect = redirect
    this.modal.show = true
    this.$apply()
  }

  methods = {
    hideModal (ok) {
      if (ok === true) {
        if (this.modal.redirect) {
          wepy.navigateTo( {
            url: this.modal.redirect
          } );
        }
      }
      this.modal.show = false
      this.confirm.show = false
      this.modal.redirect = ''
    },
    /**
     * 提交座位信息
     */
    preSubmit () {
      this.confirm.show = true
      track('seat_page_confirm_expo')
    },
    async submit () {
      if (this.submitLoading) return
      track('seat_page_comfirm')
      this.submitLoading = true

      let seatIds = []

      this.selected.forEach(value => {
        let coord = value.split(',')
        let itm = this.seat_list[coord[0]][coord[1]]
        seatIds.push(itm.id)
      })

      try {
        var res = await Select.submitSeat({ schedule_id: this.schedule_id, seat_id: seatIds.join(',') })
        // console.log(succ, data, msg, code)
        this.confirm.show = false
        this.$apply()
        if (!res.result.is_succ) return this.showModal({ title: res.result.title, content: res.result.message, confirmText: res.result.button_desc, redirect: res.result.redirect_url })
        // 抢座成功 data.result.movie_ticket_id
        wepy.navigateTo( {
          url: '/pages/ticketDetail/ticketDetail?id=' + res.result.movie_ticket_id
        } );
      } catch (error) {
        console.log(error)
      } finally {
        this.submitLoading = false
        this.$apply()
      }
    },
    goBindingPage () {
      // track('seat_page_binding')
      // setTimeout(() => {
      //   location.href = 'binding.html?sharebtnhidden=1'
      // }, 100)
    },
    /**
     * 选择座位
     */
    select (e) {
      let colIndex = e.currentTarget.dataset.col
      let rowIndex = e.currentTarget.dataset.row
      let status = e.currentTarget.dataset.status

      if (status != '1') return
      let value = `${rowIndex},${colIndex}`
      let index = this.selected.indexOf(value)

      if (index === -1) {
        if (this.selected.length < this.maxSeat) {
          this.selected.push(value)
        } else {
          tips.error(`一次最多选择${this.maxSeat}个座位`)
        }
      } else {
        this.selected.splice(index, 1)
      }
      this.$apply()
      console.log(this.selected)
    },
  }

  async init (isBiz) {

    if (!this.query.schedule_id) {
      alert('该场次停止售票，请选择其他场次')
      // history.back()
      return
    }

    try {
      var res = await Select.getSeatInfo({ schedule_id: this.query.schedule_id, is_biz: isBiz ? this.query.is_biz : '' })
      this.schedule_id = this.query.schedule_id
      this.movie_name = res.movie_name
      this.movie_detail = res.movie_detail
      this.total_seat_count = res.total_seat_count
      this.choosed_seat_count = res.choosed_seat_count
      this.maxSeat = +res.selectable_count || 1 // 可选座位数量
      this.bindingUserData = res.selectable_another_one
      this.seat_list = formatList(res.seat_list)
      this.row_list = this.seat_list.map(rows => {
        for (let i = 0, len = rows.length; i < len; i++) {
          let seq = rows[i].row_num
          if (seq) {
            return seq
          }
        }
      })
      let maxRow = 0  // 最大行数
      let maxCol = 0  // 最大列数

      this.seat_list.forEach((rows, rowIndex) => {
        maxRow = Math.max(rowIndex + 1, maxRow)
        maxCol = Math.max(rows.length, maxCol)
      })
      this.wrapperWidth = `${(maxCol * (50 + 5 * 2) + 70 * 2)/100}rem`
      this.$apply()
      // this.$nextTick(this.dataReady)
    } catch (error) {
      console.log(error)
    }
  }
  async onLoad ( options ) {
    this.query = Object.assign( {}, options, wepy.$instance.globalData.query );
    this.$apply()
    console.log(this)
    await auth.ready();
    await this.init();
  }
}
