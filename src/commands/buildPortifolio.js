const { getUser, requestRepos } = require("../../src/githubData/requestGit");
const fs = require("fs").promises;
const path = require("path");
const portifolioPath = path.join(__dirname, "../app/data/portifolio.json");

async function buildPortifolio(username) {    
    try {
        const currentData = await fs.readFile(portifolioPath, 'utf-8');

        const portifolioData = JSON.parse(currentData);

        const user = await getUser(username);


        portifolioData.userInfo.name = user.name || '';
        portifolioData.userInfo.username = user.login || '';
        portifolioData.userInfo.profileImagePath = user.avatar_url || '';


        const updatedData = JSON.stringify(portifolioData, null, 2);

        await fs.writeFile(portifolioPath, updatedData);

        console.log("Dados Carregados com sucesso")

    } catch (error) {
        console.log('Erro ao atualizar portifolio, tente novamente', error.message);
    }
}

module.exports = { buildPortifolio };
