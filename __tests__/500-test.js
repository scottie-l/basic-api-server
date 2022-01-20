'use strict';

const supertest = require('supertest');
const server = require('../lib/server');
const request = supertest(server.server);

describe('The server is not responding', () => {
  describe('When GET', () => {
    it('returns 500 status', async () => {
      const response = await request.get('Sorry, server error');
      expect(response.status).toStrictEqual(500);
    });

    it('returns correct error object', async () => {
      const response = await request.get('Sorry, server error');
      expect(response.body).toStrictEqual(
        {
          status: 500,
          message: 'server error'
        }
      );
    });
  });
});