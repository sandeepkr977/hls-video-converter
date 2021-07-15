const { fn, QueryTypes, Op } = require('sequelize');
const User = require('./User');
const Role = require('./Role');
const UserRoleMapping = require('./UserRoleMapping');
const UserOtp = require('./UserOtp');

const Video = require('./Video');
const Channel = require('./Channel');
const Subscription = require('./Subscription');
const ResetPassword = require('./ResetPassword');
const VideoCategory = require('./VideoCategory');
const Like = require('./Like');
const WatchLater = require('./WatchLater');

const sequelize = require('../connection');
const View = require('./View');
const VideoFormat = require('./VideoFormat');
const VideoAudit = require('./VideoAudit');
const KeyStore = require('./KeyStore');
const MailAudit = require('./MailAudit');


const logger = require('../../config/logger').getLogger('Model index')

module.exports = {
    User,
    Role,
    UserRoleMapping,
    UserOtp,
    Video,
    Channel,
    Subscription,
    ResetPassword,
    VideoCategory,
    Like,
    WatchLater,
    VideoAudit,
    View,
    VideoFormat,
    KeyStore,
    QueryTypes,
    sequelize,
    fn,
    Op,
    MailAudit,
    database : {
        authenticate : () => {
            sequelize.authenticate();
            logger.info('Database connected')
        },
        sync : async () => {
            try{
                
                await User.sync();
                await Role.sync();
                await UserRoleMapping.sync();
                await UserOtp.sync();
                await Channel.sync();
                await Video.sync();
                await Subscription.sync();
                await ResetPassword.sync();
                await VideoCategory.sync();
                await Like.sync();
                await WatchLater.sync();
                await View.sync();
                await VideoFormat.sync();
                await VideoAudit.sync();
                await KeyStore.sync();
                await MailAudit.sync();

                
                User.hasMany(UserRoleMapping , {foreignKey:'userId'});
                
                UserRoleMapping.hasOne(Role, {foreignKey:'id', sourceKey:'roleId'});
                
                User.hasMany(Subscription,{foreignKey:'UserId'});
                Video.hasOne(User, {foreignKey:'id', sourceKey:'userId'})
                
                Video.hasOne(VideoCategory,{foreignKey:'id', sourceKey:'categoryId'} )

                Channel.hasMany(Video,{foreignKey:'channelId'});
                Video.hasOne(Channel, {foreignKey:'id', sourceKey:'channelId'});


                Channel.hasMany(Subscription, {foreignKey:'channelId'})
                Subscription.hasOne(Channel, {foreignKey:'id', sourceKey:'channelId'});

                Channel.hasOne(User, {foreignKey:'id', sourceKey:'userId'});
                User.hasMany(Channel,{foreignKey:'userId'});

                Video.hasMany(Like, {foreignKey:'videoId'});
                Like.hasOne(User, {foreignKey:'id', sourceKey:'userId'});

                WatchLater.hasOne(Video, {foreignKey:'id', sourceKey:'videoId'});
                User.hasMany(WatchLater, {foreignKey:'userId'})

                Video.hasMany(View, {foreignKey:'videoId'});
                View.hasOne(Video, {foreignKey:'id', sourceKey:'videoId'});
                View.hasOne(User, {foreignKey:'id', sourceKey:'userId'});

                Video.hasMany(VideoFormat, {foreignKey:'videoId'});
                VideoFormat.hasOne(Video, {foreignKey:'id', sourceKey:'videoId'});

               logger.info('Database synchronization success!');
            } catch(err) {
                logger.error(err)
            }
        }
    }
}