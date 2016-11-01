var http = require('http')
var url = require('url')
var port = process.argv[2];

function parseTime(date) {
  return {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  }
}

function unixTime(date) {
  return {
    "unixtime": date.getTime()
  }
}

var server = http.createServer(function(req, res) {
  var reqUrl = url.parse(req.url, true);
  console.log(reqUrl);
  var date = new Date(reqUrl.query.iso);
  var result;
  if (reqUrl.pathname === '/api/parsetime')
    result = parseTime(date);
  else if (reqUrl.pathname === '/api/unixtime')
    result = unixTime(date);
  else
    result = {
      "error": "wrong path"
    }
  res.writeHead(200, {
    'content-type': 'application/json'
  })
  res.end(JSON.stringify(result) + '\n')
})

server.listen(port, function() {
  console.log("server listening on " + port);
});
