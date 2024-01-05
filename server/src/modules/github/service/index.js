const { octokit } = require('../../../utils/octokit')
const { getAuthorCommitsByRepoMapper } = require('../mapper')

async function getAuthorCommitsByRepo(owner, repo, query) {
    try {    
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