const fs = require('fs').promises;
const path=require("path");
const { fileURLToPath } = require('url');



async function addRepo(filePath){
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const stagingPath = path.resolve(repoPath,"staging");

    try {
        await fs.mkdir(stagingPath,{recursive:true});
        const fileName = path.basename(filePath)
        await fs.copyFile(filePath,path.join(stagingPath, fileName))
        console.log(`File ${fileName} is Added to the staging area`)

    } catch (error) {
        console.log("ERROR HAPPEN IN ADDING THE FILE : " +error)
        
    }
   
}

module.exports ={addRepo}