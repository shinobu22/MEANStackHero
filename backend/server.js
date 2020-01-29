const express = require('express')
const app = express()
const PORT = 8081

app.use('/api/v1', require('./v1/api'))

app.listen(PORT, () => {
  console.log('[server] running ...')
})