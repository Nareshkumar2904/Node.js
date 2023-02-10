// Output statement using console.log.

console.log('Welcome to Node.js');
console.log("Welcome to create an Application");

//Input statement using readline Module.

const readline = require('readline');
const rl = readline.createInterface(
{    //provide two datas
    input: process.stdin,
    output: process.stdout
})
//provide two arguments in question method with one as callback function.
rl.question("please enter your name:", (name) => {
    console.log("Entered name is:" + name);
    rl.close();
})

//when ever use of close method(on() function calls with two arguments.
rl.on('close', () => {
    console.log('Entered name is correct');
    process.exit();
})