const bunyan = require('bunyan')

const reqSerializer = (req) => {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  }
}

const log = bunyan.createLogger({
  name: 'microservice-1',
  serializers: {
    req: reqSerializer
  }
})

module.exports = log
