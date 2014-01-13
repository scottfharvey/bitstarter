var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var buffer = fs.readFileSync('index.html');
var string = Buffer.toString(buffer);

  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
