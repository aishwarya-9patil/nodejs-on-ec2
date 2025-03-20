var http = require('http');

http.createServer(function (req, res) {
  console.log("Received request");
  res.write('Hello world');
  res.end();
}).listen(3000, () => {
  console.log("Server running at http://0.0.0.0:3000/");
});

