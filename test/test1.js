var assert   = require('assert');
var should   = require('should');
var request  = require('supertest');


var url ='http://localhost:3000';
describe('Express Test', function() {

it('should pass first test', function(){

request(url)
   .get('/')
   .end(function(err, res) {
        if (err) {
        throw err;
        }
        res.should.have.status(200);
        res.should.have.property('success',true)
        done();
        });
});

 });
