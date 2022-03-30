const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Event extends Model {}

Event.init(
    {
      
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      event_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
    },
    
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'event',
    }
  
  );
  
  module.exports = Event;