'use strict';

const express = require('express');
const router = express.Router(); // gives us an object to define routing logic
const validator = require('../middleware/validator.js');
const ClothesSchema = require('../models/clothes.js');

// const { ClothesSchema } = require('../models/clothes.js');
// const clothes = new ClothesSchema();


router.get('/clothes', getClothes);
router.get('/clothes/:id', validator, getClothesById);
router.post('/clothes', createClothes);
router.put('/clothes/:id', validator, updateClothes);
router.delete('/clothes/:id', validator, removeClothes);

function getClothes(req, res, next) {
  let resObj = clothes.read();
  res.json(resObj);
}

function getClothesById(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = clothes.read(id);
  res.json(resObj);
}

function createClothes(req, res, next) {
  const clothesObj = req.body; // pass in data requires req.body(or Query) req.params
  let resObj = clothes.create(clothesObj);
  res.json(resObj);
} 

function updateClothes(req, res, next) {
  const id = parseInt(req.params.id); // clothes = await ClothesModel.findOne({where: {id}});
  const clothesObj = req.body;
  let resObj = clothes.update(id, clothesObj);
  res.json(resObj);
} 

function removeClothes(req, res, next) {
  const id = parseInt(req.params.id); // clothes = await ClothesModel.findOne({where: {id}});
  let resObj = clothes.delete(id);
  res.json(resObj);
} 

module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance.