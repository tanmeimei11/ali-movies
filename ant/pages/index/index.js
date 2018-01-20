'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../api/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_wepy$page) {
  _inherits(index, _wepy$page);

  function index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的电影卡'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      btnon: false,
      texts: {}
    }, _this.computed = {}, _this.methods = {
      toDetail: function toDetail() {
        if (!this.btnon) {
          return;
        }
        _wepy2.default.navigateTo({
          url: '/pages/detail/detail'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var InfoRes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _index2.default.getIndexInfo();

              case 2:
                InfoRes = _context.sent;

                this.texts = InfoRes;
                this.btnon = InfoRes.cf_start === 'true' ? true : false;
                this.$apply();

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

  return index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYnRub24iLCJ0ZXh0cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvRGV0YWlsIiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsImdldEluZGV4SW5mbyIsIkluZm9SZXMiLCJjZl9zdGFydCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTyxLQURGO0FBRUxDLGFBQU87QUFGRixLLFFBS1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsWUFBSSxDQUFDLEtBQUtKLEtBQVYsRUFBaUI7QUFDZjtBQUNEO0FBQ0QsdUJBQUtLLFVBQUwsQ0FBaUI7QUFDZkMsZUFBSztBQURVLFNBQWpCO0FBR0Q7QUFSTyxLLFFBV1ZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7O3VCQUlhLGdCQUFNQyxZQUFOLEU7OztBQUFoQkMsdUI7O0FBQ0oscUJBQUtSLEtBQUwsR0FBYVEsT0FBYjtBQUNBLHFCQUFLVCxLQUFMLEdBQWFTLFFBQVFDLFFBQVIsS0FBcUIsTUFBckIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBbEQ7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5DK0IsZUFBS0MsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IEluZGV4IGZyb20gJ0AvYXBpL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE55S15b2x5Y2hJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gIH1cblxuICBtaXhpbnMgPSBbXVxuXG4gIGRhdGEgPSB7XG4gICAgYnRub246IGZhbHNlLFxuICAgIHRleHRzOiB7fVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRvRGV0YWlsICgpIHtcbiAgICAgIGlmICghdGhpcy5idG5vbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbygge1xuICAgICAgICB1cmw6ICcvcGFnZXMvZGV0YWlsL2RldGFpbCdcbiAgICAgIH0gKTtcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG4gIH1cblxuICBhc3luYyBvbkxvYWQgKCkge1xuICAgIHZhciBJbmZvUmVzID0gYXdhaXQgSW5kZXguZ2V0SW5kZXhJbmZvKClcbiAgICB0aGlzLnRleHRzID0gSW5mb1Jlc1xuICAgIHRoaXMuYnRub24gPSBJbmZvUmVzLmNmX3N0YXJ0ID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2VcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==