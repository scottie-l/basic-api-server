'use strict';

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const FoodSchema = (sequelize, DataTypes) => sequelize.define('Food', {
  text: {
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

module.exports = FoodSchema;

// class FoodModel {
//    constructor() {
//      this.id = 0;
//      this.db = [];
//    }

//   read(id) {
//     if(id) {
//       return this.db.find(record => record.id === id );
//     } else {
//       return this.db;
//     }
//   }

//   create(obj) {
//     let record = {
//       id: this.id += 1, 
//       data: obj,
//     };

//     this.db.push(record);
//     return record;
//   }

//   update(id, obj) {
//     for (let i = 0; i < this.db.length; i++) {
//       if (this.db[i].id === id) {
//         this.db[i].data = obj;
//         return this.db[i];
//       }
//     }
//   }

//   delete(id) {
//     for (let i = 0; i < this.db.length; i++) {
//       if (this.db[i].id === id) {
//         this.db[i].data = null;
//         return this.db[i];
//       }
//     }
//   }
// }

// module.exports = FoodModel;

