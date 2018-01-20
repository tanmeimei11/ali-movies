'use strict';

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mockConfig = require('./../mock/mockConfig.js');

var _mockConfig2 = _interopRequireDefault(_mockConfig);

var _config = require('./config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var requestBefore = function requestBefore(option, token) {
  !option.data && (option.data = {});

  !/^http/.test(option.url) && (option.url = _config.DOMAIN + option.url);
  // 添加必要的辅助字断
  // var deviceInfo = getApp().getDeviceInfo()
  var cookieObj = {
    // 'tg_auth': token
    'tg_auth': '12314'
    // '_v': config._v,
    // 'wxv': deviceInfo.version,
    // '_s': `${deviceInfo.platform.toLowerCase()}_wxminiprogram`,
    // '_sys': deviceInfo.system.toLowerCase(),
    // '_gps': deviceInfo.gps || ''

    // option.data = {
    //   ...option.data,
    //   ...cookieObj
    // }
  };if (!option.header) {
    option.header = {};
  }
  option.header.Cookie = Object.keys(cookieObj).map(function (key) {
    return key + '=' + cookieObj[key];
  }).join(';');

  console.log(option);
  // 支付网关必须加上必要字段_token
  if (/payment\/signature/.test(option.url)) {
    option.data._token = token;
  }
  option.data.privateKey = token;
  // 请求带上来源
  // option.data.from = wx.getStorageSync('from')
};

/**
 * 请求函数
 * @param {*} option
 */

var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
    var reqRes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // var token = wx.getStorageSync('token') || ''
            requestBefore(option, '');

            if (!_config.isMock) {
              _context.next = 5;
              break;
            }

            console.log(option.url, _mockConfig2.default[option.url]);
            console.log(require('../mock/' + _mockConfig2.default[option.url]));
            return _context.abrupt('return', require('../mock/' + _mockConfig2.default[option.url]));

          case 5:
            _context.next = 7;
            return _wepy2.default.request(option);

          case 7:
            reqRes = _context.sent;
            return _context.abrupt('return', reqRes.data);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  request: request
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdEJlZm9yZSIsIm9wdGlvbiIsInRva2VuIiwiZGF0YSIsInRlc3QiLCJ1cmwiLCJjb29raWVPYmoiLCJoZWFkZXIiLCJDb29raWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJfdG9rZW4iLCJwcml2YXRlS2V5IiwicmVxdWVzdCIsInJlcXVpcmUiLCJyZXFSZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDckMsR0FBQ0QsT0FBT0UsSUFBUixLQUFpQkYsT0FBT0UsSUFBUCxHQUFjLEVBQS9COztBQUVBLEdBQUMsUUFBUUMsSUFBUixDQUFhSCxPQUFPSSxHQUFwQixDQUFELEtBQThCSixPQUFPSSxHQUFQLEdBQWEsaUJBQVNKLE9BQU9JLEdBQTNEO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLFlBQVk7QUFDZDtBQUNBLGVBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBWmdCLEdBQWhCLENBYUEsSUFBSSxDQUFDTCxPQUFPTSxNQUFaLEVBQW9CO0FBQ2xCTixXQUFPTSxNQUFQLEdBQWdCLEVBQWhCO0FBQ0Q7QUFDRE4sU0FBT00sTUFBUCxDQUFjQyxNQUFkLEdBQXVCQyxPQUFPQyxJQUFQLENBQVlKLFNBQVosRUFBdUJLLEdBQXZCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUN6RCxXQUFVQSxHQUFWLFNBQWlCTixVQUFVTSxHQUFWLENBQWpCO0FBQ0QsR0FGc0IsRUFFcEJDLElBRm9CLENBRWYsR0FGZSxDQUF2Qjs7QUFJQUMsVUFBUUMsR0FBUixDQUFZZCxNQUFaO0FBQ0E7QUFDQSxNQUFJLHFCQUFxQkcsSUFBckIsQ0FBMEJILE9BQU9JLEdBQWpDLENBQUosRUFBMkM7QUFDekNKLFdBQU9FLElBQVAsQ0FBWWEsTUFBWixHQUFxQmQsS0FBckI7QUFDRDtBQUNERCxTQUFPRSxJQUFQLENBQVljLFVBQVosR0FBeUJmLEtBQXpCO0FBQ0E7QUFDQTtBQUNELENBbENEOztBQW9DQTs7Ozs7QUFLQSxJQUFJZ0I7QUFBQSxxRUFBVSxpQkFBZ0JqQixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWjtBQUNBRCwwQkFBY0MsTUFBZCxFQUFzQixFQUF0Qjs7QUFGWTtBQUFBO0FBQUE7QUFBQTs7QUFJVmEsb0JBQVFDLEdBQVIsQ0FBWWQsT0FBT0ksR0FBbkIsRUFBd0IscUJBQVdKLE9BQU9JLEdBQWxCLENBQXhCO0FBQ0FTLG9CQUFRQyxHQUFSLENBQVlJLFFBQVEsYUFBYSxxQkFBV2xCLE9BQU9JLEdBQWxCLENBQXJCLENBQVo7QUFMVSw2Q0FNSGMsUUFBUSxhQUFhLHFCQUFXbEIsT0FBT0ksR0FBbEIsQ0FBckIsQ0FORzs7QUFBQTtBQUFBO0FBQUEsbUJBU08sZUFBS2EsT0FBTCxDQUFhakIsTUFBYixDQVRQOztBQUFBO0FBU1JtQixrQkFUUTtBQUFBLDZDQVVMQSxPQUFPakIsSUFWRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUo7O0FBYUFrQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZKO0FBRGUsQ0FBakIiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBtb2NrQ29uZmlnIGZyb20gJ0AvbW9jay9tb2NrQ29uZmlnJ1xuaW1wb3J0IHtET01BSU4sIGlzTW9ja30gZnJvbSAnLi9jb25maWcnXG5cbnZhciByZXF1ZXN0QmVmb3JlID0gKG9wdGlvbiwgdG9rZW4pID0+IHtcbiAgIW9wdGlvbi5kYXRhICYmIChvcHRpb24uZGF0YSA9IHt9KVxuXG4gICEvXmh0dHAvLnRlc3Qob3B0aW9uLnVybCkgJiYgKG9wdGlvbi51cmwgPSBET01BSU4gKyBvcHRpb24udXJsKVxuICAvLyDmt7vliqDlv4XopoHnmoTovoXliqnlrZfmlq1cbiAgLy8gdmFyIGRldmljZUluZm8gPSBnZXRBcHAoKS5nZXREZXZpY2VJbmZvKClcbiAgdmFyIGNvb2tpZU9iaiA9IHtcbiAgICAvLyAndGdfYXV0aCc6IHRva2VuXG4gICAgJ3RnX2F1dGgnOiAnMTIzMTQnXG4gICAgLy8gJ192JzogY29uZmlnLl92LFxuICAgIC8vICd3eHYnOiBkZXZpY2VJbmZvLnZlcnNpb24sXG4gICAgLy8gJ19zJzogYCR7ZGV2aWNlSW5mby5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpfV93eG1pbmlwcm9ncmFtYCxcbiAgICAvLyAnX3N5cyc6IGRldmljZUluZm8uc3lzdGVtLnRvTG93ZXJDYXNlKCksXG4gICAgLy8gJ19ncHMnOiBkZXZpY2VJbmZvLmdwcyB8fCAnJ1xuICB9XG4gIC8vIG9wdGlvbi5kYXRhID0ge1xuICAvLyAgIC4uLm9wdGlvbi5kYXRhLFxuICAvLyAgIC4uLmNvb2tpZU9ialxuICAvLyB9XG4gIGlmICghb3B0aW9uLmhlYWRlcikge1xuICAgIG9wdGlvbi5oZWFkZXIgPSB7fVxuICB9XG4gIG9wdGlvbi5oZWFkZXIuQ29va2llID0gT2JqZWN0LmtleXMoY29va2llT2JqKS5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiBgJHtrZXl9PSR7Y29va2llT2JqW2tleV19YFxuICB9KS5qb2luKCc7JylcblxuICBjb25zb2xlLmxvZyhvcHRpb24pXG4gIC8vIOaUr+S7mOe9keWFs+W/hemhu+WKoOS4iuW/heimgeWtl+autV90b2tlblxuICBpZiAoL3BheW1lbnRcXC9zaWduYXR1cmUvLnRlc3Qob3B0aW9uLnVybCkpIHtcbiAgICBvcHRpb24uZGF0YS5fdG9rZW4gPSB0b2tlblxuICB9XG4gIG9wdGlvbi5kYXRhLnByaXZhdGVLZXkgPSB0b2tlblxuICAvLyDor7fmsYLluKbkuIrmnaXmupBcbiAgLy8gb3B0aW9uLmRhdGEuZnJvbSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdmcm9tJylcbn1cblxuLyoqXG4gKiDor7fmsYLlh73mlbBcbiAqIEBwYXJhbSB7Kn0gb3B0aW9uXG4gKi9cblxudmFyIHJlcXVlc3QgPSBhc3luYyBmdW5jdGlvbiAob3B0aW9uKSB7XG4gIC8vIHZhciB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpIHx8ICcnXG4gIHJlcXVlc3RCZWZvcmUob3B0aW9uLCAnJylcbiAgaWYgKGlzTW9jaykge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbi51cmwsIG1vY2tDb25maWdbb3B0aW9uLnVybF0pXG4gICAgY29uc29sZS5sb2cocmVxdWlyZSgnLi4vbW9jay8nICsgbW9ja0NvbmZpZ1tvcHRpb24udXJsXSkpXG4gICAgcmV0dXJuIHJlcXVpcmUoJy4uL21vY2svJyArIG1vY2tDb25maWdbb3B0aW9uLnVybF0pXG4gIH1cbiAgLy8gTE9HKCdzdGFydCByZXF1ZXN0IG9wdGlvbjonLCBvcHRpb24pXG4gIHZhciByZXFSZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qob3B0aW9uKVxuICByZXR1cm4gcmVxUmVzLmRhdGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlcXVlc3Rcbn1cbiJdfQ==