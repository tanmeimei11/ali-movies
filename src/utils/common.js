const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
/**
 * 格式化时间戳
 * @param {*} date
 * @param {*} isShowWeek
 */
const formatTime = (_date, isShowWeek) => {
  var date = new Date(_date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()
  // const week = weekdays[date.getDay()]
  // if (isShowWeek) {
  //   return `${formatNumber(month)}月${formatNumber(day)}日 ${week} ${[hour, minute].map(formatNumber).join(':')}`
  // }
  return `${year}.${formatNumber(month)}.${formatNumber(day)} `
}
/**
 * 个位参数加0
 * @param {*} n
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime
}
