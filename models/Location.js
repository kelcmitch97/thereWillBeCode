const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

Location.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        modelName: 'location',
    }
);
module.exports = Location;