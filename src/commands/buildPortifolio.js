const { getUser, requestRepos } = require("../../src/githubData/requestGit");

async function buildPortifolio(username) {
    const user = await getUser(username);
    const repos = await requestRepos(username);

    console.log(user, repos)
}

module.exports = { buildPortifolio };