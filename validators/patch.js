const patchValidator = (body) => {
  if(!body) {
    return false
  }
  
  const { data, patch } = body
  if (!data || !patch) {
    return false
  }

  return true
}

module.exports = patchValidator
