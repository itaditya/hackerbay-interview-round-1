const jwt = require('jsonwebtoken');

const loginValidator = require('../validators/login')

const loginHandler = (req, res) => {
  const isValid = loginValidator(req.body)
  const { username, password } = req.body

  if (!isValid) {
    res.statusCode = 400
    return res.json({
      message: 'request body is invalid'
    })
  }

  const jwtSecret = process.env.JWT_SECRET;

  jwt.sign({ username, password }, jwtSecret, (error, token) => {
    if(error) {
      res.statusCode = 500;
      return res.json({
        message: 'Error in creating jwt'
      })
    }

    res.json({
      message: 'success',
      data: { username, token }
    })
  })
}

module.exports = loginHandler
