'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Flavor: {
    type: DataTypes.STRING,
  },
  IsHealthy: {
      type: DataTypes.BOOLEAN,
  },
});

module.exports = Food;
