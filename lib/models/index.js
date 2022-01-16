'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.BATABASE_URL || 'sqlite:memory';

const clothesSchema = require('./clothes.js');
const foodSchema = require('./food.js');

// create an connection instance singleton, using a connection string (like a URL)
// typical connection string: postgresql://localhost:5432/route

let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false, 
    }
  }
}); // this takes a string, that can connect us to a running sequezlize db.

// configure our db instance with any schemas we want to define
const ClothesModel = clothesSchema(db, DataTypes);
const FoodModel = foodSchema(db, DataTypes);

module.exports = {
  db,
  ClothesModel,
  FoodModel,
};
