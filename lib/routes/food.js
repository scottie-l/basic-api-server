'use strict';

const express = require('express');
const { FoodModel } = require('../food.js');

const router = express.Router(); // gives us an object to define routing logic

router.get('/food', read);
router.get('/food/:id', read);
router.post('/food', create);
router.patch('/food/:id', update);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

async function read(req, res, next) {
  console.log('Reading from db.food');

  let { id } = req.params;
  let food;
  if (id) {
    food = await FoodModel.findOne({where: {id}});
  } else {
    food = await FoodsModel.findAll();
  }

  let resObject = {
    count: food ? food.length : 1,
    results: food,
  };
  res.status(200).json(resObject);
}

function create(req, res, next) {
  res.send('working on it');
} // pass in data requires req.body(or Query) req.params

function update(req, res, next) {
  res.send('working on it');
}  // food = await FoodModel.findOne({where: {id}});

function remove(req, res, next) {
  res.send('working on it');
} // food = await FoodModel.findOne({where: {id}});

module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance.