'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy-ant/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example
// alias example


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.slesp();

              case 2:
                console.log('0');
                // let self = this
                // this.$parent.getUserInfo(function (userInfo) {
                //   if (userInfo) {
                //     self.userInfo = userInfo
                //   }
                //   self.normalTitle = '标题已被修改'

                //   self.setTimeoutTitle = '标题三秒后会被修改'
                //   setTimeout(() => {
                //     self.setTimeoutTitle = '到三秒了'
                //     self.$apply()
                //   }, 3000)

                //   self.$apply()
                // })

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'slesp',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new Promise(function (resolve) {
                  setTimeout(function () {
                    console.log('222');
                    resolve();
                  }, 3000);
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function slesp(_x) {
        return _ref3.apply(this, arguments);
      }

      return slesp;
    }()
  }]);

  return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$repeat = { "groupList": { "com": "group", "props": "grouplist" } };
  this.$props = { "group": { "v-bind:grouplist.once": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "key" }, "v-bind:indexa.once": { "value": "index", "type": "index", "for": "groupList", "item": "item", "index": "index", "key": "key" } }, "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref4;

      var $event = (_ref4 = arguments.length - 1, arguments.length <= _ref4 ? undefined : arguments[_ref4]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref5;

      var $event = (_ref5 = arguments.length - 1, arguments.length <= _ref5 ? undefined : arguments[_ref5]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInNsZXNwIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGFuZWwiLCJjb3VudGVyMSIsImNvdW50ZXIyIiwibGlzdCIsImdyb3VwIiwidG9hc3QiLCJtaXhpbnMiLCJkYXRhIiwibXludW0iLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsInRhcCIsIiRuYW1lIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwicmVxdWVzdCIsInNlbGYiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsIiRhcHBseSIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQUp1QztBQUNUOzs7SUFLVEEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBb0lYLEtBQUtDLEtBQUwsRTs7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVksR0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBRVdDLE07Ozs7O2tEQUNKLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJDLDZCQUFXLFlBQU07QUFDZkwsNEJBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FHO0FBQ0QsbUJBSEQsRUFHRyxJQUhIO0FBSUQsaUJBTE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZKd0IsZUFBS0UsSTs7Ozs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUdWQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxPQUFQLEVBQWUsU0FBUSxXQUF2QixFQUFiLEU7T0FDWEMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLHlCQUF3QixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sV0FBcEMsRUFBZ0QsUUFBTyxNQUF2RCxFQUE4RCxTQUFRLE9BQXRFLEVBQThFLE9BQU0sS0FBcEYsRUFBekIsRUFBb0gsc0JBQXFCLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxXQUF0QyxFQUFrRCxRQUFPLE1BQXpELEVBQWdFLFNBQVEsT0FBeEUsRUFBZ0YsT0FBTSxLQUF0RixFQUF6SSxFQUFULEVBQWdQLFlBQVcsRUFBQyxjQUFhLEVBQWQsRUFBM1AsRUFBNlEsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixPQUFyQyxFQUF4UixFO09BQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxtQkFBa0IsYUFBbkIsRUFBWixFO09BQ1RDLFUsR0FBYTtBQUNWQywwQkFEVTtBQUVWQywrQkFGVTtBQUdWQywrQkFIVTtBQUlWQyx3QkFKVTtBQUtWQywwQkFMVTtBQU1WQztBQU5VLEc7T0FTWkMsTSxHQUFTLGdCO09BRVRDLEksR0FBTztBQUNMQyxXQUFPLEVBREY7QUFFTEMsY0FBVTtBQUNSQyxnQkFBVTtBQURGLEtBRkw7QUFLTEMsaUJBQWEsTUFMUjtBQU1MQyxxQkFBaUIsV0FOWjtBQU9MQyxXQUFPLENBUEY7QUFRTEMsWUFBUSxFQVJIO0FBU0xDLGVBQVcsQ0FDVDtBQUNFQyxVQUFJLENBRE47QUFFRUMsWUFBTSxNQUZSO0FBR0VkLFlBQU0sQ0FDSjtBQUNFZSxpQkFBUyxLQURYO0FBRUVDLG1CQUFXO0FBRmIsT0FESSxFQUlEO0FBQ0RELGlCQUFTLEtBRFI7QUFFREMsbUJBQVc7QUFGVixPQUpDLEVBT0Q7QUFDREQsaUJBQVMsS0FEUjtBQUVEQyxtQkFBVztBQUZWLE9BUEM7QUFIUixLQURTLEVBaUJUO0FBQ0VILFVBQUksQ0FETjtBQUVFQyxZQUFNLE1BRlI7QUFHRWQsWUFBTSxDQUNKO0FBQ0VlLGlCQUFTLEtBRFg7QUFFRUMsbUJBQVc7QUFGYixPQURJLEVBSUQ7QUFDREQsaUJBQVMsS0FEUjtBQUVEQyxtQkFBVztBQUZWLE9BSkMsRUFPRDtBQUNERCxpQkFBUyxLQURSO0FBRURDLG1CQUFXO0FBRlYsT0FQQztBQUhSLEtBakJTLEVBaUNUO0FBQ0VILFVBQUksQ0FETjtBQUVFQyxZQUFNLE1BRlI7QUFHRWQsWUFBTSxDQUNKO0FBQ0VlLGlCQUFTLEtBRFg7QUFFRUMsbUJBQVc7QUFGYixPQURJO0FBSFIsS0FqQ1M7QUFUTixHO09BdURQQyxRLEdBQVc7QUFDVEMsT0FEUyxpQkFDRjtBQUNMLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWEMsTyxHQUFVO0FBQ1JDLFFBRFEsa0JBQ0E7QUFDTixXQUFLaEIsS0FBTDtBQUNELEtBSE87QUFJUkgsU0FKUSxtQkFJQztBQUNQLFVBQUlvQixVQUFVLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFDQyxlQUFPLE9BRG1DO0FBRTFDQyxhQUFLO0FBRnFDLE9BQTlCLENBQWQ7O0FBS0FILGNBQVFJLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbEIzQyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDRCxPQUZEO0FBR0QsS0FiTztBQWNSMkMsT0FkUSxpQkFjRDtBQUNMNUMsY0FBUUMsR0FBUixDQUFZLG9CQUFvQixLQUFLNEMsS0FBckM7QUFDRCxLQWhCTztBQWlCUkMsZUFqQlEseUJBaUJPO0FBQ2I5QyxjQUFRQyxHQUFSLENBQVksS0FBSzRDLEtBQUwsR0FBYSxNQUF6Qjs7QUFFQSxXQUFLTixPQUFMLENBQWEsVUFBYixFQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxDQUF0QztBQUNBLFdBQUtBLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQXpCLEVBQWlDLEVBQWpDLEVBQXFDLENBQXJDOztBQUVBLFdBQUtRLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDO0FBQ0QsS0F4Qk87QUF5QlJDLFdBekJRLHFCQXlCRztBQUNULFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlDLElBQUksRUFBUjtBQUNBLFVBQUlDLE1BQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxDQUFWO0FBQ0EsYUFBT0QsR0FBUCxFQUFZO0FBQ1YsdUJBQUtGLE9BQUwsQ0FBYTtBQUNYSSxlQUFLLDREQUE0REQsSUFBSUQsQ0FBSixDQUE1RCxHQUFxRSxLQUFyRSxHQUE2RUEsQ0FEdkU7QUFFWEcsbUJBQVMsaUJBQVVWLENBQVYsRUFBYTtBQUNwQk0saUJBQUt0QixNQUFMLElBQWVnQixFQUFFdkIsSUFBRixHQUFTLEdBQXhCO0FBQ0E2QixpQkFBS0ssTUFBTDtBQUNEO0FBTFUsU0FBYjtBQU9EO0FBQ0YsS0F0Q087QUF1Q1JDLGVBdkNRLHlCQXVDYztBQUFBOztBQUNwQixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQXpELGNBQVFDLEdBQVIsQ0FBZSxLQUFLNEMsS0FBcEIsaUJBQXFDVyxPQUFPMUIsSUFBNUMsY0FBeUQwQixPQUFPRSxNQUFQLENBQWNiLEtBQXZFO0FBQ0Q7QUExQ08sRztPQTZDVmMsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUgsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0F6RCxjQUFRQyxHQUFSLENBQWUsT0FBSzRDLEtBQXBCLGlCQUFxQ1csT0FBTzFCLElBQTVDLGNBQXlEMEIsT0FBT0UsTUFBUCxDQUFjYixLQUF2RTtBQUNEO0FBSk0sRzs7O2tCQTVIVS9DLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdCdcbmltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBHcm91cCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dyb3VwJ1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi8uLi9taXhpbnMvdGVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gIH1cbiAkcmVwZWF0ID0ge1wiZ3JvdXBMaXN0XCI6e1wiY29tXCI6XCJncm91cFwiLFwicHJvcHNcIjpcImdyb3VwbGlzdFwifX07XHJcbiRwcm9wcyA9IHtcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmluZGV4YS5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19LFwiY291bnRlcjFcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJjb3VudGVyMlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9fTtcclxuJGV2ZW50cyA9IHtcImNvdW50ZXIxXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHBhbmVsOiBQYW5lbCxcbiAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICBsaXN0OiBMaXN0LFxuICAgIGdyb3VwOiBHcm91cCxcbiAgICB0b2FzdDogVG9hc3RcbiAgfVxuXG4gIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgZGF0YSA9IHtcbiAgICBteW51bTogMjAsXG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxuICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG4gICAgY291bnQ6IDAsXG4gICAgbmV0cnN0OiAnJyxcbiAgICBncm91cExpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIG5vdyAoKSB7XG4gICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHBsdXMgKCkge1xuICAgICAgdGhpcy5teW51bSsrXG4gICAgfSxcbiAgICB0b2FzdCAoKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICB9KVxuXG4gICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRhcCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgfSxcbiAgICBjb21tdW5pY2F0ZSAoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcblxuICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgIH0sXG4gICAgcmVxdWVzdCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpID0gMTBcbiAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGF3YWl0IHRoaXMuc2xlc3AoKVxuICAgIGNvbnNvbGUubG9nKCcwJylcbiAgICAvLyBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgLy8gICBpZiAodXNlckluZm8pIHtcbiAgICAvLyAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgLy8gICB9XG4gICAgLy8gICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgIC8vICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAvLyAgICAgc2VsZi4kYXBwbHkoKVxuICAgIC8vICAgfSwgMzAwMClcblxuICAgIC8vICAgc2VsZi4kYXBwbHkoKVxuICAgIC8vIH0pXG4gIH1cbiAgYXN5bmMgc2xlc3AgKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyMjInKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0sIDMwMDApXG4gICAgfSlcbiAgfVxufVxuIl19