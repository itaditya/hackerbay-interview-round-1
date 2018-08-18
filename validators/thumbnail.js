const thumbnailValidator = (body) => {
  const { imageUrl } = body
  if (!imageUrl) {
    return false
  }

  if (!(imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
    return false
  }

  return true
}

module.exports = thumbnailValidator
