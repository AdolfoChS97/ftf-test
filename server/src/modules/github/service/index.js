const { octokit } = require('../../../utils/octokit')
const { getAuthorCommitsByRepoMapper } = require('../mapper')
const log = require('npmlog')

async function getAuthorCommitsByRepo(owner, repo, query) {
    try {    
        log.info(`Requesting github api to get commits for repo: ${repo} and owner: ${owner}`, 'Github module')
        log.info(`Query params: ${JSON.stringify(query)}`, 'Github module')
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo,
            ...query
        }, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return getAuthorCommitsByRepoMapper(data)
    } catch (e) {
        throw e
    }
}


module.exports = {
    getAuthorCommitsByRepo
}