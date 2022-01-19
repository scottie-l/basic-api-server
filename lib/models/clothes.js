'use strict';

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const ClothesSchema = (sequelize, DataTypes) => sequelize.define('Clothes', {
  text: {
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

module.exports = ClothesSchema;

// all properties can be added here

// const messageSchema = (sequelize, DataTypes) => sequelize.define('Message', {
//   text: {
//       type: DataTypes.STRING, 
//       allowNull: false, 
//   },
//   authorId: DataTypes.INTERGER,
//   allowNull: false,
// });

// module.exports = messageSchema;

// From Collection.js
// class Collection {
//     constructor (model) {
//         this.model = model;
//     }
//     async read(req,res, next) {     
//     let records = await this.model.findAll();
//     return records
//     res.status(200).send(records);
//     }
    
//    async create(req,res,) { 
//     const data = req.body;
//     const record = await this.model.create(data);
//     record = await this.model.findAll();
//     return record;
//     res.status(200).json(records);
//         }
    
//     async update(req,res,) {
//             let id = req.params.id;
//             let newRecord = req.body;

//             let recordToUpdate = await this.model.findByPk()
//         res.send('working on it');
//     }  
// }

// module.exports = router;


//  class ClothesModel {
//   constructor() {
//     this.id = 0;
//     this.db = [];
//   }
  
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

// module.exports = ClothesModel;

