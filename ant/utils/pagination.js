'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagination = function () {
  function Pagination(url, processFunc) {
    _classCallCheck(this, Pagination);

    // 数据访问地址
    this.url = url;
    // 数据集合
    this.list = [];
    // 起始数据页码
    this.start = 1;
    // 加载数据条数
    this.count = 20;
    // 数据处理函数
    this.processFunc = processFunc;
    // 正在加载中
    this.loading = false;
    // 是否底部
    this.reachBottom = false;
    // 是否为空
    this.empty = true;
    // 是否需要清除
    this.toClear = false;
  }

  /**
   * 加载下一页数据
   */


  _createClass(Pagination, [{
    key: 'next',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
        var param, _ref2, current_page, last_page, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = {
                  page: this.start
                };

                if (!this.loading) {
                  _context.next = 4;
                  break;
                }

                console.warn('page loading!');
                return _context.abrupt('return', this);

              case 4:

                // 附加参数
                this.loading = true;

                _context.prev = 5;

                Object.assign(param, args);
                /**
                 * 分页数据结构规范
                 * current_page   当前页码
                 * data           数据集合
                 * from           起始数据索引
                 * to             结束数据索引
                 * last_page      最后页码
                 * next_page_url
                 * per_page       每页项目数量
                 * prev_page_url
                 * total          总项目数量
                 */
                _context.next = 9;
                return _axios2.default.get(this.url, { data: param });

              case 9:
                _ref2 = _context.sent;
                current_page = _ref2.current_page;
                last_page = _ref2.last_page;
                data = _ref2.data;

                if (!(data === null || data.length < 1)) {
                  _context.next = 16;
                  break;
                }

                if (this.toClear) {
                  this.clear();
                } else {
                  this.reachBottom = true;
                }
                return _context.abrupt('return', this);

              case 16:

                this.empty = false;

                // 处理数据
                this._processData(data);

                // 设置数据
                if (this.toClear) {
                  this.list = data;
                  this.toClear = false;
                } else {
                  this.list = this.list.concat(data);
                }

                this.start++;
                if (current_page === last_page) {
                  this.reachBottom = true;
                }

                return _context.abrupt('return', this);

              case 22:
                _context.prev = 22;

                this.loading = false;
                return _context.finish(22);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5,, 22, 25]]);
      }));

      function next(_x) {
        return _ref.apply(this, arguments);
      }

      return next;
    }()

    /**
     * 恢复到第一页
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.empty = true;
      this.toClear = true;
      this.start = 1;
      this.reachBottom = false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.toClear = false;
      this.start = 1;
      this.list = [];
    }

    /**
     * 处理数据（私有）
     */

  }, {
    key: '_processData',
    value: function _processData(data) {
      if (this.processFunc) {
        for (var i in data) {
          var result = this.processFunc(data[i]);
          if (result) {
            data[i] = result;
          }
        }
      }
    }
  }]);

  return Pagination;
}();

exports.default = Pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInVybCIsInByb2Nlc3NGdW5jIiwibGlzdCIsInN0YXJ0IiwiY291bnQiLCJsb2FkaW5nIiwicmVhY2hCb3R0b20iLCJlbXB0eSIsInRvQ2xlYXIiLCJhcmdzIiwicGFyYW0iLCJwYWdlIiwiY29uc29sZSIsIndhcm4iLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJkYXRhIiwiY3VycmVudF9wYWdlIiwibGFzdF9wYWdlIiwibGVuZ3RoIiwiY2xlYXIiLCJfcHJvY2Vzc0RhdGEiLCJjb25jYXQiLCJpIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBYUMsR0FBYixFQUFrQkMsV0FBbEIsRUFBK0I7QUFBQTs7QUFDN0I7QUFDQSxTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQTtBQUNBLFNBQUtFLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQTtBQUNBLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0E7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBZjtBQUNBO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQTtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzBGQUdZQyxJOzs7Ozs7O0FBQ0pDLHFCLEdBQVE7QUFDWkMsd0JBQU0sS0FBS1I7QUFEQyxpQjs7cUJBSVYsS0FBS0UsTzs7Ozs7QUFDUE8sd0JBQVFDLElBQVIsQ0FBYSxlQUFiO2lEQUNPLEk7Ozs7QUFHVDtBQUNBLHFCQUFLUixPQUFMLEdBQWUsSUFBZjs7OztBQUdFUyx1QkFBT0MsTUFBUCxDQUFjTCxLQUFkLEVBQXFCRCxJQUFyQjtBQUNBOzs7Ozs7Ozs7Ozs7O3VCQVlnRCxnQkFBTU8sR0FBTixDQUFVLEtBQUtoQixHQUFmLEVBQW9CLEVBQUVpQixNQUFNUCxLQUFSLEVBQXBCLEM7Ozs7QUFBeENRLDRCLFNBQUFBLFk7QUFBY0MseUIsU0FBQUEsUztBQUFXRixvQixTQUFBQSxJOztzQkFHN0JBLFNBQVMsSUFBVCxJQUFpQkEsS0FBS0csTUFBTCxHQUFjLEM7Ozs7O0FBQ2pDLG9CQUFJLEtBQUtaLE9BQVQsRUFBa0I7QUFDaEIsdUJBQUthLEtBQUw7QUFDRCxpQkFGRCxNQUVPO0FBQ0wsdUJBQUtmLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDtpREFDTSxJOzs7O0FBR1QscUJBQUtDLEtBQUwsR0FBYSxLQUFiOztBQUVBO0FBQ0EscUJBQUtlLFlBQUwsQ0FBa0JMLElBQWxCOztBQUVBO0FBQ0Esb0JBQUksS0FBS1QsT0FBVCxFQUFrQjtBQUNoQix1QkFBS04sSUFBTCxHQUFZZSxJQUFaO0FBQ0EsdUJBQUtULE9BQUwsR0FBZSxLQUFmO0FBQ0QsaUJBSEQsTUFHTztBQUNMLHVCQUFLTixJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVcUIsTUFBVixDQUFpQk4sSUFBakIsQ0FBWjtBQUNEOztBQUVELHFCQUFLZCxLQUFMO0FBQ0Esb0JBQUllLGlCQUFpQkMsU0FBckIsRUFBZ0M7QUFDOUIsdUJBQUtiLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7aURBRU0sSTs7Ozs7QUFFUCxxQkFBS0QsT0FBTCxHQUFlLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlKOzs7Ozs7NEJBR1M7QUFDUCxXQUFLRSxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0wsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLRyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7Ozs0QkFFUTtBQUNQLFdBQUtFLE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS0wsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLRCxJQUFMLEdBQVksRUFBWjtBQUNEOztBQUVEOzs7Ozs7aUNBR2NlLEksRUFBTTtBQUNsQixVQUFJLEtBQUtoQixXQUFULEVBQXNCO0FBQ3BCLGFBQUssSUFBSXVCLENBQVQsSUFBY1AsSUFBZCxFQUFvQjtBQUNsQixjQUFNUSxTQUFTLEtBQUt4QixXQUFMLENBQWlCZ0IsS0FBS08sQ0FBTCxDQUFqQixDQUFmO0FBQ0EsY0FBSUMsTUFBSixFQUFZO0FBQ1ZSLGlCQUFLTyxDQUFMLElBQVVDLE1BQVY7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7Ozs7O2tCQXBIa0IxQixVIiwiZmlsZSI6InBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnLi9heGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIHByb2Nlc3NGdW5jKSB7XG4gICAgLy8g5pWw5o2u6K6/6Zeu5Zyw5Z2AXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICAvLyDmlbDmja7pm4blkIhcbiAgICB0aGlzLmxpc3QgPSBbXVxuICAgIC8vIOi1t+Wni+aVsOaNrumhteeggVxuICAgIHRoaXMuc3RhcnQgPSAxXG4gICAgLy8g5Yqg6L295pWw5o2u5p2h5pWwXG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgLy8g5pWw5o2u5aSE55CG5Ye95pWwXG4gICAgdGhpcy5wcm9jZXNzRnVuYyA9IHByb2Nlc3NGdW5jXG4gICAgLy8g5q2j5Zyo5Yqg6L295LitXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAvLyDmmK/lkKblupXpg6hcbiAgICB0aGlzLnJlYWNoQm90dG9tID0gZmFsc2VcbiAgICAvLyDmmK/lkKbkuLrnqbpcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZVxuICAgIC8vIOaYr+WQpumcgOimgea4hemZpFxuICAgIHRoaXMudG9DbGVhciA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295LiL5LiA6aG15pWw5o2uXG4gICAqL1xuICBhc3luYyBuZXh0IChhcmdzKSB7XG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBwYWdlOiB0aGlzLnN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgY29uc29sZS53YXJuKCdwYWdlIGxvYWRpbmchJylcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8g6ZmE5Yqg5Y+C5pWwXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuXG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW0sIGFyZ3MpXG4gICAgICAvKipcbiAgICAgICAqIOWIhumhteaVsOaNrue7k+aehOinhOiMg1xuICAgICAgICogY3VycmVudF9wYWdlICAg5b2T5YmN6aG156CBXG4gICAgICAgKiBkYXRhICAgICAgICAgICDmlbDmja7pm4blkIhcbiAgICAgICAqIGZyb20gICAgICAgICAgIOi1t+Wni+aVsOaNrue0ouW8lVxuICAgICAgICogdG8gICAgICAgICAgICAg57uT5p2f5pWw5o2u57Si5byVXG4gICAgICAgKiBsYXN0X3BhZ2UgICAgICDmnIDlkI7pobXnoIFcbiAgICAgICAqIG5leHRfcGFnZV91cmxcbiAgICAgICAqIHBlcl9wYWdlICAgICAgIOavj+mhtemhueebruaVsOmHj1xuICAgICAgICogcHJldl9wYWdlX3VybFxuICAgICAgICogdG90YWwgICAgICAgICAg5oC76aG555uu5pWw6YePXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHsgY3VycmVudF9wYWdlLCBsYXN0X3BhZ2UsIGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh0aGlzLnVybCwgeyBkYXRhOiBwYXJhbSB9KVxuXG4gICAgICAvLyDlupXpg6jliKTmlq1cbiAgICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICBpZiAodGhpcy50b0NsZWFyKSB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZWFjaEJvdHRvbSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtcHR5ID0gZmFsc2VcblxuICAgICAgLy8g5aSE55CG5pWw5o2uXG4gICAgICB0aGlzLl9wcm9jZXNzRGF0YShkYXRhKVxuXG4gICAgICAvLyDorr7nva7mlbDmja5cbiAgICAgIGlmICh0aGlzLnRvQ2xlYXIpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gZGF0YVxuICAgICAgICB0aGlzLnRvQ2xlYXIgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChkYXRhKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0ICsrXG4gICAgICBpZiAoY3VycmVudF9wYWdlID09PSBsYXN0X3BhZ2UpIHtcbiAgICAgICAgdGhpcy5yZWFjaEJvdHRvbSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5oGi5aSN5Yiw56ys5LiA6aG1XG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gICAgdGhpcy50b0NsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ID0gMTtcbiAgICB0aGlzLnJlYWNoQm90dG9tID0gZmFsc2U7XG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgdGhpcy50b0NsZWFyID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydCA9IDE7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cblxuICAvKipcbiAgICog5aSE55CG5pWw5o2u77yI56eB5pyJ77yJXG4gICAqL1xuICBfcHJvY2Vzc0RhdGEgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5wcm9jZXNzRnVuYykge1xuICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvY2Vzc0Z1bmMoZGF0YVtpXSlcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGRhdGFbaV0gPSByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19