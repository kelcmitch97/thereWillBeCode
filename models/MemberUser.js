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
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'membersUser',
    }
);
module.exports = MembersUser;