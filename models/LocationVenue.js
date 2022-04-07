const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class LocationVenue extends Model {}

LocationVenue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        venue_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'venue_type',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location_venue',
    }
);
module.exports = LocationVenue;