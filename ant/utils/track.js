'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../api/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 埋点请求
 * @param {*} action 埋点参数
 * @param {*} params 辅助对象参数
 * @param {*} prefix 埋点前缀默认 h5_wechat_
 */
exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(action, params) {
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'h5_wechat_';

    var _wepy$$instance$globa, machine_code, uid, platform;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _base2.default.ready();

          case 2:
            _wepy$$instance$globa = _wepy2.default.$instance.globalData, machine_code = _wepy$$instance$globa.machine_code, uid = _wepy$$instance$globa.uid, platform = _wepy$$instance$globa.WechatApp;

            _wepy2.default.request({
              url: 'https://webclick.jiuyan.info/xixingdafa.html',
              data: Object.assign({
                uid: uid,
                platform: platform,
                machine_code: machine_code,
                action: '' + prefix + action
              }, params)
            });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function track(_x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return track;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLmpzIl0sIm5hbWVzIjpbImFjdGlvbiIsInBhcmFtcyIsInByZWZpeCIsInJlYWR5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1hY2hpbmVfY29kZSIsInVpZCIsInBsYXRmb3JtIiwiV2VjaGF0QXBwIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0cmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztxRUFNZSxpQkFBcUJBLE1BQXJCLEVBQTZCQyxNQUE3QjtBQUFBLFFBQXFDQyxNQUFyQyx1RUFBOEMsWUFBOUM7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQLGVBQUtDLEtBQUwsRUFETzs7QUFBQTtBQUFBLG9DQUVzQyxlQUFLQyxTQUFMLENBQWVDLFVBRnJELEVBRUxDLFlBRksseUJBRUxBLFlBRkssRUFFU0MsR0FGVCx5QkFFU0EsR0FGVCxFQUV5QkMsUUFGekIseUJBRWNDLFNBRmQ7O0FBR2IsMkJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxtQkFBSyw4Q0FETTtBQUVYQyxvQkFBTUMsT0FBT0MsTUFBUCxDQUFjO0FBQ2xCUCx3QkFEa0I7QUFFbEJDLGtDQUZrQjtBQUdsQkYsMENBSGtCO0FBSWxCTiw2QkFBV0UsTUFBWCxHQUFvQkY7QUFKRixlQUFkLEVBS0hDLE1BTEc7QUFGSyxhQUFiOztBQUhhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVjLEs7Ozs7U0FBQUEsSyIsImZpbGUiOiJ0cmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYmFzZSBmcm9tICdAL2FwaS9iYXNlJ1xuXG4vKipcbiAqIOWfi+eCueivt+axglxuICogQHBhcmFtIHsqfSBhY3Rpb24g5Z+L54K55Y+C5pWwXG4gKiBAcGFyYW0geyp9IHBhcmFtcyDovoXliqnlr7nosaHlj4LmlbBcbiAqIEBwYXJhbSB7Kn0gcHJlZml4IOWfi+eCueWJjee8gOm7mOiupCBoNV93ZWNoYXRfXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrKGFjdGlvbiwgcGFyYW1zLCBwcmVmaXggPSAnaDVfd2VjaGF0XycpIHtcbiAgYXdhaXQgYmFzZS5yZWFkeSgpXG4gIGNvbnN0IHsgbWFjaGluZV9jb2RlLCB1aWQsIFdlY2hhdEFwcDogcGxhdGZvcm0gfSA9IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGFcbiAgd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6ICdodHRwczovL3dlYmNsaWNrLmppdXlhbi5pbmZvL3hpeGluZ2RhZmEuaHRtbCcsXG4gICAgZGF0YTogT2JqZWN0LmFzc2lnbih7XG4gICAgICB1aWQsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIG1hY2hpbmVfY29kZSxcbiAgICAgIGFjdGlvbjogYCR7cHJlZml4fSR7YWN0aW9ufWBcbiAgICB9LCBwYXJhbXMpXG4gIH0pXG59XG4iXX0=