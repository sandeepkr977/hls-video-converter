const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../connection');

const UserRoleMapping = sequelize.define('UserRoleMapping', 
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
        roleId : { 
            type: DataTypes.INTEGER(5),
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
        tableName: 'user_role_mapping'
    }
)

module.exports = UserRoleMapping;