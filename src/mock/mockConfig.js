import {DOMAIN, payUrl} from '@/utils/config';
module.exports = {
  [`${DOMAIN}/mnp/order/create`]: 'orderCreate',
  [`${DOMAIN}/mnp/user/my`]: 'my',
<<<<<<< HEAD
  [`${DOMAIN}/mnp/order/result`]: 'result',
=======
  [`${DOMAIN}/mnp/product/cfStatus`]: 'cfStatus',
  [`${DOMAIN}/info/cinemas`]: 'detail',
  [`${DOMAIN}/mnp/product/cfStatus`]: 'cfStatus',
>>>>>>> 9966e14f89a59ecf39e1767703525ffaf7ed95d5
  [`${payUrl}`]: 'signature'
};
