// app.test.js
const request = require('supertest');
const {app, server} = require('./index.js');
afterAll(() => server.close()); // ← fixes the Jest hang

describe('GET /', () => {
  it('should return CI', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'CI' });
  });
});