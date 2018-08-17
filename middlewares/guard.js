const jwt = require('jsonwebtoken')

const extractToken = (req) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return
  }
  const authData = authHeader.split(' ')
  if (authData.length < 2) {
    return
  }
  const token = authData[1]
  if (!token) {
    return
  }

  return token
}

const guard = (req, res, next) => {
  const token = extractToken(req)
  if (!token) {
    console.log('Denied Unauthorized Access')
    res.statusCode = 401
    return res.json({
      message: 'authentication header not present'
    })
  }

  const jwtSecret = process.env.JWT_SECRET

  try {
    jwt.verify(token, jwtSecret)
    next()
  } catch (error) {
    console.log('error', error)
    res.statusCode = 401
    return res.json({
      message: 'jwt data is invalid'
    })
  }
}

module.exports = guard