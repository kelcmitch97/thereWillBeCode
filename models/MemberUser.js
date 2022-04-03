const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class MembersUser extends Model {}

MembersUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'eventCreated',
                key: 'id'
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
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
module.exports = MembersUser;