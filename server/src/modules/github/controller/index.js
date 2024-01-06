const { BAD_REQUEST, SUCCESS, INTERNAL_SERVER_ERROR, OK } = require('../../../common/constants')
const { getAuthorCommitsByRepo } = require('../service')
const schema = require('../schema')
const log = require('npmlog')

getCommits = async (req, res) => {
    try {
        const { query } = req
        const { owner, repo } = req.params
        log.info(`Params: ${JSON.stringify(req.params)}, Queries: ${JSON.stringify(query)} ` , 'Github module')
        const { error } = schema.validate({ owner, repo, ...query }, { abortEarly: false })
        if (error) {
            const { details } = error
            const message = details.map(i => i.message).join(', ')
            log.info(`Validation error: ${JSON.stringify(message)}`, 'Github module')
            throw { message, status: BAD_REQUEST }
        }

        const result = await getAuthorCommitsByRepo(owner, repo,  { page: query?.page, per_page: query?.perPage, author: query?.author, since: query?.since, until: query?.until })
        log.info(`Result: ${JSON.stringify(result)}`, 'Github module')
        res.status(SUCCESS).json({ data: result, meta: result.length, message: OK })
    } catch (e) {
        res.status(e.status || INTERNAL_SERVER_ERROR).json({ message: e.message })
    }
}

module.exports = {
    getCommits
}