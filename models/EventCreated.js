const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class EventCreated extends Model {}
//Initializing the model.
EventCreated.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: { //User id row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        event_name: { //Event name row with its attributes.
            type: DataTypes.STRING,
            allowNull: false
        },
        date_time: { //Date and time row with its attributes.
            type: DataTypes.DATE,
            allowNull: false,
            get(){var date = this.getDataValue('date_time').toString().split('G')
                    return date[0]}
        },
        sport_id: { //Sport id row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'sports',
                key: 'id'
            }
        },
        members_needed: { //Members needed for event row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_id: { //Location id row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        availability: { //Availability to join an event row with its attributes.
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: { //Description of the event row with its attributes.
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'eventCreated',
    }
);
//Exporting the model.
module.exports = EventCreated;