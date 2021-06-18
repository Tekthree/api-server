'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const NODE_ENV = process.env.NODE_ENV;

const { Sequelize, DataTypes} = require('sequelize');
const customersModel = require('./customers.js');
const receiptsModel = require('./receipts.js');


let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}: {});


const customers = customersModel(sequelize, DataTypes);
const receipts = receiptsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize, 
  customers: customers,
  receipts: receipts
}