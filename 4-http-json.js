let http = require('http');
let fs = require('fs')

let server = http.createServer((request,response) => {
    
    
const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': '*',
  };
   response.writeHead(200, headers);
   console.log('params ' + request.params)
    fs.readFile('students.json','utf-8',(err,data)=>{
        response.write(data);
        response.end();                                     //calling end() is MUST
    })
    
    
});
server.listen(5000)
console.log(server);