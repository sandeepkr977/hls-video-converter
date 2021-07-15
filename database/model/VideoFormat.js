const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');
const moment = require('moment');

const VideoFormat = sequelize.define('VideoFormat', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        videoId : {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        resolution : {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue:'DEFAULT'
        },
        videoPath:{
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meta : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status : {
            type: DataTypes.TINYINT(1),
            defaultValue:0 // -1= FAILED, 0 => PENDING,  1 => INPROGRESS, 2 => DONE
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
        tableName: 'video_format'
    }
)

module.exports = VideoFormat;