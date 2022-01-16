'use strict';

const express = require('express');
const router = express.Router(); // gives us an object to define routing logic
const validator = require('../middleware/validator.js');

const { FoodModel } = require('../models/food.js');
const food = new FoodModel();


router.get('/food', getFoods);
router.get('/food/:id', validator, getFoodById);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, removeFood);

function getFoods(req, res, next) {
  let resObj = food.read();
  res.json(resObj);
}

function getFoodById(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = food.read(id);
  res.json(resObj);
}

function createFood(req, res, next) {
  const foodObj = req.body;
  let resObj = food.create(foodObj);
  res.json(resObj);
} 

function updateFood(req, res, next) {
  const id = parseInt(req.params.id);
  const foodObj = req.body;
  let resObj = food.update(id, foodObj);
    res.json(resObj);
}  

function removeFood(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = food.delete(id);
  res.json(resObj);
} 

module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance.