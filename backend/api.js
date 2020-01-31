const express = require('express')
const router = express.Router()
require('./config/db')

router.use(require('./endpoint/member'))
router.use(require('./endpoint/product'))
router.use(require('./endpoint/transaction'))

module.exports = router