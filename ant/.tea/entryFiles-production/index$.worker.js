require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../..//pages/index/index');
require('../..//pages/self/self');
require('../..//pages/detail/detail');
require('../..//pages/seat/seat');
require('../..//pages/result/result');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
