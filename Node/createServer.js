const http =require('http');

const server = http.createServer((req,res) => {
    res.write("Hello, Welcome to Node.js");
    res.end("hello");
    console.log('Hello Node.js');
})
server.listen(3000, ()=>{
    console.log('Welcome all');
})