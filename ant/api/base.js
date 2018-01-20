'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _axios = require('./../utils/axios.js');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./../utils/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base = function () {
  function base() {
    _classCallCheck(this, base);
  }

  _createClass(base, null, [{
    key: 'upload',


    /**
     * upload
     * 上传图片，最大上传量9张（微信限制）
     * @param {array} files
     * @retuen urlArray
     */

    // 上传资源域名
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(files) {
        var _this = this;

        var isParallel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var qiniu, promises, urls, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, promise;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.get(this.baseUrl + '/qiniu-tokens', { data: { count: files.length } });

              case 2:
                qiniu = _context2.sent;
                promises = files.map(function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filePath, index) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _wepy2.default.uploadFile({ url: _this.uploadUrl, name: 'file', filePath: filePath, formData: { token: qiniu.token, key: qiniu.key[index] } }).then(function (_ref3) {
                              var statusCode = _ref3.statusCode,
                                  data = _ref3.data;
                              return statusCode === 200 ? JSON.parse(data) : new Error('\u6355\u83B7\u4E0A\u4F20\u6587\u4EF6\u5F02\u5E38 at ' + _this.uploadUrl + ' statusCode: ' + statusCode);
                            });

                          case 2:
                            return _context.abrupt('return', _context.sent);

                          case 3:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                urls = [];

                // 并发上传

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 8;
                _iterator = promises[Symbol.iterator]();

              case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 22;
                  break;
                }

                promise = _step.value;
                _context2.t0 = urls;
                _context2.t1 = this.assetsUrl;
                _context2.next = 16;
                return promise;

              case 16:
                _context2.t2 = _context2.sent['key'];
                _context2.t3 = _context2.t1 + _context2.t2;

                _context2.t0.push.call(_context2.t0, _context2.t3);

              case 19:
                _iteratorNormalCompletion = true;
                _context2.next = 10;
                break;

              case 22:
                _context2.next = 28;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t4 = _context2['catch'](8);
                _didIteratorError = true;
                _iteratorError = _context2.t4;

              case 28:
                _context2.prev = 28;
                _context2.prev = 29;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 31:
                _context2.prev = 31;

                if (!_didIteratorError) {
                  _context2.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context2.finish(31);

              case 35:
                return _context2.finish(28);

              case 36:
                return _context2.abrupt('return', urls);

              case 37:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 24, 28, 36], [29,, 31, 35]]);
      }));

      function upload(_x2) {
        return _ref.apply(this, arguments);
      }

      return upload;
    }()
    // 资源存储域名

    // 数据交互域名

  }]);

  return base;
}();

base.baseUrl = _config.DOMAIN;
base.uploadUrl = 'https://upload.qiniup.com/';
base.assetsUrl = 'https://static.in66.co/';
base.get = _axios2.default.get.bind(_axios2.default);
base.post = _axios2.default.post.bind(_axios2.default);
exports.default = base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiYmFzZSIsImZpbGVzIiwiaXNQYXJhbGxlbCIsImdldCIsImJhc2VVcmwiLCJkYXRhIiwiY291bnQiLCJsZW5ndGgiLCJxaW5pdSIsInByb21pc2VzIiwibWFwIiwiZmlsZVBhdGgiLCJpbmRleCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJ1cGxvYWRVcmwiLCJuYW1lIiwiZm9ybURhdGEiLCJ0b2tlbiIsImtleSIsInRoZW4iLCJzdGF0dXNDb2RlIiwiSlNPTiIsInBhcnNlIiwiRXJyb3IiLCJ1cmxzIiwicHJvbWlzZSIsImFzc2V0c1VybCIsInB1c2giLCJiaW5kIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7O0FBV25COzs7Ozs7O0FBUkE7OzJGQWNxQkMsSzs7O1lBQU9DLFUsdUVBQWEsSTs7Ozs7Ozs7O3VCQUNuQixLQUFLQyxHQUFMLENBQVksS0FBS0MsT0FBakIsb0JBQXlDLEVBQUVDLE1BQU0sRUFBRUMsT0FBT0wsTUFBTU0sTUFBZixFQUFSLEVBQXpDLEM7OztBQUFkQyxxQjtBQUNBQyx3QixHQUFXUixNQUFNUyxHQUFOO0FBQUEsc0ZBQVUsaUJBQU9DLFFBQVAsRUFBaUJDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFpQyxlQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUssTUFBS0MsU0FBWixFQUF1QkMsTUFBTSxNQUE3QixFQUFxQ0wsa0JBQXJDLEVBQStDTSxVQUFVLEVBQUVDLE9BQU9WLE1BQU1VLEtBQWYsRUFBc0JDLEtBQUtYLE1BQU1XLEdBQU4sQ0FBVVAsS0FBVixDQUEzQixFQUF6RCxFQUFoQixFQUEwSFEsSUFBMUgsQ0FBK0g7QUFBQSxrQ0FBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsa0NBQWVoQixJQUFmLFNBQWVBLElBQWY7QUFBQSxxQ0FBMEJnQixlQUFlLEdBQWYsR0FBcUJDLEtBQUtDLEtBQUwsQ0FBV2xCLElBQVgsQ0FBckIsR0FBd0MsSUFBSW1CLEtBQUosMERBQXlCLE1BQUtULFNBQTlCLHFCQUF1RE0sVUFBdkQsQ0FBbEU7QUFBQSw2QkFBL0gsQ0FBakM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQjtBQUNYSSxvQixHQUFPLEU7O0FBRWI7Ozs7Ozs0QkFDb0JoQixROzs7Ozs7OztBQUFYaUIsdUI7K0JBQ1BELEk7K0JBQVUsS0FBS0UsUzs7dUJBQW1CRCxPOzs7OENBQVMsSzs7OzZCQUF0Q0UsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQVFBSCxJOzs7Ozs7Ozs7Ozs7Ozs7O0FBM0JUOztBQUpBOzs7Ozs7O0FBRG1CekIsSSxDQUVaSSxPO0FBRllKLEksQ0FJWmUsUyxHQUFZLDRCO0FBSkFmLEksQ0FNWjJCLFMsR0FBWSx5QjtBQU5BM0IsSSxDQVFaRyxHLEdBQU0sZ0JBQU1BLEdBQU4sQ0FBVTBCLElBQVYsaUI7QUFSTTdCLEksQ0FTWjhCLEksR0FBTyxnQkFBTUEsSUFBTixDQUFXRCxJQUFYLGlCO2tCQVRLN0IsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBheGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJ1xuaW1wb3J0IHtET01BSU59IGZyb20gJ0AvdXRpbHMvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYXNlIHtcbiAgLy8g5pWw5o2u5Lqk5LqS5Z+f5ZCNXG4gIHN0YXRpYyBiYXNlVXJsID0gRE9NQUlOXG4gIC8vIOS4iuS8oOi1hOa6kOWfn+WQjVxuICBzdGF0aWMgdXBsb2FkVXJsID0gJ2h0dHBzOi8vdXBsb2FkLnFpbml1cC5jb20vJ1xuICAvLyDotYTmupDlrZjlgqjln5/lkI1cbiAgc3RhdGljIGFzc2V0c1VybCA9ICdodHRwczovL3N0YXRpYy5pbjY2LmNvLydcblxuICBzdGF0aWMgZ2V0ID0gYXhpb3MuZ2V0LmJpbmQoYXhpb3MpXG4gIHN0YXRpYyBwb3N0ID0gYXhpb3MucG9zdC5iaW5kKGF4aW9zKVxuXG4gIC8qKlxuICAgKiB1cGxvYWRcbiAgICog5LiK5Lyg5Zu+54mH77yM5pyA5aSn5LiK5Lyg6YePOeW8oO+8iOW+ruS/oemZkOWItu+8iVxuICAgKiBAcGFyYW0ge2FycmF5fSBmaWxlc1xuICAgKiBAcmV0dWVuIHVybEFycmF5XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgdXBsb2FkIChmaWxlcywgaXNQYXJhbGxlbCA9IHRydWUpIHtcbiAgICBjb25zdCBxaW5pdSA9IGF3YWl0IHRoaXMuZ2V0KGAke3RoaXMuYmFzZVVybH0vcWluaXUtdG9rZW5zYCwgeyBkYXRhOiB7IGNvdW50OiBmaWxlcy5sZW5ndGggfSB9KVxuICAgIGNvbnN0IHByb21pc2VzID0gZmlsZXMubWFwKGFzeW5jIChmaWxlUGF0aCwgaW5kZXgpID0+IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7IHVybDogdGhpcy51cGxvYWRVcmwsIG5hbWU6ICdmaWxlJywgZmlsZVBhdGgsIGZvcm1EYXRhOiB7IHRva2VuOiBxaW5pdS50b2tlbiwga2V5OiBxaW5pdS5rZXlbaW5kZXhdIH0gfSkudGhlbigoeyBzdGF0dXNDb2RlLCBkYXRhIH0pID0+IHN0YXR1c0NvZGUgPT09IDIwMCA/IEpTT04ucGFyc2UoZGF0YSkgOiBuZXcgRXJyb3IoYOaNleiOt+S4iuS8oOaWh+S7tuW8guW4uCBhdCAke3RoaXMudXBsb2FkVXJsfSBzdGF0dXNDb2RlOiAke3N0YXR1c0NvZGV9YCkpKVxuICAgIGNvbnN0IHVybHMgPSBbXVxuXG4gICAgLy8g5bm25Y+R5LiK5LygXG4gICAgZm9yIChsZXQgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuICAgICAgdXJscy5wdXNoKHRoaXMuYXNzZXRzVXJsICsgKGF3YWl0IHByb21pc2UpWydrZXknXSlcbiAgICB9XG5cbiAgICAvLyDnu6flj5FcbiAgICAvLyBmb3IgKGxldCBbaW5kZXgsIGZpbGVQYXRoXSBvZiBmaWxlcy5lbnRyaWVzKCkpIHtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MudXBsb2FkKGZpbGVQYXRoLCBxaW5pdS50b2tlbiwgcWluaXUua2V5c1tpbmRleF0pXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHVybHNcbiAgfVxufVxuIl19