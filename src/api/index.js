import Pagebase from './page'
export default class Index extends Pagebase {
  /**
   * 获取我的信息接口
   */
  static async getFundingInfo() {
    return await this.request({
      url: '/mnp/product/cfStatus',
      data: {
        product_id: 159
      }
    })
  }

  /**
   * 初始化卡片信息
   * @param {*} funding  已经获得的卡片
   */
  static initFundingInfo(funding) {
    return funding.map((item) => {
      return {
        total_amount: item.total_amount,
        current_amount: item.current_amount,
        total_person_count: item.total_person_count,
        current_person_count: item.current_person_count,
        is_share: item.is_share
      }
    })
  }
}
