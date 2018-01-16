require('./config$');

function success() {
require('../..//app');
require('../..//pages/index/index');
require('../..//pages/detail/detail');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
