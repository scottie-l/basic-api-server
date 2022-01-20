'use strict';

// import dependencies
const express = require('express');
const router = express.Router(); // gives us an object to define routing logic
const { ClothesModel } = require('../models/index.js');
const validator = require('../middleware/validator.js');

// routes (restful) set-up
router.get('/clothes', getClothes);
router.get('/clothes/:id', validator, getClothesById);
router.post('/clothes', createClothes);
router.put('/clothes/:id', validator, updateClothes);
router.delete('/clothes/:id', validator, removeClothes);

// route ReSTful functions
async function getClothes(req, res, next) {  //get all clothes
  try {
    let resObj = await ClothesModel.findAll();
    res.status(200).json(resObj);
  } catch(error) {
    res.send(error);
    console.log(error);
    console.error(error.message);
  };
};

async function getClothesById(req, res, next) { // get a specific item
  try {
    const id = parseInt(req.params.id); 
    let resObj = await ClothesModel.findOne({ where: { id: id }});
    res.status(200).json(resObj);
  } catch(error) {
    console.error(error.message)
  };
};

async function createClothes(req, res, next) { // create clothes
  try {
    const clothesObj = req.body; // pass in data requires req.body(or Query) req.params
    let resObj = await ClothesModel.create(clothesObj);
    res.status(200).json(resObj);
  } catch(error) {
    res.send(error.message);
    console.error(error.message)
  };
};
  
async function updateClothes(req, res, next) { // update clothes
  try {
    const id = parseInt(req.params.id); 
    const clothesObj = req.body;
    let resObj = await ClothesModel.findOne({ where: { id: id }});
    let newResObj = await resObj.update(clothesObj)
    res.status(200).json(newResObj); 
  } catch(error) {
    console.error(error.message)
  };
};

async function removeClothes(req, res, next) { // remove clothes
  try {
    const id = parseInt(req.params.id); // clothes = await ClothesModel.findOne({where: {id}});
    let resObj = await ClothesModel.destroy({ where: { id: id }});
    res.status(200).json(resObj);
  } catch(error) {
    console.error(error.message)
  };
};

module.exports = router;
// In your routers, require() the correct data model and instantiate a new instance.
