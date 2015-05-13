var assert   = require('assert');
var should   = require('should');
var request  = require('supertest');


var url ='http://localhost:3000';
describe('Express Test', function() {

it('should pass first test', function(done){

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
    it('should pass second test', function(done){

        request(url)
            .get('/test')
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
