'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

// const messageSchema = require('./')
const clothesSchema = require('./clothes.js');
const foodSchema = require('./food.js');

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
const ClothesModel = clothesSchema(db, DataTypes);
const FoodModel = foodSchema(db, DataTypes);

module.exports = {
  db,
  ClothesModel,
  FoodModel,
};

// Code below from Class-04 repo done during class.
// const { Sequelize, DataTypes } = require('sequelize');
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

// const Collection= require('./Collection.js');
// const messageSchema = require('./mesage.schema.js');
// const authorSchema = require('./author.schema.js');

// const db = new Sequelize(DATABASE_URL);

// const MessageModel = messageSchema(db, DataTypes);
// const AuthorModel = authorSchema(db, DataTypes);

// // creates an association between the 2 tables to link them
// AuthorModel.hasMany(MessageModel, { foreignKey: 'authorID', sourceKey: 'id'});
// MessageModel.belongsTo(AuthorModel, { foreignKey: 'authorId', targetKey: 'id' });

// module.exports = {
//     db, 
//     MessageCollection: new Collection,

// };