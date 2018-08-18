const bunyan = require('bunyan')

const reqSerializer = (req) => {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  }
}

/**
 * Utility for logging
 * @module utils/log
 */

const log = bunyan.createLogger({
  name: 'microservice-1',
  serializers: {
    req: reqSerializer
  }
})

module.exports = log
