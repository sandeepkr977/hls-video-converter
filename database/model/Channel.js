const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');
const moment = require('moment');

const Channel = sequelize.define('Channel', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        channelArt:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        visibility : {
            type: DataTypes.TINYINT(1),
            defaultValue:1 // 1 => PUBLIC, 0 => PRIVATE 
        },
        active:{
            type: DataTypes.TINYINT(1),
            defaultValue:1
        },
        status : {
            type: DataTypes.ENUM('PUBLISHED', 'DELETED', 'BLOCKED'),
            defaultValue:'PUBLISHED' // PUBLISHED, REJECTED, PENDING 
        },
        userId:{
            type:DataTypes.BIGINT(20),
            allowNull:false
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
        tableName: 'channel'
    }
)

module.exports = Channel;