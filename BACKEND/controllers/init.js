const fs = require("fs").promises;
const path = require("path");

async function initRepo() {
    const repoPath = path.resolve(process.cwd(), ".apnaGit")
    const commitsPath = path.join(repoPath, "commits")

    try {
        await fs.mkdir(repoPath, { recursive: true }, (err) => { });
        await fs.mkdir(commitsPath, { recursive: true }, err => { });
        await fs.writeFile(
            path.join(repoPath, "config.json"),
            JSON.stringify({bucket:process.env.S3_BUCKET})
            ), 
            console.log("repository is Initalised");
    } catch (err) {
        console.log("SOMETHING WENT WRONG " + err)

    }
}

module.exports = { initRepo };

