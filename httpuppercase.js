var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST')
    return res.end('send me a POST\n')
  res.writeHead(200, {
    'content-type': 'utf8'
  });
  req.pipe(map(function(chunk) {
    console.log('received: ' + chunk.toString());
    return chunk.toString().toUpperCase();
  })).pipe(res);
})

server.listen(port, function() {
  console.log("server bound to " + port);
})
