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

const fs = require('fs');
// Read the contents of the file '/content.md' synchronously and store them in 'data'
const data = fs.readFileSync('/content.md', 'utf8');
// Print the contents of 'content.md' to the console
console.log(data);

let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

const url = require('url');
let webAddress = 'https://example.com/over/there?name=ferret';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {name: 'ferret'}
console.log(qrydata.name); //outputs ferret

let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
