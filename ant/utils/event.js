'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxNotificationCenter = require('./WxNotificationCenter.js');

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: '$on',
    value: function $on(eventName, callback, observer) {
      WxNotificationCenter.addNotification(eventName, callback, observer);
    }
  }, {
    key: '$emit',
    value: function $emit(eventName, params) {
      WxNotificationCenter.postNotificationName(eventName, params);
    }
  }, {
    key: '$off',
    value: function $off(eventName, observer) {
      WxNotificationCenter.removeNotification(eventName, observer);
    }
  }]);

  return Event;
}();

exports.default = Event;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmpzIl0sIm5hbWVzIjpbIld4Tm90aWZpY2F0aW9uQ2VudGVyIiwicmVxdWlyZSIsIkV2ZW50IiwiZXZlbnROYW1lIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImFkZE5vdGlmaWNhdGlvbiIsInBhcmFtcyIsInBvc3ROb3RpZmljYXRpb25OYW1lIiwicmVtb3ZlTm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsdUJBQXVCQyxRQUFRLDJCQUFSLENBQTdCOztJQUVxQkMsSzs7Ozs7Ozt3QkFDUkMsUyxFQUFXQyxRLEVBQVVDLFEsRUFBVTtBQUN4Q0wsMkJBQXFCTSxlQUFyQixDQUFxQ0gsU0FBckMsRUFBZ0RDLFFBQWhELEVBQTBEQyxRQUExRDtBQUNEOzs7MEJBRVlGLFMsRUFBV0ksTSxFQUFRO0FBQzlCUCwyQkFBcUJRLG9CQUFyQixDQUEwQ0wsU0FBMUMsRUFBcURJLE1BQXJEO0FBQ0Q7Ozt5QkFFV0osUyxFQUFXRSxRLEVBQVU7QUFDL0JMLDJCQUFxQlMsa0JBQXJCLENBQXdDTixTQUF4QyxFQUFtREUsUUFBbkQ7QUFDRDs7Ozs7O2tCQVhrQkgsSyIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFd4Tm90aWZpY2F0aW9uQ2VudGVyID0gcmVxdWlyZSgnLi9XeE5vdGlmaWNhdGlvbkNlbnRlci5qcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gIHN0YXRpYyAkb24oZXZlbnROYW1lLCBjYWxsYmFjaywgb2JzZXJ2ZXIpIHtcbiAgICBXeE5vdGlmaWNhdGlvbkNlbnRlci5hZGROb3RpZmljYXRpb24oZXZlbnROYW1lLCBjYWxsYmFjaywgb2JzZXJ2ZXIpXG4gIH1cblxuICBzdGF0aWMgJGVtaXQoZXZlbnROYW1lLCBwYXJhbXMpIHtcbiAgICBXeE5vdGlmaWNhdGlvbkNlbnRlci5wb3N0Tm90aWZpY2F0aW9uTmFtZShldmVudE5hbWUsIHBhcmFtcylcbiAgfVxuXG4gIHN0YXRpYyAkb2ZmKGV2ZW50TmFtZSwgb2JzZXJ2ZXIpIHtcbiAgICBXeE5vdGlmaWNhdGlvbkNlbnRlci5yZW1vdmVOb3RpZmljYXRpb24oZXZlbnROYW1lLCBvYnNlcnZlcilcbiAgfVxufVxuIl19