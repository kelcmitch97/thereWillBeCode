const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Sports extends Model {}
//Initializing the model.
Sports.init(
    {
        id: { //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sport:{ //Sport row with its attributes.
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
//Exporting the model.
module.exports = Sports;