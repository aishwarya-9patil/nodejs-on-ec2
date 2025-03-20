var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('A Monk in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(3000); // Change the port from 80 to 3000
