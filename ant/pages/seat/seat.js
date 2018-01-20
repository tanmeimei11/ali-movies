'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _auth = require('./../../api/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _axios = require('./../../utils/axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var result = function (_wepy$page) {
  _inherits(result, _wepy$page);

  function result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = result.__proto__ || Object.getPrototypeOf(result)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选座'
    }, _this.components = {}, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {
      test: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _auth2.default.ready();

                case 2:
                  _axios2.default.get('http://qacrowdfunding.in66.com');

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function test() {
          return _ref2.apply(this, arguments);
        }

        return test;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(result, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'slesp',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function slesp(_x) {
        return _ref4.apply(this, arguments);
      }

      return slesp;
    }()
  }]);

  return result;
}(_wepy2.default.page);


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(result , 'pages/seat/seat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXQuanMiXSwibmFtZXMiOlsicmVzdWx0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidGVzdCIsInJlYWR5IiwiZ2V0IiwiZXZlbnRzIiwicGFyYW1zIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEUsUUFHUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ0ZDLFVBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFQSxlQUFLQyxLQUFMLEVBRkE7O0FBQUE7QUFHTixrQ0FBTUMsR0FBTixDQUFVLGdDQUFWOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQU9WQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQXNCSUMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUNxQixlQUFLQyxJOztrQkFBcEJiLE0iLCJmaWxlIjoic2VhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXV0aCBmcm9tICdAL2FwaS9hdXRoJ1xuICBpbXBvcnQgYXhpb3MgZnJvbSAnQC91dGlscy9heGlvcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpgInluqcnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIHRlc3QgKCkge1xuICAgICAgICBhd2FpdCBhdXRoLnJlYWR5KClcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vcWFjcm93ZGZ1bmRpbmcuaW42Ni5jb20nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAvLyBhd2FpdCB0aGlzLnNsZXNwKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcwJylcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgLy8gICBpZiAodXNlckluZm8pIHtcbiAgICAgIC8vICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgLy8gICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgIC8vICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAvLyAgIH0sIDMwMDApXG5cbiAgICAgIC8vICAgc2VsZi4kYXBwbHkoKVxuICAgICAgLy8gfSlcbiAgICB9XG4gICAgYXN5bmMgc2xlc3AgKHBhcmFtcykge1xuICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gICAgIHJlc29sdmUoKVxuICAgICAgLy8gICB9LCAzMDAwKVxuICAgICAgLy8gfSlcbiAgICB9XG4gIH1cbiJdfQ==