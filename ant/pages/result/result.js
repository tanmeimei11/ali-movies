'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _result = require('./../../api/result.js');

var _result2 = _interopRequireDefault(_result);

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
      navigationBarTitleText: '支付完成'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      contractID: '2018011801960713'
    }, _this.computed = {}, _this.methods = {
      alert: function alert() {
        console.log(1111);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(result, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var getContractID;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _result2.default.getContractID();

              case 2:
                getContractID = _context.sent;

                this.contractID = getContractID.contract_id;
                this.$apply();
                console.log(this.contractID);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return result;
}(_wepy2.default.page);


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(result , 'pages/result/result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5qcyJdLCJuYW1lcyI6WyJyZXN1bHQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJjb250cmFjdElEIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwiZ2V0Q29udHJhY3RJRCIsImNvbnRyYWN0X2lkIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF5QjtBQURsQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLE0sR0FBUyxFLFFBQ1RDLEksR0FBTztBQUNMQyxrQkFBWTtBQURQLEssUUFHUEMsUSxHQUFXLEUsUUFDWEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFITyxLLFFBS1ZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7O3VCQUVtQixpQkFBT0MsYUFBUCxFOzs7QUFBdEJBLDZCOztBQUNKLHFCQUFLUCxVQUFMLEdBQWtCTyxjQUFjQyxXQUFoQztBQUNBLHFCQUFLQyxNQUFMO0FBQ0FMLHdCQUFRQyxHQUFSLENBQVksS0FBS0wsVUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQmdDLGVBQUtVLEk7O2tCQUFwQmhCLE0iLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBSZXN1bHQgZnJvbSAnQC9hcGkvcmVzdWx0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogICfmlK/ku5jlrozmiJAnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7fVxuICAgIG1peGlucyA9IFtdXG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbnRyYWN0SUQ6ICcyMDE4MDExODAxOTYwNzEzJ1xuICAgIH1cbiAgICBjb21wdXRlZCA9IHt9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFsZXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygxMTExKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge31cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB2YXIgZ2V0Q29udHJhY3RJRCA9IGF3YWl0IFJlc3VsdC5nZXRDb250cmFjdElEKClcbiAgICAgIHRoaXMuY29udHJhY3RJRCA9IGdldENvbnRyYWN0SUQuY29udHJhY3RfaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJhY3RJRClcbiAgICB9XG4gIH1cbiJdfQ==