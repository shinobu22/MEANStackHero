const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8081

app.use(cors())

app.use(express.json())

app.use('/api/v1', require('./api'))

app.listen(PORT, () => {
  console.log('[server] running ...')
})