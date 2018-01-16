require('./config$');

function success() {
require('../..//app');
require('../..//pages/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
