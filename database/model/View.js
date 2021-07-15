const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const View = sequelize.define('View', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        userId : {
            type: DataTypes.BIGINT(20),
            allowNull: true
        },
        videoId : {
            type: DataTypes.BIGINT(20),
            allowNull: false
        },
        ipAddress : {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        meta : {
            type: DataTypes.STRING(255),
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
        tableName: 'views'
    }
)

module.exports = View;