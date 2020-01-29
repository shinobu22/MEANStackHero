const express = require('express')
const router = express.Router()

router.use(require('./endpoint/member'))
router.use(require('./endpoint/product'))

module.exports = router