'use strict';

const supertest = require('supertest');
const { db, FoodModel } = require('../lib/models');
const server = require('../lib/server');
const mockRequest = supertest(server.server);

beforeAll(async () => {
  await db.sync();
  await FoodModel.bulkCreate([
    {
     id: 1,
     name: "pizza",
     flavor: "peperoni",
     isHealthy: true,
    //  createdAt: new Date('2021-01-19'),
    //  updatedAt: new Date('2021-01-19'),
    },
    {
      id: 2,
      name: "pizza",
      flavor: "peperoni and pineapple",
      isHealthy: true,
    //   createdAt: new Date('2021-01-19'),
    //   updatedAt: new Date('2021-01-19'),
    }, 
    {
      id: 3,
      name: "salad",
      flavor: "greek",
      isHealthy: true,
    //   createdAt: new Date('2021-01-19'),
    //   updatedAt: new Date('2021-01-19'),
    },
    {
        id: 4,
        name: "soup",
        flavor: "chowder",
        isHealhy: false,
        // createdAt: new Date('2021-01-19'),
        // updatedAt: new Date('2021-01-19'),
      }
  ]);
});

afterAll(async () => {
  await db.drop();
});

describe('Given /food', () => {
  describe('When GET', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.get('/food');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(
        [
          {
            id: 1,
            name: "pizza",
            flavor: "peperoni",
            isHealthy: true,
            // createdAt: ('2021-01-19'),
            // updatedAt: ('2021-01-19'),
          },
          {
            id: 2,
            name: "pizza",
            flavor: "peperoni and pineapple",
            isHealthy: true,
            // createdAt: ('2021-01-19'),
            // updatedAt: ('2021-01-19'),
          },
          {
            id: 3,
            name: "salad",
            flavor: "greek",
            isHealthy: true,
            // createdAt: ('2021-01-19'),
            // updatedAt: ('2021-01-19'),
          }
        ]
      );
    });
  });

  describe('When POST', () => {
    it('returns correct response body & status', async () => {
      const requestBody = {
        id: 4,
        name: "chicken",
        flavor: "dinner",
        isHealthy: true,
      }
      const response = await mockRequest.post('/food').send(requestBody);
      expect(response.status).toStrictEqual(200);
      expect(response.body.id).toStrictEqual(4);
      expect(response.body.name).toStrictEqual('chicken');
      expect(response.body.flavor).toStrictEqual('dinner');
      expect(response.body.isHealthy).toStrictEqual(true);
    });
  });
});

describe('Given /food/:id', () => {
  describe('When GET', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.get('/food/1');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(
        {
         id: 1,
         name: "pizza",
         flavor: "peperoni",
         isHealthy: true,
        //  createdAt: ('2021-01-19'),
        //  updatedAt: ('2021-01-19'),
        },
      );
    });
  });

  describe('When PUT', () => {
    it('returns correct response body & status', async () => {
      const requestBody = {
        name: "cereal",
        flavor: "breakfast",
        isHealthy: false,
      }
      const response = await mockRequest.put('/food/1').send(requestBody)
      expect(response.status).toStrictEqual(200);
      expect(response.body.name).toStrictEqual('cereal');
      expect(response.body.flavor).toStrictEqual('breakfast');
      expect(response.body.isHealthy).toStrictEqual(false);
      expect(response.body.id).toStrictEqual(1);
    });
  });

  describe('When DELETE', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.delete('/food/1');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(1);
    });
  });
});

