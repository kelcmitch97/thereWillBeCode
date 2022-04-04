const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class EventCreated extends Model {}

EventCreated.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_time: {
            type: DataTypes.DATE,
            allowNull: true // Changed for seeding
        },
        sport_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sports',
                key: 'id'
            }
        },
        members_needed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // members: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'members_user',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'eventCreated',
    }
);
module.exports = EventCreated;