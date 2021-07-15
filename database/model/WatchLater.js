const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const WatchLater = sequelize.define('WatchLater', 
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
        videoId : {
            type: DataTypes.BIGINT(20),
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
        tableName: 'watch_later'
    }
)

module.exports = WatchLater;