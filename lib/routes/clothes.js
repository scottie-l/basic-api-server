'use strict';

const express = require('express');
const { ClothesModel } = require('../clothes.js');

const router = express.Router(); // gives us an object to define routing logic

router.get('/clothes', read);
router.get('/clothes/:id', read);
router.post('/clothes', create);
router.patch('/clothes/:id', update);
router.put('/clothes/:id', update);
router.delete('/clothes/:id', remove);

async function read(req, res, next) {
  console.log('Reading from db.clothes');

  let { id } = req.params;
  let clothes;
  if (id) {
    clothes = await ClothesModel.findOne({where: {id}});
  } else {
    clothes = await ClothesModel.findAll();
  }

  let resObject = {
    count: clothes ? clothes.length : 1,
    results: clothes,
  };
  res.status(200).json(resObject);
}

function create(req, res, next) {
  res.send('working on it');
} // pass in data requires req.body(or Query) req.params

function update(req, res, next) {
  res.send('working on it');
} // clothes = await ClothesModel.findOne({where: {id}});

function remove(req, res, next) {
  res.send('working on it');
} // clothes = await ClothesModel.findOne({where: {id}});

module.exports = router;

// In your routers, require() the correct data model and instantiate a new instance.