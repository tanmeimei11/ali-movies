'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _page = require('./page.js');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_Pagebase) {
  _inherits(Result, _Pagebase);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
  }

  _createClass(Result, null, [{
    key: 'getContractID',

    /**
     * 获取我的信息接口
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request({
                  url: '/mnp/order/result'
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getContractID() {
        return _ref.apply(this, arguments);
      }

      return getContractID;
    }()
  }]);

  return Result;
}(_page2.default);

exports.default = Result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5qcyJdLCJuYW1lcyI6WyJSZXN1bHQiLCJyZXF1ZXN0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7OztBQUNuQjs7Ozs7Ozs7Ozt1QkFJZSxLQUFLQyxPQUFMLENBQWE7QUFDeEJDLHVCQUFLO0FBRG1CLGlCQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFMSUYsTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZWJhc2UgZnJvbSAnLi9wYWdlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUGFnZWJhc2Uge1xuICAvKipcbiAgICog6I635Y+W5oiR55qE5L+h5oGv5o6l5Y+jXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0Q29udHJhY3RJRCgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgIHVybDogJy9tbnAvb3JkZXIvcmVzdWx0J1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==