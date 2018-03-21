module.exports = {
  msg: '',
  code: '0',
  succ: true,
  data: {
    ticket_switch: true,  // true  出现弹窗  false  不出现弹窗
    ticket_desc: '电影票已领完',
    is_buy: '0',
    is_share: '0',
    rp_price: 10,
    fetch_ticket: true, // 是否进入电影票灰度测试
    share_user_info: {
      nick_name: '一休', // 分享人昵称
      avatar: 'http://xxx.jpg', // 头像
      is_owner: false // 是否为当前用户
    }, // 分享用户信息可能为空
    promotion_channel_price: '109.00', // 活动价,活动的优先级高于一切
    rp_deduction: [
        {d_price: 50, d_desc: '滴滴红包抵扣'},
        {d_price: 100, d_desc: '滴滴红包抵扣'}
    ],
    rp_notice: [,
      {
        img: 'http://xxxx.jpg'
      },
      {
        text: '你有一个'
      },
      {
        text: '50',
        style: 'color:red;'
      },
      {
        text: '的红包'
      }
    ],
    rp_bg_img: 'http://xxxx/xxx.jpg',
    leke_info: {
      leke_code: '9kslls', // 乐刻码
      bgs: [
        'http://xxxxx.jpg',
        'http://xxxxx.jpg'
      ] // 乐刻抽取王卡的图片
    } // 这个字段可能为空
  },
  timestamp: '1516865309'
};
