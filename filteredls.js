var fs = require('fs');
var filter = process.argv[2];
var dir = process.argv[3];
console.log(filter);
console.log(dir);
fs.readdir(dir, function(err, files){
  if (err) console.log(err);
  if (files) {
    files.forEach(function(x){
      if (x.endsWith(filter))
        console.log(x);
    });
  }
});
