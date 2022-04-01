const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class VenueType extends Model {}

VenueType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        venue:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'venuetype',
    }
  );
  module.exports = VenueType;