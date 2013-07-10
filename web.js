var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var content = fs.readFileSync( 'index.html', 'utf-8' );
  buf = new Buffer(256);
  buf.write( content );
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
