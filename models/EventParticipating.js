const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class EventParticipating extends Model {}

EventParticipating.init(
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
      sport: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'sports',
                key: 'id'
            }
        },
        members_needed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        members: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'membersUser',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'eventParticipating',
    }
);
module.exports = EventParticipating;