const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

Location.init(
  {
    location_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha:true,
        },
    },
  },
  {
    sequelize,

  }
);

module.exports = Location;
