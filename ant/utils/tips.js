'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'success',


    /**
     * 弹出提示框
     */
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

      my.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        my.confirm({
          title: title,
          content: text,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      my.showToast({
        content: title,
        type: icon,
        duration: 1500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 1500);
      }
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      my.showToast({
        content: title,
        type: 'fail',
        duration: 1500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isLoading && !force) {
        return;
      }
      this.isLoading = true;
      my.showLoading({ content: title });
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (this.isLoading) {
        this.isLoading = false;
        my.hideLoading();
      }
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      this.isLoading = true;
    }
  }]);

  return Tips;
}();

Tips.isLoading = false;
exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsInRpdGxlIiwiZHVyYXRpb24iLCJteSIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwidGV4dCIsInBheWxvYWQiLCJyZWplY3QiLCJjb25maXJtIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwib25IaWRlIiwidHlwZSIsImZvcmNlIiwiaXNMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7Ozs7Ozs7OztBQUduQjs7OzRCQUdlQyxLLEVBQXdCO0FBQUEsVUFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQ3JDQyxTQUFHQyxTQUFILENBQWE7QUFDWEgsZUFBT0EsS0FESTtBQUVYSSxjQUFNLFNBRks7QUFHWEMsY0FBTSxJQUhLO0FBSVhKLGtCQUFVQTtBQUpDLE9BQWI7QUFNQSxVQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDaEIsZUFBTyxJQUFJSyxPQUFKLENBQVk7QUFBQSxpQkFBV0MsV0FBV0MsT0FBWCxFQUFvQlAsUUFBcEIsQ0FBWDtBQUFBLFNBQVosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs0QkFHZ0JRLEksRUFBa0M7QUFBQSxVQUE1QkMsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZFYsS0FBYyx1RUFBTixJQUFNOztBQUNoRCxhQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVVHLE1BQVYsRUFBcUI7QUFDdENULFdBQUdVLE9BQUgsQ0FBVztBQUNUWixpQkFBT0EsS0FERTtBQUVUYSxtQkFBU0osSUFGQTtBQUdUSyxtQkFBUyxzQkFBTztBQUNkLGdCQUFJQyxJQUFJSCxPQUFSLEVBQWlCO0FBQ2ZKLHNCQUFRRSxPQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0xDLHFCQUFPRCxPQUFQO0FBQ0Q7QUFDRixXQVRRO0FBVVRNLGdCQUFNLG1CQUFPO0FBQ1hMLG1CQUFPRCxPQUFQO0FBQ0Q7QUFaUSxTQUFYO0FBY0QsT0FmTSxDQUFQO0FBZ0JEOzs7MEJBRWFWLEssRUFBT2lCLE0sRUFBMEI7QUFBQSxVQUFsQmIsSUFBa0IsdUVBQVgsU0FBVzs7QUFDN0NGLFNBQUdDLFNBQUgsQ0FBYTtBQUNYVSxpQkFBU2IsS0FERTtBQUVYa0IsY0FBTWQsSUFGSztBQUdYSCxrQkFBVTtBQUhDLE9BQWI7QUFLQTtBQUNBLFVBQUlnQixNQUFKLEVBQVk7QUFDVlYsbUJBQVcsWUFBTTtBQUNmVTtBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0Q7QUFDRjs7QUFFRDs7Ozs7OzBCQUdjakIsSyxFQUFPaUIsTSxFQUFRO0FBQzNCZixTQUFHQyxTQUFILENBQWE7QUFDWFUsaUJBQVNiLEtBREU7QUFFWGtCLGNBQU0sTUFGSztBQUdYakIsa0JBQVU7QUFIQyxPQUFiO0FBS0E7QUFDQSxVQUFJZ0IsTUFBSixFQUFZO0FBQ1ZWLG1CQUFXLFlBQU07QUFDZlU7QUFDRCxTQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7Ozs4QkFHOEM7QUFBQSxVQUE5QmpCLEtBQThCLHVFQUF0QixLQUFzQjtBQUFBLFVBQWZtQixLQUFlLHVFQUFQLEtBQU87O0FBQzVDLFVBQUksS0FBS0MsU0FBTCxJQUFrQixDQUFDRCxLQUF2QixFQUE4QjtBQUFFO0FBQVE7QUFDeEMsV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBbEIsU0FBR21CLFdBQUgsQ0FBZSxFQUFFUixTQUFTYixLQUFYLEVBQWY7QUFDRDs7QUFFRDs7Ozs7OzZCQUdpQjtBQUNmLFVBQUksS0FBS29CLFNBQVQsRUFBb0I7QUFDbEIsYUFBS0EsU0FBTCxHQUFpQixLQUFqQjtBQUNBbEIsV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7aUNBRW9CO0FBQ25CLFdBQUtGLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7Ozs7O0FBNUZrQnJCLEksQ0FDWnFCLFMsR0FBWSxLO2tCQURBckIsSSIsImZpbGUiOiJ0aXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwcyB7XG4gIHN0YXRpYyBpc0xvYWRpbmcgPSBmYWxzZVxuXG4gIC8qKlxuICAgKiDlvLnlh7rmj5DnpLrmoYZcbiAgICovXG4gIHN0YXRpYyBzdWNjZXNzKHRpdGxlLCBkdXJhdGlvbiA9IDE1MDApIHtcbiAgICBteS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pXG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbikpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0gKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSAn5o+Q56S6Jykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBteS5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgcmVqZWN0KHBheWxvYWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyB0b2FzdCAodGl0bGUsIG9uSGlkZSwgaWNvbiA9ICdzdWNjZXNzJykge1xuICAgIG15LnNob3dUb2FzdCh7XG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgIHR5cGU6IGljb24sXG4gICAgICBkdXJhdGlvbjogMTUwMFxuICAgIH0pXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpXG4gICAgICB9LCAxNTAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDplJnor6/moYZcbiAgICovXG4gIHN0YXRpYyBlcnJvciAodGl0bGUsIG9uSGlkZSkge1xuICAgIG15LnNob3dUb2FzdCh7XG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgIHR5cGU6ICdmYWlsJyxcbiAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgfSlcbiAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcbiAgICBpZiAob25IaWRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25IaWRlKClcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyAodGl0bGUgPSAn5Yqg6L295LitJywgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZyAmJiAhZm9yY2UpIHsgcmV0dXJuIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcbiAgICBteS5zaG93TG9hZGluZyh7IGNvbnRlbnQ6IHRpdGxlIH0pXG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295a6M5q+VXG4gICAqL1xuICBzdGF0aWMgbG9hZGVkICgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgIG15LmhpZGVMb2FkaW5nKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2V0TG9hZGluZyAoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gIH1cbn1cbiJdfQ==