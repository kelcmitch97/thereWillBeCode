const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class LocationVenue extends Model {}
//Initializing the bridge model.
LocationVenue.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location_id:{ //Location id - from Location model - row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        venue_id:{ //Venue id - from VenueType model - row with its attributes.
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
//Exporting the model.
module.exports = LocationVenue;