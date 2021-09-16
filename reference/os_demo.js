const os = require('os');

//platform
console.log(os.platform());

//architecture
console.log(os.arch());

//cpus
console.log(os.cpus());

//memory
console.log(os.freemem());
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//uptime
console.log(os.uptime());