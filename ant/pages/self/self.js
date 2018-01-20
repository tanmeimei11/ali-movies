'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _auth = require('./../../api/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _self = require('./../../api/self.js');

var _self2 = _interopRequireDefault(_self);

var _tips = require('./../../utils/tips.js');

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的电影卡'
    }, _this.components = {}, _this.data = {
      btninfo: {},
      rules: ['使用本卡可以在指定影院，通过本小程序免费选座，不限次数。', '使用本卡仅可以在每周一至周四使用，法定节假日除外（按影厅排片选座）。', '本卡有效期3个月，即从2018年3月1日起至2018年5月31日止', '使用本卡选座请点击小程序「选座」功能。', '本卡最终解释权归九言科技所有'], // 规则文案
      userInfo: { // 用户信息
        avatar: '',
        name: '',
        phone: ''
      },
      cardInfos: [{ // 卡片信息
        id: '',
        title: '戏精卡',
        desc: '可任意次数兑换观影券',
        time: '',
        isApply: true,
        num: ''
      }]
    }, _this.methods = {
      apply: function apply() {
        if (this.btninfo.cf_start === "false") {
          _tips2.default.error(this.btninfo.cf_start_desc);
          return;
        }
        _wepy2.default.navigateTo({
          url: '/pages/detail/detail'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'init',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var myInfoRes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _self2.default.getMyInfo();

              case 2:
                myInfoRes = _context.sent;

                this.btninfo = myInfoRes;
                this.cardInfos = _self2.default.initCardInfo(myInfoRes.cards, myInfoRes.default_card);
                this.userInfo = _self2.default.initUserInfo(myInfoRes);
                this.rules = _self2.default.initRules(myInfoRes.texts);
                this.$apply();
                console.log(this.btnon);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _auth2.default.ready();

              case 2:
                this.init();

              case 3:
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
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.init();

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(Index , 'pages/self/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJidG5pbmZvIiwicnVsZXMiLCJ1c2VySW5mbyIsImF2YXRhciIsIm5hbWUiLCJwaG9uZSIsImNhcmRJbmZvcyIsImlkIiwidGl0bGUiLCJkZXNjIiwidGltZSIsImlzQXBwbHkiLCJudW0iLCJtZXRob2RzIiwiYXBwbHkiLCJjZl9zdGFydCIsImVycm9yIiwiY2Zfc3RhcnRfZGVzYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJnZXRNeUluZm8iLCJteUluZm9SZXMiLCJpbml0Q2FyZEluZm8iLCJjYXJkcyIsImRlZmF1bHRfY2FyZCIsImluaXRVc2VySW5mbyIsImluaXRSdWxlcyIsInRleHRzIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsImJ0bm9uIiwicmVhZHkiLCJpbml0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGFBQU8sQ0FBQyw4QkFBRCxFQUNMLG9DQURLLEVBRUwsbUNBRkssRUFHTCxxQkFISyxFQUlMLGdCQUpLLENBRkYsRUFNZ0I7QUFDckJDLGdCQUFVLEVBQUU7QUFDVkMsZ0JBQVEsRUFEQTtBQUVSQyxjQUFNLEVBRkU7QUFHUkMsZUFBTztBQUhDLE9BUEw7QUFZTEMsaUJBQVcsQ0FBQyxFQUFFO0FBQ1pDLFlBQUksRUFETTtBQUVWQyxlQUFPLEtBRkc7QUFHVkMsY0FBTSxZQUhJO0FBSVZDLGNBQU0sRUFKSTtBQUtWQyxpQkFBUyxJQUxDO0FBTVZDLGFBQUs7QUFOSyxPQUFEO0FBWk4sSyxRQXNCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0M7QUFDUCxZQUFJLEtBQUtkLE9BQUwsQ0FBYWUsUUFBYixLQUEwQixPQUE5QixFQUF1QztBQUNyQyx5QkFBS0MsS0FBTCxDQUFXLEtBQUtoQixPQUFMLENBQWFpQixhQUF4QjtBQUNBO0FBQ0Q7QUFDRCx1QkFBS0MsVUFBTCxDQUFpQjtBQUNmQyxlQUFLO0FBRFUsU0FBakI7QUFHRDtBQVRPLEssUUF1QlZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7O3VCQVZlLGVBQUtDLFNBQUwsRTs7O0FBQWxCQyx5Qjs7QUFDSixxQkFBS3RCLE9BQUwsR0FBZXNCLFNBQWY7QUFDQSxxQkFBS2hCLFNBQUwsR0FBaUIsZUFBS2lCLFlBQUwsQ0FBbUJELFVBQVVFLEtBQTdCLEVBQW9DRixVQUFVRyxZQUE5QyxDQUFqQjtBQUNBLHFCQUFLdkIsUUFBTCxHQUFnQixlQUFLd0IsWUFBTCxDQUFtQkosU0FBbkIsQ0FBaEI7QUFDQSxxQkFBS3JCLEtBQUwsR0FBYSxlQUFLMEIsU0FBTCxDQUFnQkwsVUFBVU0sS0FBMUIsQ0FBYjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBT00sZUFBS0MsS0FBTCxFOzs7QUFDTixxQkFBS0MsSUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EscUJBQUtBLElBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRCtCLGVBQUtDLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoic2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGF1dGggZnJvbSAnQC9hcGkvYXV0aCc7XG5pbXBvcnQgU2VsZiBmcm9tICdAL2FwaS9zZWxmJztcbmltcG9ydCB0aXBzIGZyb20gJ0AvdXRpbHMvdGlwcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOeUteW9seWNoSdcbiAgfVxuICBjb21wb25lbnRzID0ge31cblxuICBkYXRhID0ge1xuICAgIGJ0bmluZm86IHt9LFxuICAgIHJ1bGVzOiBbJ+S9v+eUqOacrOWNoeWPr+S7peWcqOaMh+WumuW9semZou+8jOmAmui/h+acrOWwj+eoi+W6j+WFjei0uemAieW6p++8jOS4jemZkOasoeaVsOOAgicsXG4gICAgICAn5L2/55So5pys5Y2h5LuF5Y+v5Lul5Zyo5q+P5ZGo5LiA6Iez5ZGo5Zub5L2/55So77yM5rOV5a6a6IqC5YGH5pel6Zmk5aSW77yI5oyJ5b2x5Y6F5o6S54mH6YCJ5bqn77yJ44CCJyxcbiAgICAgICfmnKzljaHmnInmlYjmnJ8z5Liq5pyI77yM5Y2z5LuOMjAxOOW5tDPmnIgx5pel6LW36IezMjAxOOW5tDXmnIgzMeaXpeatoicsXG4gICAgICAn5L2/55So5pys5Y2h6YCJ5bqn6K+354K55Ye75bCP56iL5bqP44CM6YCJ5bqn44CN5Yqf6IO944CCJyxcbiAgICAgICfmnKzljaHmnIDnu4jop6Pph4rmnYPlvZLkuZ3oqIDnp5HmioDmiYDmnIknXSwgLy8g6KeE5YiZ5paH5qGIXG4gICAgdXNlckluZm86IHsgLy8g55So5oi35L+h5oGvXG4gICAgICBhdmF0YXI6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBwaG9uZTogJydcbiAgICB9LFxuICAgIGNhcmRJbmZvczogW3sgLy8g5Y2h54mH5L+h5oGvXG4gICAgICBpZDogJycsXG4gICAgICB0aXRsZTogJ+aIj+eyvuWNoScsXG4gICAgICBkZXNjOiAn5Y+v5Lu75oSP5qyh5pWw5YWR5o2i6KeC5b2x5Yi4JyxcbiAgICAgIHRpbWU6ICcnLFxuICAgICAgaXNBcHBseTogdHJ1ZSxcbiAgICAgIG51bTogJydcbiAgICB9XVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhcHBseSAoKSB7XG4gICAgICBpZiAodGhpcy5idG5pbmZvLmNmX3N0YXJ0ID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgdGlwcy5lcnJvcih0aGlzLmJ0bmluZm8uY2Zfc3RhcnRfZGVzYylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oIHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWwnXG4gICAgICB9ICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaW5pdCAoKSB7XG4gICAgdmFyIG15SW5mb1JlcyA9IGF3YWl0IFNlbGYuZ2V0TXlJbmZvKCk7XG4gICAgdGhpcy5idG5pbmZvID0gbXlJbmZvUmVzO1xuICAgIHRoaXMuY2FyZEluZm9zID0gU2VsZi5pbml0Q2FyZEluZm8oIG15SW5mb1Jlcy5jYXJkcywgbXlJbmZvUmVzLmRlZmF1bHRfY2FyZCApO1xuICAgIHRoaXMudXNlckluZm8gPSBTZWxmLmluaXRVc2VySW5mbyggbXlJbmZvUmVzICk7XG4gICAgdGhpcy5ydWxlcyA9IFNlbGYuaW5pdFJ1bGVzKCBteUluZm9SZXMudGV4dHMgKTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYnRub24pXG4gIH1cblxuICBcbiAgZXZlbnRzID0ge31cblxuICBhc3luYyBvbkxvYWQgKCkge1xuICAgIGF3YWl0IGF1dGgucmVhZHkoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBhc3luYyBvblNob3cgKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbn1cbiJdfQ==