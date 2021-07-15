const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');
const moment = require('moment');

const Video = sequelize.define('Video', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        hash : {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique:true
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        duration:{
            type:DataTypes.STRING(10),
            defaultValue:"0"
        },
        videoPath:{
            type: DataTypes.STRING(255),
            allowNull: true
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
            defaultValue: 0 
        },
        visibility : {
            type: DataTypes.TINYINT(1),
            defaultValue:1 // 1 => PUBLIC, 0 => PRIVATE 
        },
        status : {
            type: DataTypes.ENUM('PUBLISHED', 'REJECTED', 'PENDING', 'DELETED', 'BLOCKED'),
            defaultValue:'PENDING' // PUBLISHED, REJECTED, PENDING 
        },
        poster:{
            type: DataTypes.STRING(255),
            allowNull: true
        },
        active:{
            type: DataTypes.TINYINT(1),
            defaultValue:1
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
        tableName: 'video'
    }
)

module.exports = Video;