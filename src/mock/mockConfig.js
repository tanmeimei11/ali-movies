import {DOMAIN, payUrl} from '@/utils/config'
module.exports = {
  [`${DOMAIN}/mnp/order/create`]: 'orderCreate',
  [`${DOMAIN}/mnp/user/my`]: 'my',
  [`${DOMAIN}/mnp/order/result`]: 'result',
  [`${payUrl}`]: 'signature'
}
