var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
console.log("New change made");
console.log("this is to test close issue by commit");

app.get('/sb', function (req, res) {
	res.status(200).json({status:'suceess',message:'code deploy test 1'});
	console.log({success:'true'});
});
app.get('/test', function (req, res) {
  res.status(200).json({status:'suceess',message:'hello world test'});
  console.log({success:'true'});
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
