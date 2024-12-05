const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controllers/init");
const {addRepo}=require("./controllers/add");
const {pushRepo}=require("./controllers/push");
const {pullRepo}=require("./controllers/pull");
const {commitRepo}=require("./controllers/commit");
const {revertRepo}=require("./controllers/revert");


yargs(hideBin(process.argv))
    .command("init", "Initalise the new repository", {}, initRepo)
    .command("add <file>", "add the file to the staging area", (yargs) => {
        yargs.positional("file", {
            describe: "File to add the staging area",
            type: "string"
        })
    },
        addRepo)
    .command("push", "push the file to the repository", {},pushRepo)
    .command("pull", "Initalise the new repository", {}, initRepo)
    .command("commit <message>", "Initalise the new repository",(yargs)=>{
        yargs.positional("message",{
            describe:"Commit message",
            type:"string"
        })
    }, commitRepo)
    .command("revert <commitId>", "Revert To The Specific commit",(yargs)=>{
        yargs.positional("commitId",{
            describe:"commit Id to Revert to",
            type:"string"
        })
    }, revertRepo)
    .demandCommand(1, "YOU NEED TO GIVE ATLEAST ONE COMMAND ").help().argv;


