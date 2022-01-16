'use strict';

const { app } = require('../lib/server.js');
const { db } = require('../lib/models');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the logger', () => {
  it('should read from the db', async () => {
    const response = await request.get('/route'); // make route

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
  it('should read from the db', async () => {
    const response = await request.get('/route'); // make route

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
    expect(response.body.results).toBeDefined();
  });
});
