const jsonSend = (req, res, next) => {
  res.json = (response) => {
    res.setHeader('Content-Type', 'application/json')
    const jsonResponse = JSON.stringify(response)
    res.end(jsonResponse)
  }

  next()
}

module.exports = jsonSend
