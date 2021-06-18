
'use strict';

const customerModel = (sequelize, DataTypes) => {
  return sequelize.define('Customers', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    
  });
}

module.exports = customerModel;