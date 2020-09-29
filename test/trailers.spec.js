const request = require('supertest')
const should = require('should');
const app = require('../src/app') // the express server
const expect = require('chai').expect

it('should respond with a YouTube link on post', function(done) {
  request(app)
    .post('/trailers/')
    .send({"url":"http://content.viaplay.se/pc-se/film/remember-me-2010"})
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) done(err);
      res.body.should.have.property('trailer_url', 'https://www.youtube.com/watch?v=iFFas72-dTY');
       });
    done();
});