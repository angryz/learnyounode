var net = require('net')
var port = process.argv[2]

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function getTimeStr() {
  var date = new Date();
  return date.getFullYear() + "-" +
    zeroFill(date.getMonth() + 1) + "-" +
    zeroFill(date.getDate()) + " " +
    zeroFill(date.getHours()) + ":" +
    zeroFill(date.getMinutes());
}

var server = net.createServer(function(socket) {
  console.log("client connected");
  socket.on('end', function() {
    console.log("client disconnected");
  });
  socket.end(getTimeStr() + '\r\n');
})
server.listen(port, function() {
  console.log("server bound");
});
