const Jimp = require('jimp')

const thumbnailValidator = require('../validators/thumbnail')
const log = require('../utils/log')

const thumbnailHandler = async (req, res) => {
  const isValid = thumbnailValidator(req.body)
  if (!isValid) {
    res.statusCode = 400
    return res.json({
      message: 'imageUrl is incorrect'
    })
  }

  const { imageUrl } = req.body
  try {
    const image = await Jimp.read(imageUrl)
    const thumbnailBinaryBuffer = await image
      .resize(50, 50)
      .quality(40)
      .getBufferAsync(Jimp.MIME_JPEG)

    res.json({
      message: 'success',
      data: {
        imageUrl,
        thumbnailBinary: thumbnailBinaryBuffer
      }
    })
  } catch (error) {
    log.warn(error)
  }
}

module.exports = thumbnailHandler

// https://avatars0.githubusercontent.com/u/30328362?s=200&v=4
