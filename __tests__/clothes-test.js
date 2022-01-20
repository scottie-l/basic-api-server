'use strict'

const supertest = require('supertest');
const { db, ClothesSchema } = require('../lib/models');
const server = require('../lib/server');
const mockRequest = supertest(server.server);

beforeAll(async () => {
  await db.sync();
  await ClothesSchema.bulkCreate([
    {
      id: 0,
      brand: 'wrangler',
      size: '30',
      color: 'black',
      createdAt: new Date('2021-01-19'),
      updatedAt: new Date('2021-01-19'),
    },
    {
     id: 1,
     brand: "levi's",
     size: "28",
     color: "blue",
     createdAt: new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    }, 
    {
     id: 2,
     brand: "vans",
     size: "M",
     color: "black and white stripes",
     createdAt: new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    },
    {
     id: 4,
     brand: "hanes",
     size: "10",
     color: "white",
     createdAt:new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    },
    {
     id: 5,
     brand: "fruit of the loom",
     size: "28",
     color: "grey",
     createdAt: new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    },
    {
     id: 6,
     brand: "sketchers",
     size: "10",
     color: "black",
     createdAt: new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    },
    {
     id: 8,
     brand: "sketchers",
     size: "12",
     color: "black",
     createdAt: new Date('2021-01-19'),
     updatedAt: new Date('2021-01-19'),
    }
  ]);
});

afterAll(async () => {
  await db.drop();
});

describe('given /clothes', () => {
  describe('When GET', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.get('/clothes');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(
        [ {
            id: 1,
             brand: "levi's",
             size: "28",
             color: "blue",
             createdAt: ('2021-01-19'),
             updatedAt: ('2021-01-19'),
            }, 
            {
             id: 2,
             brand: "vans",
             size: "M",
             color: "black and white stripes",
             createdAt: ('2021-01-19'),
             updatedAt: ('2021-01-19'),
            },
            {
             id: 4,
             brand: "hanes",
             size: "10",
             color: "white",
             createdAt: ('2021-01-19'),
             updatedAt: ('2021-01-19'),
            },]
      );
    });
  });

  describe('When POST', () => {
    it('returns correct response body & status', async () => {
      const requestBody = {
        name: 'Converse',
        size: '10',
        color: 'green'
      }
      const response = await mockRequest.post('/clothes').send(requestBody);
      expect(response.status).toStrictEqual(200);
      expect(response.body.name).toStrictEqual('Converse');
      expect(response.body.size).toStrictEqual('10');
      expect(response.body.color).toStrictEqual('green');
      expect(response.body.id).toStrictEqual(9);
    });
  });
});

describe('Given /clothes/:id', () => {
  describe('When GET', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.get('/clothes/1');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(
        {
        id: 1,
        brand: "levi's",
        size: "28",
        color: "blue",
        createdAt: new Date('2021-01-19'),
        updatedAt: new Date('2021-01-19'),
        },
      );
    });
  });

  describe('When PUT', () => {
    it('returns correct response body & status', async () => {
      const requestBody = {
        brand: 'coach',
        size: 'large',
        color: 'moss'
      }
      const response = await mockRequest.put('/clothes/1').send(requestBody);
      expect(response.status).toStrictEqual(200);
      expect(response.body.name).toStrictEqual('coach');
      expect(response.body.size).toStrictEqual('large');
      expect(response.body.color).toStrictEqual('moss');
      expect(response.body.id).toStrictEqual(1);
    });
  });

  describe('When DELETE', () => {
    it('returns correct response body & status', async () => {
      const response = await mockRequest.delete('/clothes/1');
      expect(response.status).toStrictEqual(200);
      expect(response.body).toStrictEqual(1);
    });
  });
});
