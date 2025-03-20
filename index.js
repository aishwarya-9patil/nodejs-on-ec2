var http = require('http');

// Create server and add a callback to check the status
http.createServer(function (req, res) {
  console.log("Received a request"); // Log when a request is received
  res.write('Hello world');
  res.end();
}).listen(3000, () => {
  console.log("Server is running at http://0.0.0.0:3000/");
});


