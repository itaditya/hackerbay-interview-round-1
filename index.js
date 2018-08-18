require('dotenv').config()
const polka = require('polka')
const { json } = require('body-parser')

const protectedRoutes = require('./protectedRoutes')
const jsonSendMw = require('./middlewares/jsonSend')
const loggerMw = require('./middlewares/logger')
const loginHandler = require('./handlers/login')

const app = polka()

app.use(json(), jsonSendMw, loggerMw)
app.use('/protected', protectedRoutes)

app.get('/', (req, res) => res.json({ message: 'server running' }))
app.post('/login', loginHandler)

app.listen(5000).then(() => console.log(`> Running on http://localhost:5000`))
