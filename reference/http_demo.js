const http = require('http');

// Create a server object

const port = 5000;

http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(port, () => console.log(`Server running on ${port}.`))