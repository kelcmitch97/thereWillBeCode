const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}
//Initializing the model.
User.init(
    {
        id:{ //Id row with its attributes.
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{ //Username row with its attributes.
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email:{ //Email of the user row with its attributes.
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:{ //Password of the user row with its attributes.
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        sports:{ //Sport row with its attributes.
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{ //Description of the user row with its attributes.
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Description goes here'
        }
    },
    {
    hooks: { //Encryption of the password.
        async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },

        async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
        }
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    }
);
//Exporting the model.
module.exports = User;