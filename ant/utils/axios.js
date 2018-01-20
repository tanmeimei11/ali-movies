'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tips = require('./tips.js');

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @define 字符串转为对象
 * @parame String
 * @return Object
 *
 * #for example:
 *  getUrlParams('https://www.domain.com?a=1&b=2&c=3')
 *  {a: "1", b: "2", c: "3"}
 */
function getQueryParams(str) {
  var result = {};
  var re = /([^&=]+)=([^&]*)/g;
  var m;

  while (m = re.exec(str)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

/**
 * 模仿 axios api 规范
 * https://github.com/axios/axios
 */

var http = function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
        var myres;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _tips2.default.loading();
                this._fixRequest(config); // 支付宝小程序特有
                _context.next = 4;
                return _wepy2.default.httpRequest(config);

              case 4:
                myres = _context.sent;

                _tips2.default.loaded();

                if (!this.isSuccess(myres)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', myres.data.data);

              case 10:
                console.error(Object.assign(config, myres));
                throw this.requestException(myres);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()

    /**
     * 判断请求是否成功
     */

  }, {
    key: 'isSuccess',
    value: function isSuccess(_ref2) {
      var status = _ref2.status,
          data = _ref2.data;

      // 微信请求错误
      if (status !== 200) {
        return false;
      }
      // 服务响应错误
      return !(data && parseInt(data.code) !== 0);
    }

    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(_ref3) {
      var status = _ref3.status,
          data = _ref3.data;

      var error = {};
      error.statusCode = status;
      var serverData = data.data;
      if (serverData) {
        error.serverCode = data.code;
        error.message = data.message;
        error.serverData = serverData;
      }
      return error;
    }
  }, {
    key: 'get',
    value: function get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      config['url'] = url;
      config['method'] = 'GET';

      return this.request(config);
    }
  }, {
    key: 'post',
    value: function post(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      config['url'] = url;
      config['method'] = 'POST';

      return this.request(config);
    }

    /**
     * 请求处理
     * fix bug: IDE url 连接符
     */

  }, {
    key: '_fixRequest',
    value: function _fixRequest(config) {
      var url = config.url,
          data = config.data,
          method = config.method;


      if (method === 'GET') {
        var index = url.indexOf('?');
        var params = {};

        if (index > 0) {
          url = url.substr(0, index);
          params = getQueryParams(url.substr(index + 1));
        }

        Object.assign(data, params); // merge to data
      }

      config['url'] = url;
      config['data'] = data;
    }
  }]);

  return http;
}();

exports.default = http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zLmpzIl0sIm5hbWVzIjpbImdldFF1ZXJ5UGFyYW1zIiwic3RyIiwicmVzdWx0IiwicmUiLCJtIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsImh0dHAiLCJjb25maWciLCJsb2FkaW5nIiwiX2ZpeFJlcXVlc3QiLCJodHRwUmVxdWVzdCIsIm15cmVzIiwibG9hZGVkIiwiaXNTdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIk9iamVjdCIsImFzc2lnbiIsInJlcXVlc3RFeGNlcHRpb24iLCJzdGF0dXMiLCJwYXJzZUludCIsImNvZGUiLCJzdGF0dXNDb2RlIiwic2VydmVyRGF0YSIsInNlcnZlckNvZGUiLCJtZXNzYWdlIiwidXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsImluZGV4IiwiaW5kZXhPZiIsInBhcmFtcyIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7QUFTQSxTQUFTQSxjQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUM1QixNQUFJQyxTQUFTLEVBQWI7QUFDQSxNQUFJQyxLQUFLLG1CQUFUO0FBQ0EsTUFBSUMsQ0FBSjs7QUFFQSxTQUFPQSxJQUFJRCxHQUFHRSxJQUFILENBQVFKLEdBQVIsQ0FBWCxFQUF5QjtBQUN2QkMsV0FBT0ksbUJBQW1CRixFQUFFLENBQUYsQ0FBbkIsQ0FBUCxJQUFtQ0UsbUJBQW1CRixFQUFFLENBQUYsQ0FBbkIsQ0FBbkM7QUFDRDs7QUFFRCxTQUFPRixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0lBSXFCSyxJOzs7Ozs7OzswRkFDR0MsTTs7Ozs7O0FBQ3BCLCtCQUFLQyxPQUFMO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUJGLE1BQWpCLEUsQ0FBeUI7O3VCQUNMLGVBQUtHLFdBQUwsQ0FBaUJILE1BQWpCLEM7OztBQUFkSSxxQjs7QUFDTiwrQkFBS0MsTUFBTDs7cUJBQ0ksS0FBS0MsU0FBTCxDQUFlRixLQUFmLEM7Ozs7O2lEQUNLQSxNQUFNRyxJQUFOLENBQVdBLEk7OztBQUVsQkMsd0JBQVFDLEtBQVIsQ0FBY0MsT0FBT0MsTUFBUCxDQUFjWCxNQUFkLEVBQXNCSSxLQUF0QixDQUFkO3NCQUNNLEtBQUtRLGdCQUFMLENBQXNCUixLQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlWOzs7Ozs7cUNBR21DO0FBQUEsVUFBaEJTLE1BQWdCLFNBQWhCQSxNQUFnQjtBQUFBLFVBQVJOLElBQVEsU0FBUkEsSUFBUTs7QUFDakM7QUFDQSxVQUFJTSxXQUFXLEdBQWYsRUFBb0I7QUFDbEIsZUFBTyxLQUFQO0FBQ0Q7QUFDRDtBQUNBLGFBQU8sRUFBRU4sUUFBUU8sU0FBU1AsS0FBS1EsSUFBZCxNQUF3QixDQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs0Q0FHMEM7QUFBQSxVQUFoQkYsTUFBZ0IsU0FBaEJBLE1BQWdCO0FBQUEsVUFBUk4sSUFBUSxTQUFSQSxJQUFROztBQUN4QyxVQUFNRSxRQUFRLEVBQWQ7QUFDQUEsWUFBTU8sVUFBTixHQUFtQkgsTUFBbkI7QUFDQSxVQUFNSSxhQUFhVixLQUFLQSxJQUF4QjtBQUNBLFVBQUlVLFVBQUosRUFBZ0I7QUFDZFIsY0FBTVMsVUFBTixHQUFtQlgsS0FBS1EsSUFBeEI7QUFDQU4sY0FBTVUsT0FBTixHQUFnQlosS0FBS1ksT0FBckI7QUFDQVYsY0FBTVEsVUFBTixHQUFtQkEsVUFBbkI7QUFDRDtBQUNELGFBQU9SLEtBQVA7QUFDRDs7O3dCQUVXVyxHLEVBQWtCO0FBQUEsVUFBYnBCLE1BQWEsdUVBQUosRUFBSTs7QUFDNUJBLGFBQU8sS0FBUCxJQUFnQm9CLEdBQWhCO0FBQ0FwQixhQUFPLFFBQVAsSUFBbUIsS0FBbkI7O0FBRUEsYUFBTyxLQUFLcUIsT0FBTCxDQUFhckIsTUFBYixDQUFQO0FBQ0Q7Ozt5QkFFWW9CLEcsRUFBa0I7QUFBQSxVQUFicEIsTUFBYSx1RUFBSixFQUFJOztBQUM3QkEsYUFBTyxLQUFQLElBQWdCb0IsR0FBaEI7QUFDQXBCLGFBQU8sUUFBUCxJQUFtQixNQUFuQjs7QUFFQSxhQUFPLEtBQUtxQixPQUFMLENBQWFyQixNQUFiLENBQVA7QUFDRDs7QUFFRDs7Ozs7OztnQ0FJb0JBLE0sRUFBUTtBQUFBLFVBQ3BCb0IsR0FEb0IsR0FDRXBCLE1BREYsQ0FDcEJvQixHQURvQjtBQUFBLFVBQ2ZiLElBRGUsR0FDRVAsTUFERixDQUNmTyxJQURlO0FBQUEsVUFDVGUsTUFEUyxHQUNFdEIsTUFERixDQUNUc0IsTUFEUzs7O0FBRzFCLFVBQUlBLFdBQVcsS0FBZixFQUFzQjtBQUNwQixZQUFJQyxRQUFRSCxJQUFJSSxPQUFKLENBQVksR0FBWixDQUFaO0FBQ0EsWUFBSUMsU0FBUyxFQUFiOztBQUVBLFlBQUlGLFFBQVEsQ0FBWixFQUFlO0FBQ2JILGdCQUFNQSxJQUFJTSxNQUFKLENBQVcsQ0FBWCxFQUFjSCxLQUFkLENBQU47QUFDQUUsbUJBQVNqQyxlQUFlNEIsSUFBSU0sTUFBSixDQUFXSCxRQUFRLENBQW5CLENBQWYsQ0FBVDtBQUNEOztBQUVEYixlQUFPQyxNQUFQLENBQWNKLElBQWQsRUFBb0JrQixNQUFwQixFQVRvQixDQVNRO0FBQzdCOztBQUVEekIsYUFBTyxLQUFQLElBQWdCb0IsR0FBaEI7QUFDQXBCLGFBQU8sTUFBUCxJQUFpQk8sSUFBakI7QUFDRDs7Ozs7O2tCQTVFa0JSLEkiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRpcHMgZnJvbSAnLi90aXBzJ1xuXG4vKipcbiAqIEBkZWZpbmUg5a2X56ym5Liy6L2s5Li65a+56LGhXG4gKiBAcGFyYW1lIFN0cmluZ1xuICogQHJldHVybiBPYmplY3RcbiAqXG4gKiAjZm9yIGV4YW1wbGU6XG4gKiAgZ2V0VXJsUGFyYW1zKCdodHRwczovL3d3dy5kb21haW4uY29tP2E9MSZiPTImYz0zJylcbiAqICB7YTogXCIxXCIsIGI6IFwiMlwiLCBjOiBcIjNcIn1cbiAqL1xuZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbXMgKHN0cikge1xuICB2YXIgcmVzdWx0ID0ge31cbiAgdmFyIHJlID0gLyhbXiY9XSspPShbXiZdKikvZ1xuICB2YXIgbVxuXG4gIHdoaWxlIChtID0gcmUuZXhlYyhzdHIpKSB7XG4gICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQobVsyXSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiDmqKHku78gYXhpb3MgYXBpIOinhOiMg1xuICogaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGh0dHAge1xuICBzdGF0aWMgYXN5bmMgcmVxdWVzdCAoY29uZmlnKSB7XG4gICAgdGlwcy5sb2FkaW5nKClcbiAgICB0aGlzLl9maXhSZXF1ZXN0KGNvbmZpZykgLy8g5pSv5LuY5a6d5bCP56iL5bqP54m55pyJXG4gICAgY29uc3QgbXlyZXMgPSBhd2FpdCB3ZXB5Lmh0dHBSZXF1ZXN0KGNvbmZpZylcbiAgICB0aXBzLmxvYWRlZCgpXG4gICAgaWYgKHRoaXMuaXNTdWNjZXNzKG15cmVzKSkge1xuICAgICAgcmV0dXJuIG15cmVzLmRhdGEuZGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKE9iamVjdC5hc3NpZ24oY29uZmlnLCBteXJlcykpXG4gICAgICB0aHJvdyB0aGlzLnJlcXVlc3RFeGNlcHRpb24obXlyZXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreivt+axguaYr+WQpuaIkOWKn1xuICAgKi9cbiAgc3RhdGljIGlzU3VjY2Vzcyh7IHN0YXR1cywgZGF0YSB9KSB7XG4gICAgLy8g5b6u5L+h6K+35rGC6ZSZ6K+vXG4gICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8g5pyN5Yqh5ZON5bqU6ZSZ6K+vXG4gICAgcmV0dXJuICEoZGF0YSAmJiBwYXJzZUludChkYXRhLmNvZGUpICE9PSAwKVxuICB9XG5cbiAgLyoqXG4gICAqIOW8guW4uFxuICAgKi9cbiAgc3RhdGljIHJlcXVlc3RFeGNlcHRpb24oeyBzdGF0dXMsIGRhdGEgfSkge1xuICAgIGNvbnN0IGVycm9yID0ge31cbiAgICBlcnJvci5zdGF0dXNDb2RlID0gc3RhdHVzXG4gICAgY29uc3Qgc2VydmVyRGF0YSA9IGRhdGEuZGF0YVxuICAgIGlmIChzZXJ2ZXJEYXRhKSB7XG4gICAgICBlcnJvci5zZXJ2ZXJDb2RlID0gZGF0YS5jb2RlXG4gICAgICBlcnJvci5tZXNzYWdlID0gZGF0YS5tZXNzYWdlXG4gICAgICBlcnJvci5zZXJ2ZXJEYXRhID0gc2VydmVyRGF0YVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIHN0YXRpYyBnZXQgKHVybCwgY29uZmlnID0ge30pIHtcbiAgICBjb25maWdbJ3VybCddID0gdXJsXG4gICAgY29uZmlnWydtZXRob2QnXSA9ICdHRVQnXG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KGNvbmZpZylcbiAgfVxuXG4gIHN0YXRpYyBwb3N0ICh1cmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgY29uZmlnWyd1cmwnXSA9IHVybFxuICAgIGNvbmZpZ1snbWV0aG9kJ10gPSAnUE9TVCdcblxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIOivt+axguWkhOeQhlxuICAgKiBmaXggYnVnOiBJREUgdXJsIOi/nuaOpeesplxuICAgKi9cbiAgc3RhdGljIF9maXhSZXF1ZXN0IChjb25maWcpIHtcbiAgICB2YXIgeyB1cmwsIGRhdGEsIG1ldGhvZCB9ID0gY29uZmlnXG5cbiAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgdmFyIGluZGV4ID0gdXJsLmluZGV4T2YoJz8nKVxuICAgICAgdmFyIHBhcmFtcyA9IHt9XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCBpbmRleClcbiAgICAgICAgcGFyYW1zID0gZ2V0UXVlcnlQYXJhbXModXJsLnN1YnN0cihpbmRleCArIDEpKVxuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHBhcmFtcykgLy8gbWVyZ2UgdG8gZGF0YVxuICAgIH1cblxuICAgIGNvbmZpZ1sndXJsJ10gPSB1cmxcbiAgICBjb25maWdbJ2RhdGEnXSA9IGRhdGFcbiAgfVxufVxuIl19