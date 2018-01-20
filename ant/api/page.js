'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./../utils/config.js');

var _mockConfig = require('./../mock/mockConfig.js');

var _mockConfig2 = _interopRequireDefault(_mockConfig);

var _axios = require('./../utils/axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagebase = function () {
  function Pagebase() {
    _classCallCheck(this, Pagebase);
  }

  _createClass(Pagebase, null, [{
    key: 'request',

    // 数据交互域名
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 域名添加
                !/^http/.test(options.url) && (options.url = _config.DOMAIN + options.url);
                // mock

                if (!_config.isMock) {
                  _context.next = 4;
                  break;
                }

                console.log(options.url);
                return _context.abrupt('return', require('../mock/' + _mockConfig2.default[options.url]).data);

              case 4:
                _context.next = 6;
                return _axios2.default.request(options);

              case 6:
                return _context.abrupt('return', _context.sent);

              case 7:
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
  }]);

  return Pagebase;
}();

exports.default = Pagebase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiXSwibmFtZXMiOlsiUGFnZWJhc2UiLCJvcHRpb25zIiwidGVzdCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwiZGF0YSIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7O0FBQ25COzswRkFDdUJDLE87Ozs7O0FBQ3JCO0FBQ0EsaUJBQUMsUUFBUUMsSUFBUixDQUFjRCxRQUFRRSxHQUF0QixDQUFELEtBQWtDRixRQUFRRSxHQUFSLEdBQWMsaUJBQVNGLFFBQVFFLEdBQWpFO0FBQ0E7Ozs7Ozs7QUFFRUMsd0JBQVFDLEdBQVIsQ0FBYUosUUFBUUUsR0FBckI7aURBQ09HLFFBQVMsYUFBYSxxQkFBV0wsUUFBUUUsR0FBbkIsQ0FBdEIsRUFBZ0RJLEk7Ozs7dUJBRzVDLGdCQUFNQyxPQUFOLENBQWVQLE9BQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVhJRCxRIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc01vY2ssIERPTUFJTiB9IGZyb20gJ0AvdXRpbHMvY29uZmlnJztcbmltcG9ydCBtb2NrQ29uZmlnIGZyb20gJ0AvbW9jay9tb2NrQ29uZmlnJztcbmltcG9ydCBheGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZWJhc2Uge1xuICAvLyDmlbDmja7kuqTkupLln5/lkI1cbiAgc3RhdGljIGFzeW5jIHJlcXVlc3QgKCBvcHRpb25zICkge1xuICAgIC8vIOWfn+WQjea3u+WKoFxuICAgICEvXmh0dHAvLnRlc3QoIG9wdGlvbnMudXJsICkgJiYgKCBvcHRpb25zLnVybCA9IERPTUFJTiArIG9wdGlvbnMudXJsICk7XG4gICAgLy8gbW9ja1xuICAgIGlmICggaXNNb2NrICkge1xuICAgICAgY29uc29sZS5sb2coIG9wdGlvbnMudXJsICk7XG4gICAgICByZXR1cm4gcmVxdWlyZSggJy4uL21vY2svJyArIG1vY2tDb25maWdbb3B0aW9ucy51cmxdICkuZGF0YTtcbiAgICB9XG4gICAgLy8g5pa55rOVXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnJlcXVlc3QoIG9wdGlvbnMgKTtcbiAgfVxufVxuIl19