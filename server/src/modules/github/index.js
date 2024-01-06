const express = require('express')
const router = express.Router()
const { getCommits } = require('./controller')
const log = require('npmlog')

router.get('/:owner/:repo/commits', (req, res) => {
    log.info('Executing /:owner/:repo/commits', 'Github module')
    return getCommits(req, res)
})

module.exports = router
