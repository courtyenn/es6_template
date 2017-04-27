import http from 'http';
import assert from 'assert';

import '../build/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get(`http://127.0.0.1:${process.env.PORT}`, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});