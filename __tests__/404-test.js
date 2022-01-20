'use strict';

const supertest = require('supertest');
const server = require('../lib/server');
const request = supertest(server.server);

describe('The route does not exist', () => {
  describe('When GET', () => {
    it('returns 404 status', async  () => {
      const res = await request.get('route does not exist');
      expect(res.status).toStrictEqual(404);
    });
  });

  describe('When POST', () => {
    it('returns 404 status', async  () => {
      const res = await req.post('route does not exist');
      expect(res.status).toStrictEqual(404);
    });
  });
});