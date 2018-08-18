/**
 * Verifies body data of request to /login route
 * @module validator/login
 */

const loginValidator = (body) => {
  if (!body) {
    return false
  }

  const { username, password } = body
  if (!username || !password) {
    return false
  }

  return true
}

module.exports = loginValidator
