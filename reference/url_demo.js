const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// root domain
console.log(myUrl.host);

//host name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);
console.log(myUrl);

//Serialized query
console.log(myUrl.search);
console.log(myUrl.searchParams);

// add parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl);

// loop through params
myUrl.searchParams.forEach((value, name) => 
    console.log(`${name} = ${value}`)
);