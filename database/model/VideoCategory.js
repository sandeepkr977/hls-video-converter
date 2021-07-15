const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const VideoCategory = sequelize.define('VideoCategory', 
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
        fontAwesomeClass:{
            type: DataTypes.STRING(100),
            defaultValue: 'fa fa-indent'
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
        tableName: 'video_category'
    }
)

module.exports = VideoCategory;