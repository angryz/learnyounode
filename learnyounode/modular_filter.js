var fs = require('fs')
var path = require('path')

module.exports = function(dir, filterStr, callback) {

  fs.readdir(dir, function(err, files) {
    if (err) return callback(err)

    if (files) {
      files = files.filter(function(file) {
        return path.extname(file) === '.' + filterStr
      })
    }
    callback(null, files);
  })

}
