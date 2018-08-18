const log = require('../utils/log')

/**
 * Middleware that logs incoming requests.
 * @module middleware/loggerMw
 */

const loggerMw = (req, res, next) => {
  log.info({ req })
  next()
}

module.exports = loggerMw
