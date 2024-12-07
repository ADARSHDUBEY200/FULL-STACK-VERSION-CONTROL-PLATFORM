const fs = require("fs").promises;
const path = require("path");
const {v4:uuid} =require("uuid");


 
 async function commitRepo(message){
    const repoPath = path.resolve(process.cwd(),".apnaGit");
    const stagePath = path.join(repoPath,"staging");
    const CommitPath = path.join(repoPath,"commits" );

    try {
        const commitID = uuid();
        const commitDir =path.join(CommitPath,commitID);
        // console.log(commitDir)

        await fs.mkdir(commitDir,{recursive:true});
        const files = await fs.readdir(stagePath);

        for(const file of files ){
            await fs.copyFile(path.join(stagePath,file) , path.join(commitDir, file) )
        };

       await fs.writeFile(path.join(commitDir,"commit.json"),JSON.stringify({message, date: new Date().toISOString()}));

       console.log(`COMMIT ${commitID} is created with the message : ${message}`)

        
    } catch (err) {

        console.log("SOMETHING WENT WRONG THE ERROR IS : "+err)
        
    }


 }
//  commitRepo();

 module.exports={commitRepo};
