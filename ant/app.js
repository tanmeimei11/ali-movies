'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./utils/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 支付宝小程序 ES next 语法转换: async await
// import 'wepy-async-function'

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 修复小程序请求并发问题。
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.globalData = {
      /** 收集微信机型数据 */
      AntApp: '',
      /** 用户唯一标识符 */
      xToken: null,
      /** 设备失效期 */
      xAries: null
    };
    _this.config = {
      pages: ['pages/index/index', 'pages/self/self', 'pages/detail/detail', 'pages/seat/seat', 'pages/result/result'],
      tabBar: {
        'textColor': '#4A4A4A',
        'selectedColor': '#D0A661',
        'backgroundColor': '#F5F5F9',
        items: [{
          'pagePath': 'pages/index/index',
          'icon': 'image/icon_index.png',
          'activeIcon': 'image/icon_index_on.png',
          'name': '首页'
        }, {
          'pagePath': 'pages/seat/seat',
          'icon': 'image/icon_seat.png',
          'activeIcon': 'image/icon_seat_on.png',
          'name': '选座'
        }, {
          'pagePath': 'pages/self/self',
          'icon': 'image/icon_self.png',
          'activeIcon': 'image/icon_self_on.png',
          'name': '我的'
        }]
      }
    };
    _this.use('requestfix');
    // 使用wepy.xxx的方式请求小程序原生API都将Promise化。
    _this.use('promisify');

    _this.intercept('httpRequest', {
      config: function config(p) {
        p.headers = this.createAuthHeader();
        p.data = p.data || {};
        p.data['privateKey'] = this.globalData.xToken || _config.token;
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
        var _wepy$getSystemInfoSy, model, platform, version, system, SDKVersion, meta;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 渠道埋点
                this.globalData.from = opts.qrcode_from || '';
                /**
                 * try
                 *   收集微信机型数据
                 * catch|finally
                 *   none 不提供机型标识信息
                 */
                try {
                  _wepy$getSystemInfoSy = _wepy2.default.getSystemInfoSync(), model = _wepy$getSystemInfoSy.model, platform = _wepy$getSystemInfoSy.platform, version = _wepy$getSystemInfoSy.version, system = _wepy$getSystemInfoSy.system, SDKVersion = _wepy$getSystemInfoSy.SDKVersion;
                  meta = { model: model, platform: platform, version: version, system: system, SDKVersion: SDKVersion };

                  this.globalData.AntApp = Object.keys(meta).map(function (key) {
                    return key + '=' + meta[key];
                  }).join(';');
                } finally {/* none */}

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch(_x) {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()

    /**
     * 构造权限头部
     */

  }, {
    key: 'createAuthHeader',
    value: function createAuthHeader() {
      var _globalData = this.globalData,
          AntApp = _globalData.AntApp,
          xToken = _globalData.xToken,
          xAries = _globalData.xAries,
          from = _globalData.from;

      var headers = { 'AntApp': AntApp };
      console.log(xToken);
      if (xToken) {
        headers['tg_auth'] = xToken;
        headers['_aries'] = xAries;
      }

      if (from) {
        headers['from'] = from;
      }

      return headers;
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy-ant/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwiQW50QXBwIiwieFRva2VuIiwieEFyaWVzIiwiY29uZmlnIiwicGFnZXMiLCJ0YWJCYXIiLCJpdGVtcyIsInVzZSIsImludGVyY2VwdCIsInAiLCJoZWFkZXJzIiwiY3JlYXRlQXV0aEhlYWRlciIsImRhdGEiLCJvcHRzIiwiZnJvbSIsInFyY29kZV9mcm9tIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtb2RlbCIsInBsYXRmb3JtIiwidmVyc2lvbiIsInN5c3RlbSIsIlNES1ZlcnNpb24iLCJtZXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7OztBQUdFLHNCQUFlO0FBQUE7O0FBRWI7QUFGYTs7QUFBQSxVQW9EZkEsVUFwRGUsR0FvREY7QUFDWDtBQUNBQyxjQUFRLEVBRkc7QUFHWDtBQUNBQyxjQUFRLElBSkc7QUFLWDtBQUNBQyxjQUFRO0FBTkcsS0FwREU7QUFBQSxVQTZEZkMsTUE3RGUsR0E2RE47QUFDUEMsYUFBTyxDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUF3QyxxQkFBeEMsRUFBOEQsaUJBQTlELEVBQWlGLHFCQUFqRixDQURBO0FBRVBDLGNBQVE7QUFDTixxQkFBYSxTQURQO0FBRU4seUJBQWlCLFNBRlg7QUFHTiwyQkFBbUIsU0FIYjtBQUlOQyxlQUFPLENBQUM7QUFDTixzQkFBWSxtQkFETjtBQUVOLGtCQUFRLHNCQUZGO0FBR04sd0JBQWMseUJBSFI7QUFJTixrQkFBUTtBQUpGLFNBQUQsRUFLSjtBQUNELHNCQUFZLGlCQURYO0FBRUQsa0JBQVEscUJBRlA7QUFHRCx3QkFBYyx3QkFIYjtBQUlELGtCQUFRO0FBSlAsU0FMSSxFQVVKO0FBQ0Qsc0JBQVksaUJBRFg7QUFFRCxrQkFBUSxxQkFGUDtBQUdELHdCQUFjLHdCQUhiO0FBSUQsa0JBQVE7QUFKUCxTQVZJO0FBSkQ7QUFGRCxLQTdETTtBQUdiLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDs7QUFFQSxVQUFLQyxTQUFMLENBQWUsYUFBZixFQUE4QjtBQUM1QkwsWUFENEIsa0JBQ3BCTSxDQURvQixFQUNqQjtBQUNUQSxVQUFFQyxPQUFGLEdBQVksS0FBS0MsZ0JBQUwsRUFBWjtBQUNBRixVQUFFRyxJQUFGLEdBQVNILEVBQUVHLElBQUYsSUFBVSxFQUFuQjtBQUNBSCxVQUFFRyxJQUFGLENBQU8sWUFBUCxJQUF1QixLQUFLYixVQUFMLENBQWdCRSxNQUFoQixpQkFBdkI7QUFDQSxlQUFPUSxDQUFQO0FBQ0Q7QUFOMkIsS0FBOUI7QUFQYTtBQWVkOzs7OzswRkFFY0ksSTs7Ozs7OztBQUNiO0FBQ0EscUJBQUtkLFVBQUwsQ0FBZ0JlLElBQWhCLEdBQXVCRCxLQUFLRSxXQUFMLElBQW9CLEVBQTNDO0FBQ0E7Ozs7OztBQU1BLG9CQUFJO0FBQUEsMENBQ3VELGVBQUtDLGlCQUFMLEVBRHZELEVBQ01DLEtBRE4seUJBQ01BLEtBRE4sRUFDYUMsUUFEYix5QkFDYUEsUUFEYixFQUN1QkMsT0FEdkIseUJBQ3VCQSxPQUR2QixFQUNnQ0MsTUFEaEMseUJBQ2dDQSxNQURoQyxFQUN3Q0MsVUFEeEMseUJBQ3dDQSxVQUR4QztBQUVJQyxzQkFGSixHQUVXLEVBQUVMLFlBQUYsRUFBU0Msa0JBQVQsRUFBbUJDLGdCQUFuQixFQUE0QkMsY0FBNUIsRUFBb0NDLHNCQUFwQyxFQUZYOztBQUdGLHVCQUFLdEIsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJ1QixPQUFPQyxJQUFQLENBQVlGLElBQVosRUFBa0JHLEdBQWxCLENBQXNCO0FBQUEsMkJBQVVDLEdBQVYsU0FBaUJKLEtBQUtJLEdBQUwsQ0FBakI7QUFBQSxtQkFBdEIsRUFBb0RDLElBQXBELENBQXlELEdBQXpELENBQXpCO0FBQ0QsaUJBSkQsU0FJVSxDQUFFLFVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCOzs7Ozs7dUNBR21CO0FBQUEsd0JBQ3dCLEtBQUs1QixVQUQ3QjtBQUFBLFVBQ1RDLE1BRFMsZUFDVEEsTUFEUztBQUFBLFVBQ0RDLE1BREMsZUFDREEsTUFEQztBQUFBLFVBQ09DLE1BRFAsZUFDT0EsTUFEUDtBQUFBLFVBQ2VZLElBRGYsZUFDZUEsSUFEZjs7QUFFakIsVUFBTUosVUFBVSxFQUFFLFVBQVVWLE1BQVosRUFBaEI7QUFDQTRCLGNBQVFDLEdBQVIsQ0FBWTVCLE1BQVo7QUFDQSxVQUFJQSxNQUFKLEVBQVk7QUFDVlMsZ0JBQVEsU0FBUixJQUFxQlQsTUFBckI7QUFDQVMsZ0JBQVEsUUFBUixJQUFvQlIsTUFBcEI7QUFDRDs7QUFFRCxVQUFJWSxJQUFKLEVBQVU7QUFDUkosZ0JBQVEsTUFBUixJQUFrQkksSUFBbEI7QUFDRDs7QUFFRCxhQUFPSixPQUFQO0FBQ0Q7Ozs7RUFuRDBCLGVBQUtvQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IHRva2VuIH0gZnJvbSAnLi91dGlscy9jb25maWcuanMnXG4vLyDmlK/ku5jlrp3lsI/nqIvluo8gRVMgbmV4dCDor63ms5XovazmjaI6IGFzeW5jIGF3YWl0XG4vLyBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOS/ruWkjeWwj+eoi+W6j+ivt+axguW5tuWPkemXrumimOOAglxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvLyDkvb/nlKh3ZXB5Lnh4eOeahOaWueW8j+ivt+axguWwj+eoi+W6j+WOn+eUn0FQSemDveWwhlByb21pc2XljJbjgIJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcblxuICAgIHRoaXMuaW50ZXJjZXB0KCdodHRwUmVxdWVzdCcsIHtcbiAgICAgIGNvbmZpZyAocCkge1xuICAgICAgICBwLmhlYWRlcnMgPSB0aGlzLmNyZWF0ZUF1dGhIZWFkZXIoKVxuICAgICAgICBwLmRhdGEgPSBwLmRhdGEgfHwge31cbiAgICAgICAgcC5kYXRhWydwcml2YXRlS2V5J10gPSB0aGlzLmdsb2JhbERhdGEueFRva2VuIHx8IHRva2VuXG4gICAgICAgIHJldHVybiBwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTGF1bmNoKG9wdHMpIHtcbiAgICAvLyDmuKDpgZPln4vngrlcbiAgICB0aGlzLmdsb2JhbERhdGEuZnJvbSA9IG9wdHMucXJjb2RlX2Zyb20gfHwgJydcbiAgICAvKipcbiAgICAgKiB0cnlcbiAgICAgKiAgIOaUtumbhuW+ruS/oeacuuWei+aVsOaNrlxuICAgICAqIGNhdGNofGZpbmFsbHlcbiAgICAgKiAgIG5vbmUg5LiN5o+Q5L6b5py65Z6L5qCH6K+G5L+h5oGvXG4gICAgICovXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbW9kZWwsIHBsYXRmb3JtLCB2ZXJzaW9uLCBzeXN0ZW0sIFNES1ZlcnNpb24gfSA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgICAgY29uc3QgbWV0YSA9IHsgbW9kZWwsIHBsYXRmb3JtLCB2ZXJzaW9uLCBzeXN0ZW0sIFNES1ZlcnNpb24gfVxuICAgICAgdGhpcy5nbG9iYWxEYXRhLkFudEFwcCA9IE9iamVjdC5rZXlzKG1ldGEpLm1hcChrZXkgPT4gYCR7a2V5fT0ke21ldGFba2V5XX1gKS5qb2luKCc7JylcbiAgICB9IGZpbmFsbHkgeyAvKiBub25lICovIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmnoTpgKDmnYPpmZDlpLTpg6hcbiAgICovXG4gIGNyZWF0ZUF1dGhIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBBbnRBcHAsIHhUb2tlbiwgeEFyaWVzLCBmcm9tIH0gPSB0aGlzLmdsb2JhbERhdGFcbiAgICBjb25zdCBoZWFkZXJzID0geyAnQW50QXBwJzogQW50QXBwIH1cbiAgICBjb25zb2xlLmxvZyh4VG9rZW4pXG4gICAgaWYgKHhUb2tlbikge1xuICAgICAgaGVhZGVyc1sndGdfYXV0aCddID0geFRva2VuXG4gICAgICBoZWFkZXJzWydfYXJpZXMnXSA9IHhBcmllc1xuICAgIH1cblxuICAgIGlmIChmcm9tKSB7XG4gICAgICBoZWFkZXJzWydmcm9tJ10gPSBmcm9tXG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgLyoqIOaUtumbhuW+ruS/oeacuuWei+aVsOaNriAqL1xuICAgIEFudEFwcDogJycsXG4gICAgLyoqIOeUqOaIt+WUr+S4gOagh+ivhuespiAqL1xuICAgIHhUb2tlbjogbnVsbCxcbiAgICAvKiog6K6+5aSH5aSx5pWI5pyfICovXG4gICAgeEFyaWVzOiBudWxsXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgvaW5kZXgnLCAncGFnZXMvc2VsZi9zZWxmJywncGFnZXMvZGV0YWlsL2RldGFpbCcsJ3BhZ2VzL3NlYXQvc2VhdCcsICdwYWdlcy9yZXN1bHQvcmVzdWx0J10sXG4gICAgdGFiQmFyOiB7XG4gICAgICAndGV4dENvbG9yJzogJyM0QTRBNEEnLFxuICAgICAgJ3NlbGVjdGVkQ29sb3InOiAnI0QwQTY2MScsXG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogJyNGNUY1RjknLFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICdpY29uJzogJ2ltYWdlL2ljb25faW5kZXgucG5nJyxcbiAgICAgICAgJ2FjdGl2ZUljb24nOiAnaW1hZ2UvaWNvbl9pbmRleF9vbi5wbmcnLFxuICAgICAgICAnbmFtZSc6ICfpppbpobUnXG4gICAgICB9LCB7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9zZWF0L3NlYXQnLFxuICAgICAgICAnaWNvbic6ICdpbWFnZS9pY29uX3NlYXQucG5nJyxcbiAgICAgICAgJ2FjdGl2ZUljb24nOiAnaW1hZ2UvaWNvbl9zZWF0X29uLnBuZycsXG4gICAgICAgICduYW1lJzogJ+mAieW6pydcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL3NlbGYvc2VsZicsXG4gICAgICAgICdpY29uJzogJ2ltYWdlL2ljb25fc2VsZi5wbmcnLFxuICAgICAgICAnYWN0aXZlSWNvbic6ICdpbWFnZS9pY29uX3NlbGZfb24ucG5nJyxcbiAgICAgICAgJ25hbWUnOiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==