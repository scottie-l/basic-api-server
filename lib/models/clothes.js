'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
  },
});

module.exports = Clothes;
