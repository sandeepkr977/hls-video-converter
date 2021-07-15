const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const MailAudit = sequelize.define('MailAudit', 
    {
        id: {
            type:DataTypes.BIGINT(20),
            autoIncrement:true,
            primaryKey:true
        },
        to : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        subject : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        messageId : {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        status:{
            type: DataTypes.ENUM(['INITIATED','SUCCESS','FAILED']),
            allowNull: false,
            defaultValue: 'INITIATED'
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
        tableName: 'mail_audit'
    }
)

module.exports = MailAudit;