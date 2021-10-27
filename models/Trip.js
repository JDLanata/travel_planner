const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
  {
    trip_budget:{
        type: DataTypes.INTEGER,
        validate:{
            isNumeric:true,
        },
    },
    traveller_amount:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true,
        },
    },
  },
  {
    sequelize,
  }
);

module.exports = Trip;