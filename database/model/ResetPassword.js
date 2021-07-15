const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const ResetPassword = sequelize.define('ResetPassword', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        userId : {
            type: DataTypes.BIGINT(20),
            allowNull: false
        },
        token : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        active:{
            type: DataTypes.TINYINT(1),
            defaultValue:1
        },
        createdAt : {
            type : DataTypes.DATE,
            defaultValue : NOW
        },
        updatedAt : {
            type : DataTypes.DATE,
            defaultValue : NOW,
            onUpdate: NOW
        }
    },
    {
        tableName: 'reset_password'
    }
)

module.exports = ResetPassword;