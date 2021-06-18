
'use strict';

const receiptsModel = (sequelize, DataTypes) => {
  return sequelize.define('receipts', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
}

module.exports = receiptsModel;