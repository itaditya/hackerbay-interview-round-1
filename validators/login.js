const loginValidator = (body) => {
  const { username, password } = body
  if (!username || !password) {
    return false
  }

  return true
}

module.exports = loginValidator
