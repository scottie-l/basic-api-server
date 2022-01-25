'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const clothesSchema = require('./clothes.js');
const foodSchema = require('./food.js');
const ClothesSchema = require('./clothes.js');
const FoodSchema = require('./food.js');

 
// create an connection instance singleton, using a connection string (like a URL)
// typical connection string: postgresql://localhost:5432/messages

let db = new Sequelize(POSTGRES_URI, {
// let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

// configure our db instance with any schemas we want to define
const ClothesModel = ClothesSchema(db, DataTypes);
const FoodModel = FoodSchema(db, DataTypes);

module.exports = {
  db,
  ClothesModel,
  FoodModel
};
