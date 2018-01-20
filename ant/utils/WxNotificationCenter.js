"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/WxNotificationCenter
 *
 * for: 微信小程序通知广播模式类,降低小程序之间的耦合度
 * detail : http://weappdev.com/t/wxnotificationcenter/233
 */
// 存放
var __notices = [];
var isDebug = true;
/**
 * addNotification
 * 注册通知对象方法
 *
 * 参数:
 * name： 注册名，一般let在公共类中
 * selector： 对应的通知方法，接受到通知后进行的动作
 * observer: 注册对象，指Page对象
 */
function addNotification(name, selector, observer) {
    if (name && selector) {
        if (!observer) {
            console.log("addNotification Warning: no observer will can't remove notice");
        }
        console.log("addNotification:" + name);
        var newNotice = {
            name: name,
            selector: selector,
            observer: observer
        };

        addNotices(newNotice);
    } else {
        console.log("addNotification error: no selector or name");
    }
}

/**
 * 仅添加一次监听
 *
 * 参数:
 * name： 注册名，一般let在公共类中
 * selector： 对应的通知方法，接受到通知后进行的动作
 * observer: 注册对象，指Page对象
 */
function addOnceNotification(name, selector, observer) {
    if (__notices.length > 0) {
        for (var i = 0; i < __notices.length; i++) {
            var notice = __notices[i];
            if (notice.name === name) {
                if (notice.observer === observer) {
                    return;
                }
            }
        }
    }
    this.addNotification(name, selector, observer);
}

function addNotices(newNotice) {
    // if (__notices.length > 0) {
    //     for (var i = 0; i < __notices.length; i++) {
    //         var hisNotice = __notices[i];
    //         //当名称一样时进行对比，如果不是同一个 则放入数组，否则跳出
    //         if (newNotice.name === hisNotice.name) {
    //             if (!cmp(hisNotice, newNotice)) {
    //                 __notices.push(newNotice);
    //             }
    //             return;
    //         }else{
    //             __notices.push(newNotice);
    //         }

    //     }
    // } else {

    // }

    __notices.push(newNotice);
}

/**
 * removeNotification
 * 移除通知方法
 *
 * 参数:
 * name: 已经注册了的通知
 * observer: 移除的通知所在的Page对象
 */

function removeNotification(name, observer) {
    console.log("removeNotification:" + name);
    for (var i = 0; i < __notices.length; i++) {
        var notice = __notices[i];
        if (notice.name === name) {
            if (notice.observer === observer) {
                __notices.splice(i, 1);
                return;
            }
        }
    }
}

/**
 * postNotificationName
 * 发送通知方法
 *
 * 参数:
 * name: 已经注册了的通知
 * info: 携带的参数
 */

function postNotificationName(name, info) {
    console.log("postNotificationName:" + name);
    if (__notices.length == 0) {
        console.log("postNotificationName error: u hadn't add any notice.");
        return;
    }

    for (var i = 0; i < __notices.length; i++) {
        var notice = __notices[i];
        if (notice.name === name) {
            notice.selector(info);
        }
    }
}

// 用于对比两个对象是否相等
function cmp(x, y) {
    // If both x and y are null or undefined and exactly the same
    if (x === y) {
        return true;
    }

    // If they are not strictly equal, they both need to be Objects
    if (!(x instanceof Object) || !(y instanceof Object)) {
        return false;
    }

    // They must have the exact same prototype chain, the closest we can do is
    // test the constructor.
    if (x.constructor !== y.constructor) {
        return false;
    }

    for (var p in x) {
        // Inherited properties were tested using x.constructor === y.constructor
        if (x.hasOwnProperty(p)) {
            // Allows comparing x[ p ] and y[ p ] when set to undefined
            if (!y.hasOwnProperty(p)) {
                return false;
            }

            // If they have the same strict value or identity then they are equal
            if (x[p] === y[p]) {
                continue;
            }

            // Numbers, Strings, Functions, Booleans must be strictly equal
            if (_typeof(x[p]) !== "object") {
                return false;
            }

            // Objects and Arrays must be tested recursively
            if (!Object.equals(x[p], y[p])) {
                return false;
            }
        }
    }

    for (p in y) {
        // allows x[ p ] to be set to undefined
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};

module.exports = {
    addNotification: addNotification,
    removeNotification: removeNotification,
    postNotificationName: postNotificationName,
    addOnceNotification: addOnceNotification
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIld4Tm90aWZpY2F0aW9uQ2VudGVyLmpzIl0sIm5hbWVzIjpbIl9fbm90aWNlcyIsImlzRGVidWciLCJhZGROb3RpZmljYXRpb24iLCJuYW1lIiwic2VsZWN0b3IiLCJvYnNlcnZlciIsImNvbnNvbGUiLCJsb2ciLCJuZXdOb3RpY2UiLCJhZGROb3RpY2VzIiwiYWRkT25jZU5vdGlmaWNhdGlvbiIsImxlbmd0aCIsImkiLCJub3RpY2UiLCJwdXNoIiwicmVtb3ZlTm90aWZpY2F0aW9uIiwic3BsaWNlIiwicG9zdE5vdGlmaWNhdGlvbk5hbWUiLCJpbmZvIiwiY21wIiwieCIsInkiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsImVxdWFscyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsSUFBSUEsWUFBWSxFQUFoQjtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBOzs7Ozs7Ozs7QUFTQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsUUFBL0IsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQy9DLFFBQUlGLFFBQVFDLFFBQVosRUFBc0I7QUFDbEIsWUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWSwrREFBWjtBQUNIO0FBQ0RELGdCQUFRQyxHQUFSLENBQVkscUJBQXFCSixJQUFqQztBQUNBLFlBQUlLLFlBQVk7QUFDWkwsa0JBQU1BLElBRE07QUFFWkMsc0JBQVVBLFFBRkU7QUFHWkMsc0JBQVVBO0FBSEUsU0FBaEI7O0FBTUFJLG1CQUFXRCxTQUFYO0FBRUgsS0FiRCxNQWFPO0FBQ0hGLGdCQUFRQyxHQUFSLENBQVksNENBQVo7QUFDSDtBQUNKOztBQUVEOzs7Ozs7OztBQVFBLFNBQVNHLG1CQUFULENBQTZCUCxJQUE3QixFQUFtQ0MsUUFBbkMsRUFBNkNDLFFBQTdDLEVBQXVEO0FBQ25ELFFBQUlMLFVBQVVXLE1BQVYsR0FBbUIs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SSxDQUFGLENBQWQsRUFBb0JILEVBQUVHLENBQUYsQ0FBcEIsQ0FBTCxFQUFnQztBQUM1Qix1QkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQUtBLENBQUwsSUFBVUgsQ0FBVixFQUFhO0FBQ1Q7QUFDQSxZQUFJQSxFQUFFSSxjQUFGLENBQWlCRCxDQUFqQixLQUF1QixDQUFDSixFQUFFSyxjQUFGLENBQWlCRCxDQUFqQixDQUE1QixFQUFpRDtBQUM3QyxtQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2IxQixxQkFBaUJBLGVBREo7QUFFYmEsd0JBQW9CQSxrQkFGUDtBQUdiRSwwQkFBc0JBLG9CQUhUO0FBSWJQLHlCQUFxQkE7QUFKUixDQUFqQiIsImZpbGUiOiJXeE5vdGlmaWNhdGlvbkNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxuICogb3JnYW5pemF0aW9uOiBXZUFwcERldijlvq7kv6HlsI/nqIvluo/lvIDlj5HorrrlnZspKGh0dHA6Ly93ZWFwcGRldi5jb20pXG4gKiAgICAgICAgICAgICAgIOWeguebtOW+ruS/oeWwj+eoi+W6j+W8gOWPkeS6pOa1geekvuWMulxuICpcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS9XeE5vdGlmaWNhdGlvbkNlbnRlclxuICpcbiAqIGZvcjog5b6u5L+h5bCP56iL5bqP6YCa55+l5bm/5pKt5qih5byP57G7LOmZjeS9juWwj+eoi+W6j+S5i+mXtOeahOiApuWQiOW6plxuICogZGV0YWlsIDogaHR0cDovL3dlYXBwZGV2LmNvbS90L3d4bm90aWZpY2F0aW9uY2VudGVyLzIzM1xuICovXG4vLyDlrZjmlL5cbnZhciBfX25vdGljZXMgPSBbXTtcbnZhciBpc0RlYnVnID0gdHJ1ZTtcbi8qKlxuICogYWRkTm90aWZpY2F0aW9uXG4gKiDms6jlhozpgJrnn6Xlr7nosaHmlrnms5VcbiAqXG4gKiDlj4LmlbA6XG4gKiBuYW1l77yaIOazqOWGjOWQje+8jOS4gOiIrGxldOWcqOWFrOWFseexu+S4rVxuICogc2VsZWN0b3LvvJog5a+55bqU55qE6YCa55+l5pa55rOV77yM5o6l5Y+X5Yiw6YCa55+l5ZCO6L+b6KGM55qE5Yqo5L2cXG4gKiBvYnNlcnZlcjog5rOo5YaM5a+56LGh77yM5oyHUGFnZeWvueixoVxuICovXG5mdW5jdGlvbiBhZGROb3RpZmljYXRpb24obmFtZSwgc2VsZWN0b3IsIG9ic2VydmVyKSB7XG4gICAgaWYgKG5hbWUgJiYgc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFvYnNlcnZlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGROb3RpZmljYXRpb24gV2FybmluZzogbm8gb2JzZXJ2ZXIgd2lsbCBjYW4ndCByZW1vdmUgbm90aWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkTm90aWZpY2F0aW9uOlwiICsgbmFtZSk7XG4gICAgICAgIHZhciBuZXdOb3RpY2UgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyXG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkTm90aWNlcyhuZXdOb3RpY2UpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGROb3RpZmljYXRpb24gZXJyb3I6IG5vIHNlbGVjdG9yIG9yIG5hbWVcIik7XG4gICAgfVxufVxuXG4vKipcbiAqIOS7hea3u+WKoOS4gOasoeebkeWQrFxuICpcbiAqIOWPguaVsDpcbiAqIG5hbWXvvJog5rOo5YaM5ZCN77yM5LiA6IisbGV05Zyo5YWs5YWx57G75LitXG4gKiBzZWxlY3Rvcu+8miDlr7nlupTnmoTpgJrnn6Xmlrnms5XvvIzmjqXlj5fliLDpgJrnn6XlkI7ov5vooYznmoTliqjkvZxcbiAqIG9ic2VydmVyOiDms6jlhozlr7nosaHvvIzmjIdQYWdl5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGFkZE9uY2VOb3RpZmljYXRpb24obmFtZSwgc2VsZWN0b3IsIG9ic2VydmVyKSB7XG4gICAgaWYgKF9fbm90aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19ub3RpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm90aWNlID0gX19ub3RpY2VzW2ldO1xuICAgICAgICAgICAgaWYgKG5vdGljZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGljZS5vYnNlcnZlciA9PT0gb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZE5vdGlmaWNhdGlvbihuYW1lLCBzZWxlY3Rvciwgb2JzZXJ2ZXIpXG59XG5cbmZ1bmN0aW9uIGFkZE5vdGljZXMobmV3Tm90aWNlKSB7XG4gICAgLy8gaWYgKF9fbm90aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19ub3RpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICB2YXIgaGlzTm90aWNlID0gX19ub3RpY2VzW2ldO1xuICAgIC8vICAgICAgICAgLy/lvZPlkI3np7DkuIDmoLfml7bov5vooYzlr7nmr5TvvIzlpoLmnpzkuI3mmK/lkIzkuIDkuKog5YiZ5pS+5YWl5pWw57uE77yM5ZCm5YiZ6Lez5Ye6XG4gICAgLy8gICAgICAgICBpZiAobmV3Tm90aWNlLm5hbWUgPT09IGhpc05vdGljZS5uYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFjbXAoaGlzTm90aWNlLCBuZXdOb3RpY2UpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIF9fbm90aWNlcy5wdXNoKG5ld05vdGljZSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1lbHNle1xuICAgIC8vICAgICAgICAgICAgIF9fbm90aWNlcy5wdXNoKG5ld05vdGljZSk7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgfVxuICAgIC8vIH0gZWxzZSB7XG5cbiAgICAvLyB9XG5cbiAgICBfX25vdGljZXMucHVzaChuZXdOb3RpY2UpO1xufVxuXG4vKipcbiAqIHJlbW92ZU5vdGlmaWNhdGlvblxuICog56e76Zmk6YCa55+l5pa55rOVXG4gKlxuICog5Y+C5pWwOlxuICogbmFtZTog5bey57uP5rOo5YaM5LqG55qE6YCa55+lXG4gKiBvYnNlcnZlcjog56e76Zmk55qE6YCa55+l5omA5Zyo55qEUGFnZeWvueixoVxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZU5vdGlmaWNhdGlvbihuYW1lLCBvYnNlcnZlcikge1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlTm90aWZpY2F0aW9uOlwiICsgbmFtZSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX25vdGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vdGljZSA9IF9fbm90aWNlc1tpXTtcbiAgICAgICAgaWYgKG5vdGljZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBpZiAobm90aWNlLm9ic2VydmVyID09PSBvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIF9fbm90aWNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLyoqXG4gKiBwb3N0Tm90aWZpY2F0aW9uTmFtZVxuICog5Y+R6YCB6YCa55+l5pa55rOVXG4gKlxuICog5Y+C5pWwOlxuICogbmFtZTog5bey57uP5rOo5YaM5LqG55qE6YCa55+lXG4gKiBpbmZvOiDmkLrluKbnmoTlj4LmlbBcbiAqL1xuXG5mdW5jdGlvbiBwb3N0Tm90aWZpY2F0aW9uTmFtZShuYW1lLCBpbmZvKSB7XG4gICAgY29uc29sZS5sb2coXCJwb3N0Tm90aWZpY2F0aW9uTmFtZTpcIiArIG5hbWUpO1xuICAgIGlmIChfX25vdGljZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3N0Tm90aWZpY2F0aW9uTmFtZSBlcnJvcjogdSBoYWRuJ3QgYWRkIGFueSBub3RpY2UuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX25vdGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vdGljZSA9IF9fbm90aWNlc1tpXTtcbiAgICAgICAgaWYgKG5vdGljZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBub3RpY2Uuc2VsZWN0b3IoaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLy8g55So5LqO5a+55q+U5Lik5Liq5a+56LGh5piv5ZCm55u4562JXG5mdW5jdGlvbiBjbXAoeCwgeSkge1xuICAgIC8vIElmIGJvdGggeCBhbmQgeSBhcmUgbnVsbCBvciB1bmRlZmluZWQgYW5kIGV4YWN0bHkgdGhlIHNhbWVcbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGV5IGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwsIHRoZXkgYm90aCBuZWVkIHRvIGJlIE9iamVjdHNcbiAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhKHkgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUaGV5IG11c3QgaGF2ZSB0aGUgZXhhY3Qgc2FtZSBwcm90b3R5cGUgY2hhaW4sIHRoZSBjbG9zZXN0IHdlIGNhbiBkbyBpc1xuICAgIC8vIHRlc3QgdGhlIGNvbnN0cnVjdG9yLlxuICAgIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwIGluIHgpIHtcbiAgICAgICAgLy8gSW5oZXJpdGVkIHByb3BlcnRpZXMgd2VyZSB0ZXN0ZWQgdXNpbmcgeC5jb25zdHJ1Y3RvciA9PT0geS5jb25zdHJ1Y3RvclxuICAgICAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgLy8gQWxsb3dzIGNvbXBhcmluZyB4WyBwIF0gYW5kIHlbIHAgXSB3aGVuIHNldCB0byB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICgheS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhleSBoYXZlIHRoZSBzYW1lIHN0cmljdCB2YWx1ZSBvciBpZGVudGl0eSB0aGVuIHRoZXkgYXJlIGVxdWFsXG4gICAgICAgICAgICBpZiAoeFtwXSA9PT0geVtwXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBOdW1iZXJzLCBTdHJpbmdzLCBGdW5jdGlvbnMsIEJvb2xlYW5zIG11c3QgYmUgc3RyaWN0bHkgZXF1YWxcbiAgICAgICAgICAgIGlmICh0eXBlb2YoeFtwXSkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9iamVjdHMgYW5kIEFycmF5cyBtdXN0IGJlIHRlc3RlZCByZWN1cnNpdmVseVxuICAgICAgICAgICAgaWYgKCFPYmplY3QuZXF1YWxzKHhbcF0sIHlbcF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChwIGluIHkpIHtcbiAgICAgICAgLy8gYWxsb3dzIHhbIHAgXSB0byBiZSBzZXQgdG8gdW5kZWZpbmVkXG4gICAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICYmICF4Lmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhZGROb3RpZmljYXRpb246IGFkZE5vdGlmaWNhdGlvbixcbiAgICByZW1vdmVOb3RpZmljYXRpb246IHJlbW92ZU5vdGlmaWNhdGlvbixcbiAgICBwb3N0Tm90aWZpY2F0aW9uTmFtZTogcG9zdE5vdGlmaWNhdGlvbk5hbWUsXG4gICAgYWRkT25jZU5vdGlmaWNhdGlvbjogYWRkT25jZU5vdGlmaWNhdGlvblxufVxuIl19