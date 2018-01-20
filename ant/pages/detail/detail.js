'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _auth = require('./../../api/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _detail = require('./../../api/detail.js');

var _detail2 = _interopRequireDefault(_detail);

var _tips = require('./../../utils/tips.js');

var _tips2 = _interopRequireDefault(_tips);

var _reportSubmit = require('./../../components/report-submit.js');

var _reportSubmit2 = _interopRequireDefault(_reportSubmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import loadingMixin from '@/mixins/loadingMixin'

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
      navigationBarTitleText: '活动页面'
    }, _this.components = { report: _reportSubmit2.default }, _this.mixins = [], _this.data = {
      cardNumInfo: {
        title: '专享优惠 名额有限',
        desc: '为保障用户观影体验 限量发售五万张',
        num: '122/12321',
        percent: 0
      },
      cinemas: {
        img: '',
        list: [{
          address: '',
          addressImg: '',
          gps: '',
          name: ''
        }]
      },
      movies: [{ name: '',
        URL: ''
      }],
      rules: [{
        class: 'pre',
        title: '【in同城趴电影王卡—功能介绍】',
        desc: ['1.本卡功能：使用本卡，可以在指定影院，通过“in同城趴电影”小程序免费选座，不限次数。', '2.使用时间：周一至周四任意时段，法定节假日除外。', '3.有效期限：本卡有效期3个月，即从2018年3月1日至2018年5月31日']
      }, {
        class: 'pre',
        title: '【in同城趴电影王卡—使用方式】',
        desc: ['1.选座：点击“in同城趴电影”小程序［选座］功能进行影院选择及选座。', '2.验票：到达选择影厅后点击小程序［我的］出示二维码验证身份。']
      }, {
        class: 'bold',
        title: '温馨提示：',
        desc: ['· 此次活动为in同城趴电影王卡预购活动，当预购人数不足4万人时将在活动结束后3-10个工作日内全额退款。', '· 活动最终解释权归九言科技所有']
      }],
      detailStatus: {
        is_buy: '1'
      },
      detailText: {}
    }, _this.computed = {}, _this.methods = {
      pay: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.pay();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function pay() {
          return _ref2.apply(this, arguments);
        }

        return pay;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.init();

              case 1:
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
    key: 'init',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res, initCardNumRes, statusRes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _detail2.default.getDetailData();

              case 2:
                res = _context3.sent;

                this.cinemas = _detail2.default.initCinemas(res.cinemas, res.all_cinema_addr_img);
                this.movies = _detail2.default.initMovies(res.movies);
                initCardNumRes = _detail2.default.initCardNum(res);

                this.cardNumInfo.num = initCardNumRes.num;
                this.cardNumInfo.percent = initCardNumRes.percent;
                this.$apply();
                _context3.next = 11;
                return _auth2.default.ready();

              case 11:
                _context3.next = 13;
                return _detail2.default.getDetailStatus();

              case 13:
                statusRes = _context3.sent;

                this.detailStatus = statusRes;
                this.detailText = statusRes.desc;
                this.rules[0].title = statusRes.desc.desc07;
                this.rules[0].desc = statusRes.desc.desc08;
                this.rules[1].title = statusRes.desc.desc09;
                this.rules[1].desc = statusRes.desc.desc10;
                this.rules[2].title = statusRes.desc.desc11;
                this.rules[2].desc = statusRes.desc.desc12;
                this.$apply();
                console.log(this.detailText);

              case 24:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _ref4.apply(this, arguments);
      }

      return init;
    }()
    /**
     *  支付
     */

  }, {
    key: 'pay',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var createRes, getOrderRes, tradePayRes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.detailStatus.is_buy === '1')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return');

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return _detail2.default.creatOrder();

              case 5:
                createRes = _context4.sent;

                if (!(createRes.code === '4000032129' || createRes.code === '4000031814')) {
                  _context4.next = 9;
                  break;
                }

                _tips2.default.error(createRes.msg);
                return _context4.abrupt('return');

              case 9:
                _context4.next = 11;
                return _detail2.default.getOrderDetail(createRes);

              case 11:
                getOrderRes = _context4.sent;
                _context4.next = 14;
                return _wepy2.default.tradePay({
                  orderStr: getOrderRes.sign
                });

              case 14:
                tradePayRes = _context4.sent;


                // 支付成功
                if (tradePayRes.resultCode === '9000') {
                  this.paySucc();
                } else {
                  this.payFail();
                }
                _context4.next = 20;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4['catch'](2);

              case 20:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 18]]);
      }));

      function pay() {
        return _ref5.apply(this, arguments);
      }

      return pay;
    }()
    /**
     *  支付成功
     */

  }, {
    key: 'paySucc',
    value: function paySucc() {
      // var pageRouter = getCurrentPages();  // eslint-disable-line
      // pageRouter.map( item => {
      //   if ( item.route === 'pages/self/self' || item.route === 'pages/detail/detail' ) {
      //     item.init();
      //   }
      // } );
      this.init();
      _wepy2.default.navigateTo({
        url: '../result/result'
      });
    }
  }, {
    key: 'payFail',
    value: function payFail() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(Index , 'pages/detail/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicmVwb3J0IiwibWl4aW5zIiwiZGF0YSIsImNhcmROdW1JbmZvIiwidGl0bGUiLCJkZXNjIiwibnVtIiwicGVyY2VudCIsImNpbmVtYXMiLCJpbWciLCJsaXN0IiwiYWRkcmVzcyIsImFkZHJlc3NJbWciLCJncHMiLCJuYW1lIiwibW92aWVzIiwiVVJMIiwicnVsZXMiLCJjbGFzcyIsImRldGFpbFN0YXR1cyIsImlzX2J1eSIsImRldGFpbFRleHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwYXkiLCJldmVudHMiLCJpbml0IiwiZ2V0RGV0YWlsRGF0YSIsInJlcyIsImluaXRDaW5lbWFzIiwiYWxsX2NpbmVtYV9hZGRyX2ltZyIsImluaXRNb3ZpZXMiLCJpbml0Q2FyZE51bVJlcyIsImluaXRDYXJkTnVtIiwiJGFwcGx5IiwicmVhZHkiLCJnZXREZXRhaWxTdGF0dXMiLCJzdGF0dXNSZXMiLCJkZXNjMDciLCJkZXNjMDgiLCJkZXNjMDkiLCJkZXNjMTAiLCJkZXNjMTEiLCJkZXNjMTIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRPcmRlciIsImNyZWF0ZVJlcyIsImNvZGUiLCJlcnJvciIsIm1zZyIsImdldE9yZGVyRGV0YWlsIiwiZ2V0T3JkZXJSZXMiLCJ0cmFkZVBheSIsIm9yZGVyU3RyIiwic2lnbiIsInRyYWRlUGF5UmVzIiwicmVzdWx0Q29kZSIsInBheVN1Y2MiLCJwYXlGYWlsIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRUFBRUMsOEJBQUYs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LEtBQUt4QixVQUFsQjs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7Ozs7Ozs7Ozs7O3NCQUlPLEtBQUtGLFlBQUwsQ0FBa0JDLE1BQWxCLEtBQTZCLEc7Ozs7Ozs7Ozs7dUJBSVYsaUJBQU8wQixVQUFQLEU7OztBQUFsQkMseUI7O3NCQUNBQSxVQUFVQyxJQUFWLEtBQW1CLFlBQW5CLElBQW1DRCxVQUFVQyxJQUFWLEtBQW1CLFk7Ozs7O0FBQ3hELCtCQUFLQyxLQUFMLENBQVdGLFVBQVVHLEdBQXJCOzs7Ozt1QkFHc0IsaUJBQU9DLGNBQVAsQ0FBdUJKLFNBQXZCLEM7OztBQUFwQkssMkI7O3VCQUNvQixlQUFLQyxRQUFMLENBQWU7QUFDckNDLDRCQUFVRixZQUFZRztBQURlLGlCQUFmLEM7OztBQUFwQkMsMkI7OztBQUlKO0FBQ0Esb0JBQUtBLFlBQVlDLFVBQVosS0FBMkIsTUFBaEMsRUFBeUM7QUFDdkMsdUJBQUtDLE9BQUw7QUFDRCxpQkFGRCxNQUVPO0FBQ0wsdUJBQUtDLE9BQUw7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtMOzs7Ozs7OEJBR1c7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFLakMsSUFBTDtBQUNBLHFCQUFLa0MsVUFBTCxDQUFpQjtBQUNmQyxhQUFLO0FBRFUsT0FBakI7QUFHRDs7OzhCQUNVLENBRVY7Ozs7RUE1SWdDLGVBQUtDLEk7O2tCQUFuQmxFLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXV0aCBmcm9tICdAL2FwaS9hdXRoJztcbmltcG9ydCBEZXRhaWwgZnJvbSAnQC9hcGkvZGV0YWlsJztcbmltcG9ydCB0aXBzIGZyb20gJ0AvdXRpbHMvdGlwcydcbmltcG9ydCByZXBvcnQgZnJvbSAnQC9jb21wb25lbnRzL3JlcG9ydC1zdWJtaXQnO1xuLy8gaW1wb3J0IGxvYWRpbmdNaXhpbiBmcm9tICdAL21peGlucy9sb2FkaW5nTWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtLvliqjpobXpnaInXG4gIH1cbiAgY29tcG9uZW50cyA9IHsgcmVwb3J0IH1cbiAgbWl4aW5zID0gW11cbiAgZGF0YSA9IHtcbiAgICBjYXJkTnVtSW5mbzoge1xuICAgICAgdGl0bGU6ICfkuJPkuqvkvJjmg6Ag5ZCN6aKd5pyJ6ZmQJyxcbiAgICAgIGRlc2M6ICfkuLrkv53pmpznlKjmiLfop4LlvbHkvZPpqowg6ZmQ6YeP5Y+R5ZSu5LqU5LiH5bygJyxcbiAgICAgIG51bTogJzEyMi8xMjMyMScsXG4gICAgICBwZXJjZW50OiAwXG4gICAgfSxcbiAgICBjaW5lbWFzOiB7XG4gICAgICBpbWc6ICcnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgYWRkcmVzc0ltZzogJycsXG4gICAgICAgICAgZ3BzOiAnJyxcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBtb3ZpZXM6IFtcbiAgICAgIHsgbmFtZTogJycsXG4gICAgICAgIFVSTDogJydcbiAgICAgIH1cbiAgICBdLFxuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAncHJlJyxcbiAgICAgICAgdGl0bGU6ICfjgJBpbuWQjOWfjui2tOeUteW9seeOi+WNoeKAlOWKn+iDveS7i+e7jeOAkScsXG4gICAgICAgIGRlc2M6IFtcbiAgICAgICAgICAnMS7mnKzljaHlip/og73vvJrkvb/nlKjmnKzljaHvvIzlj6/ku6XlnKjmjIflrprlvbHpmaLvvIzpgJrov4figJxpbuWQjOWfjui2tOeUteW9seKAneWwj+eoi+W6j+WFjei0uemAieW6p++8jOS4jemZkOasoeaVsOOAgicsXG4gICAgICAgICAgJzIu5L2/55So5pe26Ze077ya5ZGo5LiA6Iez5ZGo5Zub5Lu75oSP5pe25q6177yM5rOV5a6a6IqC5YGH5pel6Zmk5aSW44CCJyxcbiAgICAgICAgICAnMy7mnInmlYjmnJ/pmZDvvJrmnKzljaHmnInmlYjmnJ8z5Liq5pyI77yM5Y2z5LuOMjAxOOW5tDPmnIgx5pel6IezMjAxOOW5tDXmnIgzMeaXpSdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdwcmUnLFxuICAgICAgICB0aXRsZTogJ+OAkGlu5ZCM5Z+O6La055S15b2x546L5Y2h4oCU5L2/55So5pa55byP44CRJyxcbiAgICAgICAgZGVzYzogW1xuICAgICAgICAgICcxLumAieW6p++8mueCueWHu+KAnGlu5ZCM5Z+O6La055S15b2x4oCd5bCP56iL5bqP77y76YCJ5bqn77y95Yqf6IO96L+b6KGM5b2x6Zmi6YCJ5oup5Y+K6YCJ5bqn44CCJyxcbiAgICAgICAgICAnMi7pqoznpajvvJrliLDovr7pgInmi6nlvbHljoXlkI7ngrnlh7vlsI/nqIvluo/vvLvmiJHnmoTvvL3lh7rnpLrkuoznu7TnoIHpqozor4Houqvku73jgIInXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnYm9sZCcsXG4gICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S677yaJyxcbiAgICAgICAgZGVzYzogW1xuICAgICAgICAgICfCtyDmraTmrKHmtLvliqjkuLppbuWQjOWfjui2tOeUteW9seeOi+WNoemihOi0rea0u+WKqO+8jOW9k+mihOi0reS6uuaVsOS4jei2szTkuIfkurrml7blsIblnKjmtLvliqjnu5PmnZ/lkI4zLTEw5Liq5bel5L2c5pel5YaF5YWo6aKd6YCA5qy+44CCJyxcbiAgICAgICAgICAnwrcg5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S5Lmd6KiA56eR5oqA5omA5pyJJ1xuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBkZXRhaWxTdGF0dXM6IHtcbiAgICAgIGlzX2J1eTogJzEnXG4gICAgfSxcbiAgICBkZXRhaWxUZXh0OiB7fVxuICB9XG4gIGNvbXB1dGVkID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBwYXkgKCkge1xuICAgICAgYXdhaXQgdGhpcy5wYXkoKTtcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBhc3luYyBpbml0ICgpIHtcbiAgICB2YXIgcmVzID0gYXdhaXQgRGV0YWlsLmdldERldGFpbERhdGEoKTtcbiAgICB0aGlzLmNpbmVtYXMgPSBEZXRhaWwuaW5pdENpbmVtYXMoIHJlcy5jaW5lbWFzLCByZXMuYWxsX2NpbmVtYV9hZGRyX2ltZyApO1xuICAgIHRoaXMubW92aWVzID0gRGV0YWlsLmluaXRNb3ZpZXMoIHJlcy5tb3ZpZXMgKTtcbiAgICB2YXIgaW5pdENhcmROdW1SZXMgPSBEZXRhaWwuaW5pdENhcmROdW0oIHJlcyApO1xuICAgIHRoaXMuY2FyZE51bUluZm8ubnVtID0gaW5pdENhcmROdW1SZXMubnVtO1xuICAgIHRoaXMuY2FyZE51bUluZm8ucGVyY2VudCA9IGluaXRDYXJkTnVtUmVzLnBlcmNlbnQ7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICBhd2FpdCBhdXRoLnJlYWR5KCk7XG4gICAgdmFyIHN0YXR1c1JlcyA9IGF3YWl0IERldGFpbC5nZXREZXRhaWxTdGF0dXMoKVxuICAgIHRoaXMuZGV0YWlsU3RhdHVzID0gc3RhdHVzUmVzO1xuICAgIHRoaXMuZGV0YWlsVGV4dCA9IHN0YXR1c1Jlcy5kZXNjXG4gICAgdGhpcy5ydWxlc1swXS50aXRsZSA9IHN0YXR1c1Jlcy5kZXNjLmRlc2MwN1xuICAgIHRoaXMucnVsZXNbMF0uZGVzYyA9IHN0YXR1c1Jlcy5kZXNjLmRlc2MwOFxuICAgIHRoaXMucnVsZXNbMV0udGl0bGUgPSBzdGF0dXNSZXMuZGVzYy5kZXNjMDlcbiAgICB0aGlzLnJ1bGVzWzFdLmRlc2MgPSBzdGF0dXNSZXMuZGVzYy5kZXNjMTBcbiAgICB0aGlzLnJ1bGVzWzJdLnRpdGxlID0gc3RhdHVzUmVzLmRlc2MuZGVzYzExXG4gICAgdGhpcy5ydWxlc1syXS5kZXNjID0gc3RhdHVzUmVzLmRlc2MuZGVzYzEyXG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyggdGhpcy5kZXRhaWxUZXh0ICk7XG4gIH1cbiAgLyoqXG4gICAqICDmlK/ku5hcbiAgICovXG4gIGFzeW5jIHBheSAoKSB7XG4gICAgaWYgKCB0aGlzLmRldGFpbFN0YXR1cy5pc19idXkgPT09ICcxJyApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjcmVhdGVSZXMgPSBhd2FpdCBEZXRhaWwuY3JlYXRPcmRlcigpO1xuICAgICAgaWYgKGNyZWF0ZVJlcy5jb2RlID09PSAnNDAwMDAzMjEyOScgfHwgY3JlYXRlUmVzLmNvZGUgPT09ICc0MDAwMDMxODE0Jykge1xuICAgICAgICB0aXBzLmVycm9yKGNyZWF0ZVJlcy5tc2cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGdldE9yZGVyUmVzID0gYXdhaXQgRGV0YWlsLmdldE9yZGVyRGV0YWlsKCBjcmVhdGVSZXMgKTtcbiAgICAgIHZhciB0cmFkZVBheVJlcyA9IGF3YWl0IHdlcHkudHJhZGVQYXkoIHtcbiAgICAgICAgb3JkZXJTdHI6IGdldE9yZGVyUmVzLnNpZ25cbiAgICAgIH0gKTtcblxuICAgICAgLy8g5pSv5LuY5oiQ5YqfXG4gICAgICBpZiAoIHRyYWRlUGF5UmVzLnJlc3VsdENvZGUgPT09ICc5MDAwJyApIHtcbiAgICAgICAgdGhpcy5wYXlTdWNjKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBheUZhaWwoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICggZSApIHtcblxuICAgIH1cbiAgfVxuICAvKipcbiAgICogIOaUr+S7mOaIkOWKn1xuICAgKi9cbiAgcGF5U3VjYyAoKSB7XG4gICAgLy8gdmFyIHBhZ2VSb3V0ZXIgPSBnZXRDdXJyZW50UGFnZXMoKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAvLyBwYWdlUm91dGVyLm1hcCggaXRlbSA9PiB7XG4gICAgLy8gICBpZiAoIGl0ZW0ucm91dGUgPT09ICdwYWdlcy9zZWxmL3NlbGYnIHx8IGl0ZW0ucm91dGUgPT09ICdwYWdlcy9kZXRhaWwvZGV0YWlsJyApIHtcbiAgICAvLyAgICAgaXRlbS5pbml0KCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSApO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHdlcHkubmF2aWdhdGVUbygge1xuICAgICAgdXJsOiAnLi4vcmVzdWx0L3Jlc3VsdCdcbiAgICB9ICk7XG4gIH1cbiAgcGF5RmFpbCAoKSB7XG5cbiAgfVxufVxuIl19