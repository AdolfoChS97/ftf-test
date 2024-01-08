const { Octokit, App } = require("octokit")
const { GITHUB_TOKEN } = process.env

const octokit = new Octokit({
    auth: GITHUB_TOKEN,
})

module.exports = {
    octokit,
    App
}