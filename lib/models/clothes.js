'use strict';

// import dependencies
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

// all properties can be added here
const ClothesSchema = (sequelize, DataTypes) => sequelize.define('Clothes', {
  brand: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  size: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
});

// brand, size, color
module.exports = ClothesSchema;
