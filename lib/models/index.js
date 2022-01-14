'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const messageSchema = require('./message.schema.js.js');

// create an connection instance singleton, using a connection string (like a URL)
// typical connection string: postgresql://localhost:5432/messages
let db = new Sequelize(POSTGRES_URI); // this takes a string, that can connect us to a running sequezlize db.

// configure our db instance with any schemas we want to define
const MessageModel = messageSchema(db, DataTypes);

module.exports = {
  db,
  MessageModel,
};
