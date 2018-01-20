'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _page = require('./page.js');

var _page2 = _interopRequireDefault(_page);

var _common = require('./../utils/common.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Self = function (_Pagebase) {
  _inherits(Self, _Pagebase);

  function Self() {
    _classCallCheck(this, Self);

    return _possibleConstructorReturn(this, (Self.__proto__ || Object.getPrototypeOf(Self)).apply(this, arguments));
  }

  _createClass(Self, null, [{
    key: 'getMyInfo',

    /**
     * 获取我的信息接口
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request({
                  url: '/mnp/user/my'
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

      function getMyInfo() {
        return _ref.apply(this, arguments);
      }

      return getMyInfo;
    }()

    /**
     *时间转换
     * @param {*} sTime
     * @param {*} eTime
     */

  }, {
    key: 'getCardTime',
    value: function getCardTime(sTime, eTime) {
      return (0, _common.formatTime)(sTime) + '- ' + (0, _common.formatTime)(eTime);
    }

    /**
     * 初始化卡片信息
     * @param {*} cards  已经获得的卡片
     * @param {*} defaultCard  默认卡
     */

  }, {
    key: 'initCardInfo',
    value: function initCardInfo(cards, defaultCard) {
      var _this2 = this;

      if (!cards || !cards.length) {
        return [{
          title: defaultCard.name,
          desc: defaultCard.desc,
          num: 'NO.' + defaultCard.card_no,
          isApply: true
        }];
      }
      return cards.map(function (item) {
        return {
          id: item.id,
          title: item.name,
          desc: item.desc,
          time: _this2.getCardTime(item.start_date, item.end_date),
          num: 'NO.' + item.card_no
        };
      });
    }

    /**
     * 初始化用户信息
     * @param {*} data
     */

  }, {
    key: 'initUserInfo',
    value: function initUserInfo(data) {
      return {
        avatar: data.avatar,
        name: data.nick_name,
        phone: data.phone
      };
    }
    /**
     * 初始化规则
     * @param {*} data
     */

  }, {
    key: 'initRules',
    value: function initRules(rules) {
      if (!rules || !rules.length) {
        return [];
      }
      return rules;
    }
  }]);

  return Self;
}(_page2.default);

exports.default = Self;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsInJlcXVlc3QiLCJ1cmwiLCJzVGltZSIsImVUaW1lIiwiY2FyZHMiLCJkZWZhdWx0Q2FyZCIsImxlbmd0aCIsInRpdGxlIiwibmFtZSIsImRlc2MiLCJudW0iLCJjYXJkX25vIiwiaXNBcHBseSIsIm1hcCIsIml0ZW0iLCJpZCIsInRpbWUiLCJnZXRDYXJkVGltZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImRhdGEiLCJhdmF0YXIiLCJuaWNrX25hbWUiLCJwaG9uZSIsInJ1bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7OztBQUNuQjs7Ozs7Ozs7Ozt1QkFJZSxLQUFLQyxPQUFMLENBQWE7QUFDeEJDLHVCQUFLO0FBRG1CLGlCQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7Ozs7Ozs7O2dDQUttQkMsSyxFQUFPQyxLLEVBQU87QUFDL0IsYUFBVSx3QkFBV0QsS0FBWCxDQUFWLFVBQWdDLHdCQUFXQyxLQUFYLENBQWhDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2lDQUtvQkMsSyxFQUFPQyxXLEVBQWE7QUFBQTs7QUFDdEMsVUFBSSxDQUFDRCxLQUFELElBQVUsQ0FBQ0EsTUFBTUUsTUFBckIsRUFBNkI7QUFDM0IsZUFBTyxDQUFDO0FBQ05DLGlCQUFPRixZQUFZRyxJQURiO0FBRU5DLGdCQUFNSixZQUFZSSxJQUZaO0FBR05DLHVCQUFXTCxZQUFZTSxPQUhqQjtBQUlOQyxtQkFBUztBQUpILFNBQUQsQ0FBUDtBQU1EO0FBQ0QsYUFBT1IsTUFBTVMsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUN6QixlQUFPO0FBQ0xDLGNBQUlELEtBQUtDLEVBREo7QUFFTFIsaUJBQU9PLEtBQUtOLElBRlA7QUFHTEMsZ0JBQU1LLEtBQUtMLElBSE47QUFJTE8sZ0JBQU0sT0FBS0MsV0FBTCxDQUFpQkgsS0FBS0ksVUFBdEIsRUFBa0NKLEtBQUtLLFFBQXZDLENBSkQ7QUFLTFQsdUJBQVdJLEtBQUtIO0FBTFgsU0FBUDtBQU9ELE9BUk0sQ0FBUDtBQVNEOztBQUVEOzs7Ozs7O2lDQUlvQlMsSSxFQUFNO0FBQ3hCLGFBQU87QUFDTEMsZ0JBQVFELEtBQUtDLE1BRFI7QUFFTGIsY0FBTVksS0FBS0UsU0FGTjtBQUdMQyxlQUFPSCxLQUFLRztBQUhQLE9BQVA7QUFLRDtBQUNEOzs7Ozs7OzhCQUlpQkMsSyxFQUFPO0FBQ3RCLFVBQUksQ0FBQ0EsS0FBRCxJQUFVLENBQUNBLE1BQU1sQixNQUFyQixFQUE2QjtBQUMzQixlQUFPLEVBQVA7QUFDRDtBQUNELGFBQU9rQixLQUFQO0FBQ0Q7Ozs7OztrQkFoRWtCekIsSSIsImZpbGUiOiJzZWxmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2ViYXNlIGZyb20gJy4vcGFnZSdcbmltcG9ydCB7Zm9ybWF0VGltZX0gZnJvbSAnQC91dGlscy9jb21tb24nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxmIGV4dGVuZHMgUGFnZWJhc2Uge1xuICAvKipcbiAgICog6I635Y+W5oiR55qE5L+h5oGv5o6l5Y+jXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TXlJbmZvKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnL21ucC91c2VyL215J1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICrml7bpl7TovazmjaJcbiAgICogQHBhcmFtIHsqfSBzVGltZVxuICAgKiBAcGFyYW0geyp9IGVUaW1lXG4gICAqL1xuICBzdGF0aWMgZ2V0Q2FyZFRpbWUoc1RpbWUsIGVUaW1lKSB7XG4gICAgcmV0dXJuIGAke2Zvcm1hdFRpbWUoc1RpbWUpfS0gJHtmb3JtYXRUaW1lKGVUaW1lKX1gXG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyW5Y2h54mH5L+h5oGvXG4gICAqIEBwYXJhbSB7Kn0gY2FyZHMgIOW3sue7j+iOt+W+l+eahOWNoeeJh1xuICAgKiBAcGFyYW0geyp9IGRlZmF1bHRDYXJkICDpu5jorqTljaFcbiAgICovXG4gIHN0YXRpYyBpbml0Q2FyZEluZm8oY2FyZHMsIGRlZmF1bHRDYXJkKSB7XG4gICAgaWYgKCFjYXJkcyB8fCAhY2FyZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgdGl0bGU6IGRlZmF1bHRDYXJkLm5hbWUsXG4gICAgICAgIGRlc2M6IGRlZmF1bHRDYXJkLmRlc2MsXG4gICAgICAgIG51bTogYE5PLiR7ZGVmYXVsdENhcmQuY2FyZF9ub31gLFxuICAgICAgICBpc0FwcGx5OiB0cnVlXG4gICAgICB9XVxuICAgIH1cbiAgICByZXR1cm4gY2FyZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgZGVzYzogaXRlbS5kZXNjLFxuICAgICAgICB0aW1lOiB0aGlzLmdldENhcmRUaW1lKGl0ZW0uc3RhcnRfZGF0ZSwgaXRlbS5lbmRfZGF0ZSksXG4gICAgICAgIG51bTogYE5PLiR7aXRlbS5jYXJkX25vfWBcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMlueUqOaIt+S/oeaBr1xuICAgKiBAcGFyYW0geyp9IGRhdGFcbiAgICovXG4gIHN0YXRpYyBpbml0VXNlckluZm8oZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyLFxuICAgICAgbmFtZTogZGF0YS5uaWNrX25hbWUsXG4gICAgICBwaG9uZTogZGF0YS5waG9uZVxuICAgIH1cbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyW6KeE5YiZXG4gICAqIEBwYXJhbSB7Kn0gZGF0YVxuICAgKi9cbiAgc3RhdGljIGluaXRSdWxlcyhydWxlcykge1xuICAgIGlmICghcnVsZXMgfHwgIXJ1bGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiBydWxlc1xuICB9XG59XG4iXX0=