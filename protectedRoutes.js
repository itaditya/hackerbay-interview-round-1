const polka = require('polka')

const guardMw = require('./middlewares/guard')
const patchHandler = require('./handlers/patch')
const thumbnailHandler = require('./handlers/thumbnail')

const app = polka()

app.use(guardMw)

app.patch('/patch', patchHandler)
app.post('/thumbnail', thumbnailHandler)

module.exports = app
