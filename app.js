/* const http = require('http');

const server = http.createServer((req,result)=>{
    if(req.url == '/'){
        result.end('welcome to our home page')
    }
      if(req.url == '/about'){
        result.end('Here is our short history')
    }

    result.end(`
    <h1>Oops</h1>
    <p >We can't find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000) */

const _ = require('lodash');
const items = [1,3,[2,[34,5]]];
const newItem = _.flattenDeep(items);
console.log(newItem);