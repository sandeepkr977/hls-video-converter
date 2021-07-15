const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const UserOtp = sequelize.define('UserOtp', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        otp : {
            type: DataTypes.INTEGER(8),
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM(['SIGNUP', 'UPDATE_PASSWORD']),
            allowNull: false
        },
        expiryTime : {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue:15
        },
        expiryUnit : {
            type: DataTypes.ENUM('MIN','SEC','HOUR'),
            allowNull: false,
            defaultValue:'MIN'
        },
        errorCount:{
            type: DataTypes.TINYINT(1),
            defaultValue:0
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
        tableName: 'user_otp'
    }
)

module.exports = UserOtp;