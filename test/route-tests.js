process.env.NODE_ENV = 'test';

var chai = require('chai');
var mocha = require('mocha');
var chaiHttp = require('chai-http');
var server = require('../src/server/app.js');

var should = chai.should();
chai.use(chaiHttp);

describe('server router', function() {
  it('should return a json message', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      console.log(res.text);
      res.should.have(200);
      res.title.should.be('Express');
      // res.header.should.be('text/html');

      done();
    });
  });
});
