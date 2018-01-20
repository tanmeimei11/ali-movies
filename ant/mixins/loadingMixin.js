'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingMixin = function (_wepy$mixin) {
  _inherits(LoadingMixin, _wepy$mixin);

  function LoadingMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoadingMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadingMixin.__proto__ || Object.getPrototypeOf(LoadingMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      a: 1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoadingMixin, [{
    key: 'loadingIn',
    value: function loadingIn(text) {
      _wepy2.default.showLoading({
        title: text,
        mask: true
      });
    }
  }, {
    key: 'loadingOut',
    value: function loadingOut() {
      _wepy2.default.hideLoading();
    }
  }, {
    key: 'toastSucc',
    value: function toastSucc(text) {
      _wepy2.default.showToast({
        title: text,
        mask: true
      });
    }
  }, {
    key: 'toastFail',
    value: function toastFail(text, duration) {
      _wepy2.default.showToast({
        title: text,
        image: '../../images/toast-fail.png',
        mask: true,
        duration: duration || 2000
      });
    }
  }]);

  return LoadingMixin;
}(_wepy2.default.mixin);

exports.default = LoadingMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmdNaXhpbi5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nTWl4aW4iLCJkYXRhIiwiYSIsInRleHQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJpbWFnZSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEksR0FBTztBQUNMQyxTQUFHO0FBREUsSzs7Ozs7OEJBR0dDLEksRUFBTTtBQUNkLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU9GLElBRFE7QUFFZkcsY0FBTTtBQUZTLE9BQWpCO0FBSUQ7OztpQ0FDWTtBQUNYLHFCQUFLQyxXQUFMO0FBQ0Q7Ozs4QkFDU0osSSxFQUFNO0FBQ2QscUJBQUtLLFNBQUwsQ0FBZTtBQUNiSCxlQUFPRixJQURNO0FBRWJHLGNBQU07QUFGTyxPQUFmO0FBSUQ7Ozs4QkFDU0gsSSxFQUFNTSxRLEVBQVU7QUFDeEIscUJBQUtELFNBQUwsQ0FBZTtBQUNiSCxlQUFPRixJQURNO0FBRWJPLGVBQU8sNkJBRk07QUFHYkosY0FBTSxJQUhPO0FBSWJHLGtCQUFVQSxZQUFZO0FBSlQsT0FBZjtBQU1EOzs7O0VBMUJ1QyxlQUFLRSxLOztrQkFBMUJYLFkiLCJmaWxlIjoibG9hZGluZ01peGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBhOiAxXHJcbiAgfVxyXG4gIGxvYWRpbmdJbih0ZXh0KSB7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6IHRleHQsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxvYWRpbmdPdXQoKSB7XHJcbiAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICB9XHJcbiAgdG9hc3RTdWNjKHRleHQpIHtcclxuICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRleHQsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIHRvYXN0RmFpbCh0ZXh0LCBkdXJhdGlvbikge1xyXG4gICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGV4dCxcclxuICAgICAgaW1hZ2U6ICcuLi8uLi9pbWFnZXMvdG9hc3QtZmFpbC5wbmcnLFxyXG4gICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgMjAwMFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19