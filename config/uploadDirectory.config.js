let md5 = require('md5');
let path = require('path');
let fs = require('fs');
require('dotenv').config()


let folders = {
    channels : {
        actual : path.join(process.env.UPLOAD_BASE_DIR,'channels'),
        relative : '/media/channels'
    },
    video720p : (hash) => {
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'720p'),
            relative : `/media/videos/${hash}/720p`
        }
    },
    hls : (hash) => {
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'hls'),
            relative : `/media/videos/${hash}/hls`
        }
    },
    video480p : (hash) => { 
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'480p'),
            relative : `/media/videos/${hash}/480p`
        }
    },
    video360p : (hash) => { 
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'360p'),
            relative : '/media/videos/360p'
        }
    },
    videoDefault : (hash) => { 
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'default'),
            relative : `/media/videos/${hash}/default`
        }
    },
    screenshots : (hash) => { 
        return {
            actual : path.join(process.env.UPLOAD_BASE_DIR,'videos',hash,'screenshots'),
            relative : `/media/videos/${hash}/screenshots`
        }
    },
    profile: { 
        actual : path.join(process.env.UPLOAD_BASE_DIR,'profile'),
        relative : '/media/profile'
    }
}

let createPathIfNotExist = async(path) => {
    let exist = fs.existsSync(path);
        if(!exist)
            fs.mkdirSync(path, {recursive:true})
}

module.exports = {
    video720p : async (hash) => {
        let {actual, relative} = folders.video720p(hash);
        await createPathIfNotExist(actual);
        return { actual, relative };
    },
    hls : async (hash) => {
        let {actual, relative} = folders.hls(hash);
        await createPathIfNotExist(actual);
        return { actual, relative };
    },
    videoDefault : async (hash) => {
        let {actual, relative} = folders.videoDefault(hash);
        await createPathIfNotExist(actual);
        return { actual, relative };
    },
    videoPoster : async (hash) => {
        let {actual, relative} = folders.screenshots(hash);
        await createPathIfNotExist(actual);
        return { actual, relative };
    },
    channel : async (email) => {
        let hash = md5(email);
        let actual = path.join(folders.channels.actual, hash);
        let relative = folders.channels.relative +'/'+ hash;
        await createPathIfNotExist(actual);
        return { actual, relative };
    },
    profile : async (email) => {
        let hash = md5(email);
        let actual = path.join(folders.profile.actual, hash);
        let relative = folders.profile.relative +'/'+ hash;
        await createPathIfNotExist(actual);
        return { actual, relative };
    }
}