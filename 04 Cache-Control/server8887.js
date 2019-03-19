const http = require('http')
http.createServer(function(request, response) {
  console.log('request come', request.url)

  response.writeHead(200,{
    'Access-Control-Allow-Origin':'http://localhost:8888',
    'Access-Control-Allow-Headers':'X-Test-Cors',
    'Access-Control-Allow-Methods':'PUT',
    'Access-Control-Max-age':'1000'
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')
