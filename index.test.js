// app.test.js
const request = require('supertest');
const app = require('./index.js');

describe('GET /', () => {
  it('should return CI', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'CI' });
  });
});