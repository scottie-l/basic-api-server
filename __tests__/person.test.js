'use strict';

const supertest = require('supertest');
const { app } = require('../server.js');
const request = supertest(app);

describe('Testing the person route', () => {
  it('Should return a status 200, and JSON', async () => {
    // make the request using this url:  http://localhost:3000/person?name=Jacob
    let response = await request.get('/person?name=Jacob');

    // expect response.status to equal 200
    expect(response.status).toEqual(200);
    // expect response.body to have a name equal to 'Jacob'
    expect(response.body.name).toEqual('Jacob');
  });
});
