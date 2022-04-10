const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class VenueType extends Model {}
//Initializing the model.
VenueType.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        venue:{ //Venue type row with its attributes.
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'venue_type',
    }
);
//Exporting the model.
module.exports = VenueType;