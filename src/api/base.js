import wepy from 'wepy'
import axios from '@/utils/axios'
import event from '@/utils/event'

const _readyStatus = new Promise(resolve => event.$on('ready', resolve))

export default class base {
  // 数据交互域名
  static baseUrl = 'http://qacrowdfunding.in66.com'
  // 上传资源域名
  static uploadUrl = 'https://upload.qiniup.com/'
  // 资源存储域名
  static assetsUrl = 'https://static.in66.co/'

  static get = axios.get.bind(axios)
  static post = axios.post.bind(axios)

  static ready () {
    return _readyStatus
  }

  /**
   * upload
   * 上传图片，最大上传量9张（微信限制）
   * @param {array} files
   * @retuen urlArray
   */
  static async upload (files, isParallel = true) {
    const qiniu = await this.get(`${this.baseUrl}/qiniu-tokens`, { data: { count: files.length } })
    const promises = files.map(async (filePath, index) => await wepy.uploadFile({ url: this.uploadUrl, name: 'file', filePath, formData: { token: qiniu.token, key: qiniu.key[index] } }).then(({ statusCode, data }) => statusCode === 200 ? JSON.parse(data) : new Error(`捕获上传文件异常 at ${this.uploadUrl} statusCode: ${statusCode}`)))
    const urls = []

    // 并发上传
    for (let promise of promises) {
      urls.push(this.assetsUrl + (await promise)['key'])
    }

    // 继发
    // for (let [index, filePath] of files.entries()) {
    //   const response = await axios.upload(filePath, qiniu.token, qiniu.keys[index])
    // }

    return urls
  }
}
