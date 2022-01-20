'use strict';

// import dependencies
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

// all properties can be added here
const FoodSchema = (sequelize, DataTypes) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  flavor: {
    type: DataTypes.STRING,
  },
  isHealthy: {
    type: DataTypes.BOOLEAN,
  },
});

// name, flavor, isHealthy
module.exports = FoodSchema;
