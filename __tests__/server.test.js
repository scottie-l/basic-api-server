'use strict';

const express = require('express/lib/request');
const require = supertest(app);
const supertest = require('supertest');
const { app } = require('./server.js');
// const request = supertest(app);

describe('Testing the server', () => { 
  it('Should send 404 on a bad route', async () => { // testing for the route
    const res = await req.get('/clothes');
    expect(res.status).toEqual(404);
    expect(res.text).toEqual('Route not found');
  });
});

it('Should send 404 on a bad method', async () => { // testing for the method
  const res = await req.patch('/food/1');

  expect(res.status).toEqual(404);
  expect(res.text).toEqual('Route not found');
});

it('Should successfully create a food on POST', async () => { //testing the POST method on food
  const res = await req.post('/food').send({
    name: 'Steak', 
    type: 'Dinner',
  });
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data.name).toEqual('Steak');
});

it('Should successfully create clothes on POST', async () => { //testing the POST method on clothes
  const res = await req.post('/clothes').send({
    name: 'Pants', 
    color: 'Blue',
  });
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data.color).toEqual('Blue');
});

it('Should return a record of foods on GET', async () => { //testing the GET method on All food
  const res = await req.get('/food');
  expect(res.status).toEqual(200);
  expect(res.body[0].data.type).toEqual('Dinner');
});

it('Should return a record of clothes on GET', async () => { //testing the GET method on All clothes
  const res = await req.get('/clothes');
  expect(res.status).toEqual(200);
  expect(res.body[0].data.name).toEqual('Pants');
});

it('Should return a specific food using GET', async () => { //testing the GET method on a food
  const res = await req.get('/food/1');
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data.type).toEqual('Dinner');
});

it('Should return a specific clothing item using GET', async () => { //testing the GET method on a piece of clothing
  const res = await req.get('/clothes/1');
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data.name).toEqual('Pants');
});

it('Should update a specific record of food using PUT', async () => { //testing the PUT method on a food
  const res = await req.put('/food/1').send({
    name: 'Pizza', 
    type: 'Anytime',
  });
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data).toEqual({ name: 'Pizza', type: 'Anytime'});
});

it('Should update a specific record of clothing using PUT', async () => { //testing the PUT method on clothing
  const res = await req.put('/clothes/1').send({
    name: 'Socks', 
    color: 'White',
  });
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data).toEqual({ name: 'Socks', color: 'White'});
});

it('Should remove a specific record of food using DELETE', async () => { //testing the DELETE method on a food
  const res = await req.delete('/food/1');
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data).toEqual(null);
});

it('Should remove a specific record of clothing using DELETE', async () => { //testing the DELETE method on clothing
  const res = await req.delete('/clothes/1');
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1);
  expect(res.body.data).toEqual(null);
});
