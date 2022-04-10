const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Location extends Model {}
//Initializing the model.
Location.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        city_name: { //City name row with its attributes.
            type: DataTypes.STRING,
            allowNull: false
        },
        location_name: { //Location name row with its attributes.
            type: DataTypes.STRING,
            allowNull: false
        },
        location_address: { //Location address row with its attributes.
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_type_id: { //Venue id row with its attributes.
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
        modelName: 'location',
    }
);
//Exporting the model.
module.exports = Location;