const fs = require('fs');
const path = require('path');
const { isBuffer } = require('util');

// Create a folder

/*
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if(err) throw err;
    console.log('Folder created...');
});
*/

// Create and write to file

fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world!\n', (err) => {
    if (err) throw err;
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Nodejs', (err) => {
        if (err) throw err;
    });
    console.log("File written");
    fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    console.log("File read...");
});

