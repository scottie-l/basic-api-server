'use strict';

const { app } = require('../lib/server.js');
const { db } = require('../lib/models');
const supertest = require('supertest');
const request = supertest(app);
const logger = require('../lib/middleware/logger');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the logger', () => {
  describe('when called', () => {
    it('should pass to next function', async () => {
      let requestObject = {}
      let responseObject = {};
      let nextFunction = jest.fn();

      logger(requestObject, responseObject, nextFunction);
      expect(nextFunction).toHaveBeenCalled();
    });
    //   const response = await request.get('/clothes', '/food'); // make route

    //   expect(response.status).toEqual(200);
    //   expect(response.body.count).toBeDefined({});
    //   expect(response.body.results).toBeDefined({});
    // });
    // it('should read from the db', async () => {
    //   const response = await request.get('/clothes', '/food'); // make route
    //   expect(response.status).toEqual(200);
    //   expect(response.body.count).toEqual(1);
    //   expect(response.body.results).toBeDefined();
  });
});
