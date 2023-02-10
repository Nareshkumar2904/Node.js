// To read and write a file system use this,first import filesystem module.
const fs = require('fs');

//Input data
let textInput = fs.readFileSync('./Read Write files/input.txt');
console.log(textInput);

//Output data
let textOutput = `Hello How are you, welcome to Node.js ${textInput}`;
fs.writeFileSync('./Read Write files/output.txt', textOutput);
console.log(textOutput); 