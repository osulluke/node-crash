const path = require('path');

//Basename: gets base file name

console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));

console.log(path.extname(__filename));

// create path object parse
const MyObj = path.parse(__filename);

console.log(MyObj);
console.log(MyObj.name);

// create a concatenated path
console.log(path.join(__dirname, 'test', 'hello.html'));