const { applyPatch } = require('fast-json-patch')

const patchValidator = require('../validators/patch')

/**
 * Handles request to /protected/patch route
 * @module handler/patch
 */

const patchHandler = (req, res) => {
  const isValid = patchValidator(req.body)
  if (!isValid) {
    res.statusCode = 400
    return res.json({
      message: 'request body is invalid'
    })
  }
  const { body: { data, patch } } = req
  try {
    const patchedData = applyPatch(data, patch, true).newDocument
    res.json({
      message: 'success',
      data: patchedData
    })
  } catch(error) {
    res.statusCode = 400
    return res.json({
      message: 'patch is incorrect'
    })
  }
}

module.exports = patchHandler
