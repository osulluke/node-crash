console.log('Hello from Node.js! Inside, index.js');
const Person = require('./person.js');
const Logger = require('./logger.js');
//import Person from './person.mjs';
person = new Person("Luke O'Sullivan", 40);
person.greeting();
console.log(person);


// Using a logger / Event emitters
const logger = new Logger();

logger.on('message', (data) => console.log("Called listener", data));
logger.log('Hello World');
logger.log("Hi");
logger.log("Another one");

// Web server stuff

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    /*
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if(req.url === '/api/users') {
        const users = [
            {name: "Bob Smith", age: 40},
            {name: "Luke O'Sullivan", age: 40}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    */

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url);
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') { // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                    console.log(`Content = ${content}`);
                })
            }
            else {// Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else { //success
            res.end(content, 'utf8');
        }
    });
    console.log(filePath);
    console.log(req.url);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server running on ${port}.`);
});