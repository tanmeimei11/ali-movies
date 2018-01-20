'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _axios = require('./../utils/axios.js');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./../utils/config.js');

var _config2 = _interopRequireDefault(_config);

var _tips = require('./../utils/tips.js');

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportSubmit = function (_wepy$component) {
  _inherits(ReportSubmit, _wepy$component);

  function ReportSubmit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReportSubmit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReportSubmit.__proto__ || Object.getPrototypeOf(ReportSubmit)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      formSubmit: function formSubmit(e) {
        _tips2.default.setLoading();
        _axios2.default.request({
          url: _config2.default.DOMAIN + '/tmpl/formid/submit',
          method: 'POST',
          data: {
            formId: e.detail.formId
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ReportSubmit;
}(_wepy2.default.component);

exports.default = ReportSubmit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1zdWJtaXQuanMiXSwibmFtZXMiOlsiUmVwb3J0U3VibWl0IiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwic2V0TG9hZGluZyIsInJlcXVlc3QiLCJ1cmwiLCJET01BSU4iLCJtZXRob2QiLCJkYXRhIiwiZm9ybUlkIiwiZGV0YWlsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0lDLENBREosRUFDTztBQUNiLHVCQUFLQyxVQUFMO0FBQ0Esd0JBQU1DLE9BQU4sQ0FBYztBQUNaQyxlQUFLLGlCQUFPQyxNQUFQLEdBQWdCLHFCQURUO0FBRVpDLGtCQUFRLE1BRkk7QUFHWkMsZ0JBQU07QUFDSkMsb0JBQVFQLEVBQUVRLE1BQUYsQ0FBU0Q7QUFEYjtBQUhNLFNBQWQ7QUFPRDtBQVZPLEs7Ozs7RUFEOEIsZUFBS0UsUzs7a0JBQTFCWixZIiwiZmlsZSI6InJlcG9ydC1zdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXhpb3MgZnJvbSAnQC91dGlscy9heGlvcydcbmltcG9ydCBjb25maWcgZnJvbSAnQC91dGlscy9jb25maWcnXG5pbXBvcnQgdGlwcyBmcm9tICdAL3V0aWxzL3RpcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydFN1Ym1pdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0IChlKSB7XG4gICAgICB0aXBzLnNldExvYWRpbmcoKVxuICAgICAgYXhpb3MucmVxdWVzdCh7XG4gICAgICAgIHVybDogY29uZmlnLkRPTUFJTiArICcvdG1wbC9mb3JtaWQvc3VibWl0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBmb3JtSWQ6IGUuZGV0YWlsLmZvcm1JZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19