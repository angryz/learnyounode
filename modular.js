var filter = require('./modular_filter')
var dir = process.argv[2]
var filterStr = process.argv[3]

filter(dir, filterStr, function(err, files) {
  if (err) return console.error('Error: ', err);

  files.forEach(function(file) {
    console.log(file);
  })
})
