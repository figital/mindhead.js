var sys  = require('util');
var http = require('http');
var url = require("url");
var localhost = require("../localhost/localhost.js");
var remotehost = require("../remotehost/remotehost.js");

// Main router for server
var route = function(request,response){
  var host = url.parse(request.url).host;
  sys.log(request.connection.remoteAddress + ": " + request.method + " " +host);
  //sys.log(sys.inspect(url.parse(request.url)));
  
  // check for localroutes, if so sent to locahost processor
  for (var i in localhost.localroutes){
	  if (localhost.localroutes[i].test(host)){
	        sys.log("Local routing");
		localhost.process(request,response);
		return;
	  }
	  
  }
  sys.log("Not Local");
  // else send to remotehost processor
  remotehost.process(request,response);
  return;
}

exports.route=route;
