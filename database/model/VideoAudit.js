const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');
const moment = require('moment');

const VideoAudit = sequelize.define('VideoAudit', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        hash: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        channelId:{
            type: DataTypes.BIGINT(20),
            allowNull: true
        },
        userId:{
            type:DataTypes.BIGINT(20),
            allowNull:false
        },
        categoryId : {
            type: DataTypes.TINYINT(2),
            defaultValue: 0 // 1 => PUBLIC, 0 => PRIVATE 
        },
        poster:{
            type: DataTypes.STRING(255),
            allowNull: true
        },
        visibility : {
            type: DataTypes.TINYINT(1),
            defaultValue:1 // 1 => PUBLIC, 0 => PRIVATE 
        },
        status:{
            type: DataTypes.TINYINT(1),
            defaultValue:0
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
        tableName: 'video_audit'
    }
)

module.exports = VideoAudit;