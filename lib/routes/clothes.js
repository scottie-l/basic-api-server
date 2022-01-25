'use strict';

// import dependencies
const express = require('express');
// const { ClothesModel } = require('../clothes.js');

const router = express.Router(); // gives us an object to define routing logic
// const validator = require('../middleware/validator.js');
const ClothesSchema = require('../models/index.js'); // models/clothes.js
// const { ClothesModel } = require('../models/clothes.js');
// const clothes = new ClothesModel();
// const { ClothesSchema } = require('../models/clothes.js');
// const clothes = new ClothesSchema();


// routes (restful) set-up
router.get('/clothes', getClothes);
// router.get('/clothes/:id', getClothesById); //validator
// router.post('/clothes', createClothes);
// router.put('/clothes/:id', updateClothes); //validator
// router.delete('/clothes/:id', removeClothes); //validator

async function getClothes(req, res, next) {
    try {
    let resObj = await ClothesSchema.findAll();
    res.json(resObj);
    } catch(error) {
        console.error(error.message);
    };
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
  
  function getClothesById(req, res, next) {
    const id = parseInt(req.params.id);
    let resObj = clothes.read(id);
    res.json(resObj);
  }

// async function read(req, res, next) {
//   console.log('Reading from db.clothes');

//   let { id } = req.params;
//   let clothes;
//   if (id) {
//     clothes = await ClothesModel.findOne({where: {id}});
//   } else {
//     clothes = await ClothesModel.findAll();
//   }

//   let resObject = {
//     count: clothes ? clothes.length : 1,
//     results: clothes,
//   };
//   res.status(200).json(resObject);
// }

// function createClothes(req, res, next) {
//     const clothesObj = req.body; // pass in data requires req.body(or Query) req.params
//     let resObj = clothes.create(clothesObj);
//     res.json(resObj);
//   } 
  
//   function updateClothes(req, res, next) {
//     const id = parseInt(req.params.id); // clothes = await ClothesModel.findOne({where: {id}});
//     const clothesObj = req.body;
//     let resObj = clothes.update(id, clothesObj);
//     res.json(resObj);
//   } 
  
//   function removeClothes(req, res, next) {
//     const id = parseInt(req.params.id); // clothes = await ClothesModel.findOne({where: {id}});
//     let resObj = clothes.delete(id);
//     res.json(resObj);
//   } 

module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance. 

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
