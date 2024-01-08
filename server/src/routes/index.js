const express = require('express')
const router = express.Router()

router.use('/github', require('../modules/github'))

module.exports = router