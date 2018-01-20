'use strict';

var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./config.js');

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pay = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var createRes, tradePayRes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.request({
              url: '/mnp/order/create',
              data: {
                product_id: 159,
                pay_channel: _config.payment_channel
              }
            });

          case 2:
            createRes = _context.sent;


            // 进行微信支付
            if (createRes.succ) {
              _axios2.default.request({
                url: _config.payUrl,
                data: {
                  payment_channel: _config.payment_channel,
                  business_party: _config.business_party,
                  order_detail: createRes.data.order_detail,
                  extend_params: JSON.stringify({
                    open_id: createRes.data.open_id
                  })
                }
              });
            }

            _context.next = 6;
            return _wepy2.default.tradePay({
              orderStr: 'myOrderStr' // 即上述服务端已经加签的orderSr参数
            });

          case 6:
            tradePayRes = _context.sent;


            _wepy2.default.alert(tradePayRes.resultCode);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function pay() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = pay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJwYXkiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsInByb2R1Y3RfaWQiLCJwYXlfY2hhbm5lbCIsImNyZWF0ZVJlcyIsInN1Y2MiLCJwYXltZW50X2NoYW5uZWwiLCJidXNpbmVzc19wYXJ0eSIsIm9yZGVyX2RldGFpbCIsImV4dGVuZF9wYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5Iiwib3Blbl9pZCIsInRyYWRlUGF5Iiwib3JkZXJTdHIiLCJ0cmFkZVBheVJlcyIsImFsZXJ0IiwicmVzdWx0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFJQTtBQUFBLHFFQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2MsZ0JBQUtDLE9BQUwsQ0FBYTtBQUNqQ0MsbUJBQUssbUJBRDRCO0FBRWpDQyxvQkFBTTtBQUNKQyw0QkFBWSxHQURSO0FBRUpDO0FBRkk7QUFGMkIsYUFBYixDQURkOztBQUFBO0FBQ0pDLHFCQURJOzs7QUFTUjtBQUNBLGdCQUFJQSxVQUFVQyxJQUFkLEVBQW9CO0FBQ2xCLDhCQUFLTixPQUFMLENBQWE7QUFDWEMsbUNBRFc7QUFFWEMsc0JBQU07QUFDSkssMERBREk7QUFFSkMsd0RBRkk7QUFHSkMsZ0NBQWNKLFVBQVVILElBQVYsQ0FBZU8sWUFIekI7QUFJSkMsaUNBQWVDLEtBQUtDLFNBQUwsQ0FBZTtBQUM1QkMsNkJBQVNSLFVBQVVILElBQVYsQ0FBZVc7QUFESSxtQkFBZjtBQUpYO0FBRkssZUFBYjtBQVdEOztBQXRCTztBQUFBLG1CQXdCZ0IsZUFBS0MsUUFBTCxDQUFjO0FBQ3BDQyx3QkFBVSxZQUQwQixDQUNaO0FBRFksYUFBZCxDQXhCaEI7O0FBQUE7QUF3QkpDLHVCQXhCSTs7O0FBNEJSLDJCQUFLQyxLQUFMLENBQVdELFlBQVlFLFVBQXZCOztBQTVCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUo7O0FBK0JBQyxPQUFPQyxPQUFQLEdBQWlCckIsR0FBakIiLCJmaWxlIjoicGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9heGlvcydcbmltcG9ydCB7cGF5bWVudF9jaGFubmVsLCBidXNpbmVzc19wYXJ0eSwgcGF5VXJsfSBmcm9tICcuL2NvbmZpZydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG52YXIgcGF5ID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgY3JlYXRlUmVzID0gYXdhaXQgaHR0cC5yZXF1ZXN0KHtcbiAgICB1cmw6ICcvbW5wL29yZGVyL2NyZWF0ZScsXG4gICAgZGF0YToge1xuICAgICAgcHJvZHVjdF9pZDogMTU5LFxuICAgICAgcGF5X2NoYW5uZWw6IHBheW1lbnRfY2hhbm5lbFxuICAgIH1cbiAgfSlcblxuICAvLyDov5vooYzlvq7kv6HmlK/ku5hcbiAgaWYgKGNyZWF0ZVJlcy5zdWNjKSB7XG4gICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgIHVybDogcGF5VXJsLFxuICAgICAgZGF0YToge1xuICAgICAgICBwYXltZW50X2NoYW5uZWw6IHBheW1lbnRfY2hhbm5lbCxcbiAgICAgICAgYnVzaW5lc3NfcGFydHk6IGJ1c2luZXNzX3BhcnR5LFxuICAgICAgICBvcmRlcl9kZXRhaWw6IGNyZWF0ZVJlcy5kYXRhLm9yZGVyX2RldGFpbCxcbiAgICAgICAgZXh0ZW5kX3BhcmFtczogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG9wZW5faWQ6IGNyZWF0ZVJlcy5kYXRhLm9wZW5faWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdmFyIHRyYWRlUGF5UmVzID0gYXdhaXQgd2VweS50cmFkZVBheSh7XG4gICAgb3JkZXJTdHI6ICdteU9yZGVyU3RyJyAgLy8g5Y2z5LiK6L+w5pyN5Yqh56uv5bey57uP5Yqg562+55qEb3JkZXJTcuWPguaVsFxuICB9KVxuXG4gIHdlcHkuYWxlcnQodHJhZGVQYXlSZXMucmVzdWx0Q29kZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXlcbiJdfQ==