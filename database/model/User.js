const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');
const moment = require('moment');

const User = sequelize.define('User', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        firstName : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName : DataTypes.STRING(50),
        gender : {
            type: DataTypes.ENUM('M','F','O'),
            allowNull: false
        },
        dob : DataTypes.STRING(30),
        mobile : DataTypes.BIGINT(13),
        email : {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique:true
        },
        password : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        bio: DataTypes.TEXT,
        avatar: DataTypes.STRING(100),
        mobile:DataTypes.BIGINT(13),
        std:DataTypes.STRING(8),
        address:DataTypes.STRING(255),
        title:DataTypes.STRING(25),
        status : {
            type: DataTypes.ENUM('BLOCKED', 'INACTIVE', 'ACTIVE','PENDING'),
            defaultValue:'PENDING'
        },
        active:{
            type: DataTypes.TINYINT(1),
            defaultValue:0
        },
        createdAt : {
            type : DataTypes.DATE,
            defaultValue : NOW,
            get: function() {
                return moment(this.getDataValue('createdAt'), "YYYYMMDD").fromNow();
            }
        },
        updatedAt : {
            type : DataTypes.DATE,
            defaultValue : NOW,
            onUpdate: NOW
        }
    },
    {
        tableName: 'user'
    }
)


module.exports = User;