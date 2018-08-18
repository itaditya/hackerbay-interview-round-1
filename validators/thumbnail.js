/**
 * Verifies body data of request to /protected/thumbnail route
 * @module validator/thumbnail
 */

const thumbnailValidator = (body) => {
  if(!body) {
    return false
  }
  
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
