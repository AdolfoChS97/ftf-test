const express = require('express')
const router = express.Router()
const { getCommits } = require('./controller')

router.get('/:owner/:repo/commits', (req, res) => {
    return getCommits(req, res)
})

module.exports = router
