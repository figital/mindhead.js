var http = require('http');
var sys  = require('util');
var router = require('./router/router.js');

http.createServer(function(request, response) {
  router.route(request, response);

}).listen(8008);
