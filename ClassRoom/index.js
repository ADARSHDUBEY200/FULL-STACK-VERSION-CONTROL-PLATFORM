const { exec } = require("child_process");
const { Console, clear } = require("console");
const fs = require("fs");
const path = require("path");


// ASYNCHRONOUS READING OF THE FILE 

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return;
//     }
//     console.log('File content:', data);
//   });


// console.log( fs.readFileSync('example.txt', 'utf8'))
// console.log('File content:', data);


// fs.writeFile('example.txt', 'ADARHS DUBEY', (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return;
//     }
//     console.log('File written successfully!');
//   });

//   fs.mkdir('new-folder', { recursive: true }, (err) => {
//     if (err) {
//       console.error('Error creating directory:', err);
//       return;
//     }
//     console.log('Directory created successfully!');
//   });
 
  // console.log( fs.mkdir('new-folder 3', { recursive: true },(err)=>{
    
  // }));
  
  // fs.mkdir("hiddenfolder", {recursive:true},(err)=>{
  //   if(err){
  //     console.log("THE ERROR IS NOW HAPPENED ")
  //   }
  // })
  // fs.mkdir(".hiddenfolder5", {recursive:true},(err)=>{
  //   if(err){
  //     console.log("THE ERROR IS NOW HAPPENED ")
  //   }
  // })

  // const repopath = path.resolve(process.cwd(),"-hapnagit4");

  // fs.mkdir(repopath,{recursive:true},(err)=>{
  //   if(err){
  //     console.log("the error is now happen and the error is : "+err)
  //   }
  //   console.log("Your directotory is made succssefully ")
  // })

 
// Create a folder path
// const repopath = path.resolve(process.cwd(), '-hapnagit5');

// // Create the folder
// fs.mkdir(repopath, { recursive: true }, (err) => {
//   if (err) {
//     console.log("The error occurred while creating the folder: " + err);
//     return;
//   }
  
//   console.log("Directory created successfully.");

//   // Set the folder as hidden using the 'attrib' command (Windows-specific)
//   exec(`attrib +h "${repopath}"`, (error, stdout, stderr) => {
//     if (error) {
//       console.log(`Error setting hidden attribute: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`Folder '${repopath}' is now hidden!`);
//   });
// });


// console.log(" the directory is : "+process.cwd());

// const path1 = path.resolve(process.cwd(),"basics");
//  fs.mkdir("path1", (err)=>{
//   if(err){
//     console.log("THERE IS AN ERROR ")
//   }

//   console.log("the file is now created")
// })

const repoPath= path.resolve(process.cwd(),"Try")
// // console.log(repop)
  
// // const fs = require('fs');

// fs.readdir(repoPath, { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }

//   for (const key of files) {
//     console.log(key); // Access the name of the file or directory
//   }
// });

fs.copyFile(path.join(repoPath,"Adarsh.txt"), path.join(process.cwd(),"Adarsh.txt"),(err)=>{
  if(err){
    console.log("the error is : "+err)
  }else{
    console.log("THE FILE IS NOW COPIED : ")
  }
});

  
  