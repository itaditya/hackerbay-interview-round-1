const log = require('../utils/log')

const logger = (req, res, next) => {
  log.info({ req })
  next()
}

module.exports = logger
