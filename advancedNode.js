let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6000);//the server instance listens for http requests on port 6000

const fs = require('fs');
// Synchronously read the file 'sample.txt' and store its contents in 'data'
const data = fs.readFileSync('sample.txt', 'utf8');
// Print the contents of 'sample.txt' to the console
console.log(data);
