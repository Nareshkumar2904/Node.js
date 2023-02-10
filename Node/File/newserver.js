const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./index.html','utf-8');
const file = http.createServer((req, res) => {
    console.log("Server created");
    let path = req.url;
     if(path === '/' || path.toLocaleLowerCase() === '/home'){
        res.end(html.replace('{{%%content%}}',"You're in Home page"));
     }else if(path.toLocaleLowerCase() === '/about'){
        res.end(html.replace('{{%%content%}}',"You're in About page"));
     }else{
        res.end(html.replace('{{%%content%}}',"Error 404:Page not Found"));
     }

})
file.listen(3000, () => {
    console.log("server started");
   
})
