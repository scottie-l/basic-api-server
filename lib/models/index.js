'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const ClothesSchema = require('./clothes.js');
const FoodSchema = require('./food.js');

// create an connection instance singleton, using a connection string (like a URL)
// typical connection string: postgresql://localhost:5432/route

let db = new Sequelize(POSTGRES_URI, {
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false, 
    }
  }
}); // this takes a string, that can connect us to a running sequezlize db.

// configure our db instance with any schemas we want to define
const ClothesModel = ClothesSchema(db, DataTypes);
const FoodModel = FoodSchema(db, DataTypes);

module.exports = {
  db,
  ClothesModel,
  FoodModel,
};
