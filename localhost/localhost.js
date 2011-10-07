var sys  = require('util');
var http = require('http');
var url = require("url");

var localroutes = (function(){
 var localroutes = [
	'mindhead'
	];
 return localroutes.map(function(rx) { return RegExp(rx) });
})();


var process = function(request,response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

exports.localroutes = localroutes;
exports.process=process;
