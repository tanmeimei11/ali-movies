'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

var _tips = require('./../utils/tips.js');

var _tips2 = _interopRequireDefault(_tips);

var _event = require('./../utils/event.js');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _readyStatus = false;

_event2.default.$on('ready', function (status) {
  _readyStatus = status;
});

var auth = function (_base) {
  _inherits(auth, _base);

  function auth() {
    _classCallCheck(this, auth);

    return _possibleConstructorReturn(this, (auth.__proto__ || Object.getPrototypeOf(auth)).apply(this, arguments));
  }

  _createClass(auth, null, [{
    key: 'ready',

    /**
     * 授权登录准备
     * 授权弹窗如果取消 PromiseStatus:pending
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_readyStatus) {
                  _context.next = 4;
                  break;
                }

                _context.t0 = Promise.resolve();
                _context.next = 7;
                break;

              case 4:
                _context.next = 6;
                return this.login();

              case 6:
                _context.t0 = _context.sent;

              case 7:
                return _context.abrupt('return', _context.t0);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ready() {
        return _ref.apply(this, arguments);
      }

      return ready;
    }()

    /**
     * 授权登录
     * 授权弹窗如果取消 PromiseStatus:pending
     */

  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref3, code, _ref4, token, _aries;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _tips2.default.setLoading();
                _context2.next = 3;
                return _wepy2.default.getAuthCode({ scopes: 'auth_user' });

              case 3:
                _ref3 = _context2.sent;
                code = _ref3.authCode;
                _context2.next = 7;
                return this.post(this.baseUrl + '/api/login', { data: { code: code } });

              case 7:
                _ref4 = _context2.sent;
                token = _ref4.tg_auth;
                _aries = _ref4._aries;

                _wepy2.default.$instance.globalData.xToken = token;
                _wepy2.default.$instance.globalData.xAries = _aries;
                _event2.default.$emit('ready', true);
                console.log('code: ' + code + '\ntoken: ' + token);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return auth;
}(_base3.default);

exports.default = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiX3JlYWR5U3RhdHVzIiwiJG9uIiwic3RhdHVzIiwiYXV0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwibG9naW4iLCJzZXRMb2FkaW5nIiwiZ2V0QXV0aENvZGUiLCJzY29wZXMiLCJjb2RlIiwiYXV0aENvZGUiLCJwb3N0IiwiYmFzZVVybCIsImRhdGEiLCJ0b2tlbiIsInRnX2F1dGgiLCJfYXJpZXMiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwieFRva2VuIiwieEFyaWVzIiwiJGVtaXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlLEtBQW5COztBQUVBLGdCQUFNQyxHQUFOLENBQVUsT0FBVixFQUFtQixrQkFBVTtBQUFFRCxpQkFBZUUsTUFBZjtBQUF1QixDQUF0RDs7SUFFcUJDLEk7Ozs7Ozs7Ozs7OztBQUNuQjs7Ozs7Ozs7OztxQkFLU0gsWTs7Ozs7OEJBQWVJLFFBQVFDLE9BQVIsRTs7Ozs7O3VCQUEwQixLQUFLQyxLQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xEOzs7Ozs7Ozs7Ozs7Ozs7QUFLRSwrQkFBS0MsVUFBTDs7dUJBQ2lDLGVBQUtDLFdBQUwsQ0FBaUIsRUFBRUMsUUFBUSxXQUFWLEVBQWpCLEM7Ozs7QUFBZkMsb0IsU0FBVkMsUTs7dUJBQ2lDLEtBQUtDLElBQUwsQ0FBYSxLQUFLQyxPQUFsQixpQkFBdUMsRUFBRUMsTUFBTSxFQUFFSixVQUFGLEVBQVIsRUFBdkMsQzs7OztBQUF4QksscUIsU0FBVEMsTztBQUFnQkMsc0IsU0FBQUEsTTs7QUFDeEIsK0JBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkMsTUFBMUIsR0FBbUNMLEtBQW5DO0FBQ0EsK0JBQUtHLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkUsTUFBMUIsR0FBbUNKLE1BQW5DO0FBQ0EsZ0NBQU1LLEtBQU4sQ0FBWSxPQUFaLEVBQXFCLElBQXJCO0FBQ0FDLHdCQUFRQyxHQUFSLFlBQXFCZCxJQUFyQixpQkFBcUNLLEtBQXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBcEJpQlosSSIsImZpbGUiOiJhdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBiYXNlIGZyb20gJy4vYmFzZSdcbmltcG9ydCB0aXBzIGZyb20gJ0AvdXRpbHMvdGlwcydcbmltcG9ydCBldmVudCBmcm9tICdAL3V0aWxzL2V2ZW50J1xuXG52YXIgX3JlYWR5U3RhdHVzID0gZmFsc2VcblxuZXZlbnQuJG9uKCdyZWFkeScsIHN0YXR1cyA9PiB7IF9yZWFkeVN0YXR1cyA9IHN0YXR1cyB9KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdXRoIGV4dGVuZHMgYmFzZSB7XG4gIC8qKlxuICAgKiDmjojmnYPnmbvlvZXlh4blpIdcbiAgICog5o6I5p2D5by556qX5aaC5p6c5Y+W5raIIFByb21pc2VTdGF0dXM6cGVuZGluZ1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIHJlYWR5ICgpIHtcbiAgICByZXR1cm4gX3JlYWR5U3RhdHVzID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBhd2FpdCB0aGlzLmxvZ2luKClcbiAgfVxuXG4gIC8qKlxuICAgKiDmjojmnYPnmbvlvZVcbiAgICog5o6I5p2D5by556qX5aaC5p6c5Y+W5raIIFByb21pc2VTdGF0dXM6cGVuZGluZ1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGxvZ2luICgpIHtcbiAgICB0aXBzLnNldExvYWRpbmcoKVxuICAgIGNvbnN0IHsgYXV0aENvZGU6IGNvZGUgfSA9IGF3YWl0IHdlcHkuZ2V0QXV0aENvZGUoeyBzY29wZXM6ICdhdXRoX3VzZXInIH0pXG4gICAgY29uc3QgeyB0Z19hdXRoOiB0b2tlbiwgX2FyaWVzIH0gPSBhd2FpdCB0aGlzLnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcGkvbG9naW5gLCB7IGRhdGE6IHsgY29kZSB9IH0pXG4gICAgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS54VG9rZW4gPSB0b2tlblxuICAgIHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEueEFyaWVzID0gX2FyaWVzXG4gICAgZXZlbnQuJGVtaXQoJ3JlYWR5JywgdHJ1ZSlcbiAgICBjb25zb2xlLmxvZyhgY29kZTogJHtjb2RlfVxcbnRva2VuOiAke3Rva2VufWApXG4gIH1cbn1cbiJdfQ==