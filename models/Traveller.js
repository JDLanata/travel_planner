const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveller extends Model {}

Traveller.init(
  {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha: true
        },
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail: true
        },
    },
  },
  {
    sequelize,

  }
);

module.exports = Traveller;