function getAuthorCommitsByRepoMapper(data) {
    try {
        const commits =  data?.map(i => {
            const { sha, commit } = i
            const { message, author } = commit
            return {
                sha,
                message,
                author
            }
        }, [])

        return commits
    } catch (e) {
        throw e
    }
}


module.exports = {
    getAuthorCommitsByRepoMapper
}