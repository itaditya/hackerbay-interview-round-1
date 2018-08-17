const patchValidator = (body) => {
  const { data, patch } = body
  if (!data || !patch) {
    return false
  }

  return true
}

module.exports = patchValidator
