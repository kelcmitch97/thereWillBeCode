const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Sports extends Model {}

Sports.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sport:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sports',
    }
);
module.exports = Sports;