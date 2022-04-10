const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class MembersUser extends Model {}
//Initializing the bridge model.
MembersUser.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_id:{ //Event id - from EventCreated model - row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'eventCreated',
                key: 'id'
            }
        },
        user_id:{ //User id - from User model - row with its attributes.
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        status: { //Status of applying to join event row with its attributes.
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'members_user',
    }
);
//Exporting the model.
module.exports = MembersUser;