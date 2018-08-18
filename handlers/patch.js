const { applyPatch } = require('fast-json-patch')

const patchValidator = require('../validators/patch')

const patchHandler = (req, res) => {
  const isValid = patchValidator(req.body)
  if (!isValid) {
    res.statusCode = 400
    return res.json({
      message: 'request body is invalid'
    })
  }
  const { body: { data, patch } } = req
  const patchedData = applyPatch(data, patch).newDocument
  res.json({
    message: 'success',
    data: patchedData
  })
}

module.exports = patchHandler
