const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const KeyStore = sequelize.define('KeyStore', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        key : {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        value : {
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
        tableName: 'key_store'
    }
)

module.exports = KeyStore;