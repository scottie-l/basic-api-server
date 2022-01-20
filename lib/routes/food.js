'use strict';

// import dependencies
const express = require('express');
const router = express.Router(); // gives us an object to define routing logic
const { FoodModel } = require('../models/index.js');
const validator = require('../middleware/validator.js');

// routes (restful) set-up
router.get('/food', getFoods);
router.get('/food/:id', validator, getFoodById);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, removeFood);

// route ReSTful functions
async function getFoods(req, res, next) { // Get all food
  try {
    let resObj = await FoodModel.findAll();
    res.status(200).json(resObj);
  } catch(error) {
    res.send(error);
    console.error(error.message)
  };
};

async function getFoodById(req, res, next) { // get specific food item
  try {
    const id = parseInt(req.params.id);
    let resObj = await FoodModel.findOne({ where: { id: id }}); // foodObj maybe?
    res.status(200).json(resObj);
  } catch(error) {
    console.error(error.message)
  };
};

async function createFood(req, res, next) { // create food
  try {
    const foodObj = req.body;
    let resObj = await FoodModel.create(foodObj);
    res.status(200).json(resObj);
  } catch(error) {
    res.send(error.message);
    console.error(error.message);
  };
};

async function updateFood(req, res, next) { // update clothes
  try {
    const id = parseInt(req.params.id);
    const foodObj = req.body;
    let resObj = await FoodModel.findOne({ where: { id: id }}); // or foodObj?
    let newResObj = await resObj.update(foodObj);
    res.status(200).json(newResObj);
  } catch(error) {
    console.error(error.message)
  };
};

async function removeFood(req, res, next) { // remove food
  try {
    const id = parseInt(req.params.id);
    let resObj = await FoodModel.destroy({ where: { id: id }});
    res.status(200).json(resObj);
  } catch(error) {
    console.error(error.message)
  };
};

module.exports = router;
// In your routers, require() the correct data model and instantiate a new instance.
