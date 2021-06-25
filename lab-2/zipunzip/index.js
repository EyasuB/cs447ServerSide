const fs = require('fs');
const zlib = require('zlib');
const myFileContents = fs.createReadStream('./data/myfile.txt.gz');
//console.log(myFileContents);
// How do we then unzip the file? We need to use stream 
const writeStream = fs.createWriteStream('./data/myfile.txt');
const unzip = zlib.createGunzip();
// we need to pipe the unzipped data to a new file like [Original file--> unzip stream--> new file]
// This could be simple for one file as 
myFileContents.pipe(unzip).pipe(writeStream); // Works 
// But what if we have many files to unzip in the folder data? 
// We can use forEach 
const filesInDir = fs.readdirSync('./data');
filesInDir.forEach(filename => {
    const myFileContents = fs.createReadStream(`./data/${filename}`);
    const writeStream = fs.createWriteStream(`./data/${filename.slice(0,-3)}`);
    const unzip = zlib.createGunzip();
    myFileContents.pipe(unzip).pipe(writeStream);
})