
import wepy from 'wepy';
export default class Sharemixins extends wepy.mixin {
  onLoad() {
    this.$wxapp.onShareAppMessage = this.$wxpage.onShareAppMessage = function(){
      return {
        title: '三个月杭州影院无限看',
        desc: '只需109元，三个月杭州15家影院电影无限看',
        path: 'pages/index/index',
        imageUrl: 'https://inimg07.jiuyan.info/in/2018/01/26/20A52317-E4EB-3657-E024-F2EF040B2E86.jpg'
      }
    }
  }
}