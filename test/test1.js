var assert   = require('assert');
var should   = require('should');
var request  = require('supertest');


var url ='http://localhost:3000';
var server;
describe('Express Test', function() {
before(function(done) {
   var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).json({status:'suceess',message:'hello world'});
    console.log({success:'true'});
});
app.get('/test', function (req, res) {
  res.status(200).json({status:'suceess',message:'hello world test'});
  console.log({success:'true'});
});
server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
done();
});
});

after(function(done) {
    server.close();
    done();
});

it('should pass first test', function(done){

request(url)
   .get('/')
   .expect(200)
   .end(function(err, res) {
        if (err) {
        throw err;
        }
       
        done();
        });
});
    it('should pass second test', function(done){

        request(url)
            .get('/test')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                
                done();
            });
    });

 });
