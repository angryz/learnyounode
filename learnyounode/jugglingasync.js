var http = require('http')
var bl = require('bl')
var count = 0
var results = [];

function printResults() {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(i) {
  http.get(process.argv[i + 2], function(resp) {
    resp.pipe(bl(function(err, data) {
      if (err) return console.error(err);
      results[i] = data.toString();
      count++;
      if (count === 3)
        printResults();
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
