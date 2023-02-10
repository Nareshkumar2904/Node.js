const fs = require('fs');


fs.readFile('./Read Write files/input.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fs.readFile('./Read Write files/${data1}.txt', (error2, data2) => {
        console.log(data2);
        fs.writeFile('./Read Write files/output.txt', `${data1}\n${data2}`, () => {
            console.log("async file");
        });
    })
})
console.log('Read me...')
