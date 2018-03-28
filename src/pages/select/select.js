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
    scrollX: 0
  }

  methods = {
  }

  async init (isBiz) {

    if (!this.query.schedule_id) {
      alert('该场次停止售票，请选择其他场次')
      history.back()
      return
    }

    try {
      var res = await Select.getSeatInfo({ schedule_id: this.query.schedule_id, is_biz: isBiz ? this.query.is_biz : '' })
      console.log(res)
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
      this.$apply()
      // this.$nextTick(this.dataReady)
    } catch (error) {
      console.log(error)
    }
  }
  async onLoad ( options ) {
    this.query = Object.assign( {}, options, wepy.$instance.globalData.query );
    this.$apply()
    await auth.ready();
    await this.init();
  }
}
