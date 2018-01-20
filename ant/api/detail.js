'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _page = require('./page.js');

var _page2 = _interopRequireDefault(_page);

var _config = require('./../utils/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_Pagebase) {
  _inherits(Detail, _Pagebase);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
  }

  _createClass(Detail, null, [{
    key: 'getDetailStatus',

    /**
     *  获取众筹状态接口
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request({
                  url: '/mnp/product/cfStatus',
                  data: { product_id: 159 }
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

      function getDetailStatus() {
        return _ref.apply(this, arguments);
      }

      return getDetailStatus;
    }()
    /**
     *  获取详情页数据接口
     */

  }, {
    key: 'getDetailData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request({
                  url: '/info/cinemas'
                });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDetailData() {
        return _ref2.apply(this, arguments);
      }

      return getDetailData;
    }()
  }, {
    key: 'initCardNum',
    value: function initCardNum(data) {
      return {
        num: data.current_person_count + '/' + data.total_person_count,
        percent: data.current_person_count / data.total_person_count * 100 + '%'
      };
    }
    /**
     * 初始化影院
     */

  }, {
    key: 'initCinemas',
    value: function initCinemas(data, img) {
      if (!data.length) {
        return [];
      }
      return {
        img: img,
        list: data.map(function (item) {
          return {
            address: item.address,
            addressImg: item.address_img,
            gps: item.gps,
            name: item.name
          };
        })
      };
    }
    /**
     *
     * 初始化电影
     * @static
     * @memberof Detail
     */

  }, {
    key: 'initMovies',
    value: function initMovies(data) {
      if (!data.length) {
        return [];
      }

      return data.map(function (item) {
        return {
          name: item.name,
          url: item.movie_img_url
        };
      });
    }
    /**
     * 创建订单接口
     */

  }, {
    key: 'creatOrder',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request({
                  url: '/mnp/order/create',
                  data: {
                    product_id: 159,
                    pay_channel: _config.paymentChannel
                  }
                });

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function creatOrder() {
        return _ref3.apply(this, arguments);
      }

      return creatOrder;
    }()

    /**
     * 获取订单信息接口
     * @param {*} createRes  创建订单的res
     */

  }, {
    key: 'getOrderDetail',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(createRes) {
        var _data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _data = {
                  _token: _wepy2.default.$instance.globalData.xToken || _config.token,
                  payment_channel: _config.paymentChannel,
                  business_party: _config.businessParty,
                  order_detail: createRes.order_detail,
                  extend_params: JSON.stringify({
                    open_id: createRes.open_id
                  })
                };
                _context4.next = 3;
                return this.request({
                  url: _config.payUrl,
                  data: _data
                });

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getOrderDetail(_x) {
        return _ref4.apply(this, arguments);
      }

      return getOrderDetail;
    }()
  }]);

  return Detail;
}(_page2.default);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsInByb2R1Y3RfaWQiLCJudW0iLCJjdXJyZW50X3BlcnNvbl9jb3VudCIsInRvdGFsX3BlcnNvbl9jb3VudCIsInBlcmNlbnQiLCJpbWciLCJsZW5ndGgiLCJsaXN0IiwibWFwIiwiaXRlbSIsImFkZHJlc3MiLCJhZGRyZXNzSW1nIiwiYWRkcmVzc19pbWciLCJncHMiLCJuYW1lIiwibW92aWVfaW1nX3VybCIsInBheV9jaGFubmVsIiwiY3JlYXRlUmVzIiwiX2RhdGEiLCJfdG9rZW4iLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwieFRva2VuIiwicGF5bWVudF9jaGFubmVsIiwiYnVzaW5lc3NfcGFydHkiLCJvcmRlcl9kZXRhaWwiLCJleHRlbmRfcGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wZW5faWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7QUFDbkI7Ozs7Ozs7Ozs7dUJBSWUsS0FBS0MsT0FBTCxDQUFjO0FBQ3pCQyx1QkFBSyx1QkFEb0I7QUFFekJDLHdCQUFNLEVBQUVDLFlBQVksR0FBZDtBQUZtQixpQkFBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7Ozs7Ozs7Ozs7Ozs7dUJBSWUsS0FBS0gsT0FBTCxDQUFjO0FBQ3pCQyx1QkFBSztBQURvQixpQkFBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSU1DLEksRUFBTztBQUMxQixhQUFPO0FBQ0xFLGFBQVFGLEtBQUtHLG9CQUFiLFNBQXFDSCxLQUFLSSxrQkFEckM7QUFFTEMsaUJBQVdMLEtBQUtHLG9CQUFMLEdBQTRCSCxLQUFLSSxrQkFBakMsR0FBc0QsR0FBeEQsR0FBZ0U7QUFGcEUsT0FBUDtBQUlEO0FBQ0Q7Ozs7OztnQ0FHcUJKLEksRUFBTU0sRyxFQUFNO0FBQy9CLFVBQUssQ0FBQ04sS0FBS08sTUFBWCxFQUFvQjtBQUNsQixlQUFPLEVBQVA7QUFDRDtBQUNELGFBQU87QUFDTEQsYUFBS0EsR0FEQTtBQUVMRSxjQUFNUixLQUFLUyxHQUFMLENBQVUsVUFBRUMsSUFBRixFQUFZO0FBQzFCLGlCQUFPO0FBQ0xDLHFCQUFTRCxLQUFLQyxPQURUO0FBRUxDLHdCQUFZRixLQUFLRyxXQUZaO0FBR0xDLGlCQUFLSixLQUFLSSxHQUhMO0FBSUxDLGtCQUFNTCxLQUFLSztBQUpOLFdBQVA7QUFNRCxTQVBLO0FBRkQsT0FBUDtBQVdEO0FBQ0Q7Ozs7Ozs7OzsrQkFNb0JmLEksRUFBTztBQUN6QixVQUFLLENBQUNBLEtBQUtPLE1BQVgsRUFBb0I7QUFDbEIsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsYUFBT1AsS0FBS1MsR0FBTCxDQUFVLFVBQUVDLElBQUYsRUFBWTtBQUMzQixlQUFPO0FBQ0xLLGdCQUFNTCxLQUFLSyxJQUROO0FBRUxoQixlQUFLVyxLQUFLTTtBQUZMLFNBQVA7QUFJRCxPQUxNLENBQVA7QUFNRDtBQUNEOzs7Ozs7Ozs7Ozs7O3VCQUllLEtBQUtsQixPQUFMLENBQWM7QUFDekJDLHVCQUFLLG1CQURvQjtBQUV6QkMsd0JBQU07QUFDSkMsZ0NBQVksR0FEUjtBQUVKZ0I7QUFGSTtBQUZtQixpQkFBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmOzs7Ozs7Ozs0RkFJOEJDLFM7Ozs7Ozs7QUFDeEJDLHFCLEdBQVE7QUFDVkMsMEJBQVEsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCQyxNQUExQixpQkFERTtBQUVWQyx5REFGVTtBQUdWQyx1REFIVTtBQUlWQyxnQ0FBY1IsVUFBVVEsWUFKZDtBQUtWQyxpQ0FBZUMsS0FBS0MsU0FBTCxDQUFnQjtBQUM3QkMsNkJBQVNaLFVBQVVZO0FBRFUsbUJBQWhCO0FBTEwsaUI7O3VCQVNDLEtBQUtoQyxPQUFMLENBQWM7QUFDekJDLHFDQUR5QjtBQUV6QkMsd0JBQU1tQjtBQUZtQixpQkFBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBeEZJdEIsTSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBQYWdlYmFzZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgcGF5bWVudENoYW5uZWwsIGJ1c2luZXNzUGFydHksIHBheVVybCwgdG9rZW4gfSBmcm9tICdAL3V0aWxzL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIFBhZ2ViYXNlIHtcbiAgLyoqXG4gICAqICDojrflj5bkvJfnrbnnirbmgIHmjqXlj6NcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXREZXRhaWxTdGF0dXMgKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoIHtcbiAgICAgIHVybDogJy9tbnAvcHJvZHVjdC9jZlN0YXR1cycsXG4gICAgICBkYXRhOiB7IHByb2R1Y3RfaWQ6IDE1OSB9XG4gICAgfSApO1xuICB9XG4gIC8qKlxuICAgKiAg6I635Y+W6K+m5oOF6aG15pWw5o2u5o6l5Y+jXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0RGV0YWlsRGF0YSAoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgge1xuICAgICAgdXJsOiAnL2luZm8vY2luZW1hcydcbiAgICB9ICk7XG4gIH1cbiAgc3RhdGljIGluaXRDYXJkTnVtICggZGF0YSApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtOiBgJHtkYXRhLmN1cnJlbnRfcGVyc29uX2NvdW50fS8ke2RhdGEudG90YWxfcGVyc29uX2NvdW50fWAsXG4gICAgICBwZXJjZW50OiAoIGRhdGEuY3VycmVudF9wZXJzb25fY291bnQgLyBkYXRhLnRvdGFsX3BlcnNvbl9jb3VudCAqIDEwMCApICsgJyUnXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyW5b2x6ZmiXG4gICAqL1xuICBzdGF0aWMgaW5pdENpbmVtYXMgKCBkYXRhLCBpbWcgKSB7XG4gICAgaWYgKCAhZGF0YS5sZW5ndGggKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpbWc6IGltZyxcbiAgICAgIGxpc3Q6IGRhdGEubWFwKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3NJbWc6IGl0ZW0uYWRkcmVzc19pbWcsXG4gICAgICAgICAgZ3BzOiBpdGVtLmdwcyxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWVcbiAgICAgICAgfTtcbiAgICAgIH0gKVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIOWIneWni+WMlueUteW9sVxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBEZXRhaWxcbiAgICovXG4gIHN0YXRpYyBpbml0TW92aWVzICggZGF0YSApIHtcbiAgICBpZiAoICFkYXRhLmxlbmd0aCApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5tYXAoICggaXRlbSApID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgdXJsOiBpdGVtLm1vdmllX2ltZ191cmxcbiAgICAgIH07XG4gICAgfSApO1xuICB9XG4gIC8qKlxuICAgKiDliJvlu7rorqLljZXmjqXlj6NcbiAgICovXG4gIHN0YXRpYyBhc3luYyBjcmVhdE9yZGVyICgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCB7XG4gICAgICB1cmw6ICcvbW5wL29yZGVyL2NyZWF0ZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IDE1OSxcbiAgICAgICAgcGF5X2NoYW5uZWw6IHBheW1lbnRDaGFubmVsXG4gICAgICB9XG4gICAgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluiuouWNleS/oeaBr+aOpeWPo1xuICAgKiBAcGFyYW0geyp9IGNyZWF0ZVJlcyAg5Yib5bu66K6i5Y2V55qEcmVzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0T3JkZXJEZXRhaWwgKCBjcmVhdGVSZXMgKSB7XG4gICAgdmFyIF9kYXRhID0ge1xuICAgICAgX3Rva2VuOiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnhUb2tlbiB8fCB0b2tlbixcbiAgICAgIHBheW1lbnRfY2hhbm5lbDogcGF5bWVudENoYW5uZWwsXG4gICAgICBidXNpbmVzc19wYXJ0eTogYnVzaW5lc3NQYXJ0eSxcbiAgICAgIG9yZGVyX2RldGFpbDogY3JlYXRlUmVzLm9yZGVyX2RldGFpbCxcbiAgICAgIGV4dGVuZF9wYXJhbXM6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgIG9wZW5faWQ6IGNyZWF0ZVJlcy5vcGVuX2lkXG4gICAgICB9IClcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoIHtcbiAgICAgIHVybDogcGF5VXJsLFxuICAgICAgZGF0YTogX2RhdGFcbiAgICB9ICk7XG4gIH1cbn1cbiJdfQ==