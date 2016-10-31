var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var file = process.argv[3]

function readFile(filepath) {
  var readable = fs.createReadStream(filepath);
  readable.on('data', function(chunk) {
    return chunk;
  })
}

var server = http.createServer(function(req, res) {
  console.log("request received");
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  var readable = fs.createReadStream(file);
  readable.pipe(res);
  readable.on('end', function() {
    res.end();
  })
})

server.listen(port, function() {
  console.log("server bound to " + port);
});
