'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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


Page(require('./../../npm/wepy-ant/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2xlc3AiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwiZ3JvdXAiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJteW51bSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0Iiwic2VsZiIsImkiLCJtYXAiLCJ1cmwiLCJzdWNjZXNzIiwiJGFwcGx5IiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7K2VBSnVDO0FBQ1Q7OztJQUtUQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFvSVgsS0FBS0MsS0FBTCxFOzs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWSxHQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFFV0Ms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QUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBekQsY0FBUUMsR0FBUixDQUFlLE9BQUs0QyxLQUFwQixpQkFBcUNXLE9BQU8xQixJQUE1QyxjQUF5RDBCLE9BQU9FLE1BQVAsQ0FBY2IsS0FBdkU7QUFDRDtBQUpNLEc7OztrQkE1SFUvQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJncm91cExpc3RcIjp7XCJjb21cIjpcImdyb3VwXCIsXCJwcm9wc1wiOlwiZ3JvdXBsaXN0XCJ9fTtcclxuJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX0sXCJjb3VudGVyMVwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge1wiY291bnRlcjFcIjp7XCJ2LW9uOmluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbXludW06IDIwLFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxuICAgICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgbmV0cnN0OiAnJyxcbiAgICAgIGdyb3VwTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcGx1cyAoKSB7XG4gICAgICAgIHRoaXMubXludW0rK1xuICAgICAgfSxcbiAgICAgIHRvYXN0ICgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgfSxcbiAgICAgIGNvbW11bmljYXRlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcblxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxuXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNClcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0ICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpID0gMTBcbiAgICAgICAgbGV0IG1hcCA9IFsnTUE9PScsICdNUW89JywgJ01nPT0nLCAnTXc9PScsICdOQT09JywgJ05RPT0nLCAnTmc9PScsICdOdz09JywgJ09BPT0nLCAnT1E9PSddXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgKyBtYXBbaV0gKyAnJmk9JyArIGksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2xlc3AoKVxuICAgICAgY29uc29sZS5sb2coJzAnKVxuICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAvLyAgIGlmICh1c2VySW5mbykge1xuICAgICAgLy8gICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAvLyAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgLy8gICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIC8vICAgfSwgMzAwMClcblxuICAgICAgLy8gICBzZWxmLiRhcHBseSgpXG4gICAgICAvLyB9KVxuICAgIH1cbiAgICBhc3luYyBzbGVzcCAocGFyYW1zKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0sIDMwMDApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19