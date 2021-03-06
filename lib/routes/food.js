'use strict';

// const express = require('express');
// const router = express.Router(); // gives us an object to define routing logic
// const validator = require('../middleware/validator.js');

// const { FoodModel } = require('../food.js');


// const FoodSchema = require('../models/food.js');
// const { FoodSchema } = require('../models/food.js');
// const { FoodModel } = require('../models/index.js');
// const food = new FoodModel();

// const { FoodSchema } = require('../models/food.js');
// const food = new FoodSchema();

// router.get('/food', getFoods);
// router.get('/food/:id', validator, getFoodById);
// router.post('/food', createFood);
// router.put('/food/:id', validator, updateFood);
// router.delete('/food/:id', validator, removeFood);

// async function read(req, res, next) {
//   console.log('Reading from db.food');

//   let { id } = req.params;
//   let food;
//   if (id) {
//     food = await FoodModel.findOne({where: {id}});
//   } else {
//     food = await FoodsModel.findAll();
//   }

//   let resObject = {
//     count: food ? food.length : 1,
//     results: food,
//   };
//   res.status(200).json(resObject);
// }

// function getFoods(req, res, next) {
//   let resObj = food.read(); // findAll()
//   res.json(resObj);
// }

// function getFoodById(req, res, next) {
//   const id = parseInt(req.params.id);
//   let resObj = food.read(id); // findAll({ where: { id }});
//   res.json(resObj);
// }
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

// function createFood(req, res, next) {
//   const foodObj = req.body;
//   let resObj = food.create(foodObj);  // food.create({ where: { id }});
//   res.json(resObj);
// } 

// function updateFood(req, res, next) {
//   const id = parseInt(req.params.id); // findAll({ where: { id }});
//   const foodObj = req.body;
//   let resObj = food.update(id, foodObj);
//     res.json(resObj);
// }  

// function removeFood(req, res, next) {
//   const id = parseInt(req.params.id); 
//   let resObj = food.delete(id); //.destroy({ where: { id });
//   res.json(resObj);
// } 

// module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance. 