const ffmpeg = require('fluent-ffmpeg')
let path = require("path");

let { VideoFormat } = require('../database/model')

ffmpeg.setFfmpegPath(process.env.FFMPEG_PATH);
ffmpeg.setFfprobePath(process.env.FPROBE_PATH);
ffmpeg.setFlvtoolPath(process.env.FLVTOOL_PATH);

const uploadDirectory = require('../config/uploadDirectory.config');

console.log(uploadDirectory)

let convert720pHls = async (data) => {
    try {

    let folder = await uploadDirectory.hls(data.hash); // { actual, relative }

    console.log(folder);
    ffmpeg(data.path) //Calling ffmpeg
            .size('1280x720') //Resolution
            .videoBitrate(1024) //Bitrate
            .videoCodec('libx264') //Codec
            .audioBitrate('128k') //Audio bitrate
            .audioChannels(2) //Channels
            .addOption('-hls_time', 10) //Length of a segment
            .addOption('-hls_list_size', 0) //Putting every segment into one playlist
            .output(path.join(folder.actual, 'master.m3u8')) //Saving all files
            .on('error', (err) => { //Error listener
                console.log('Error: ' + err.message); //Displaying an error
            })
            .on('end', async () => { //Success
                console.log('conversion finished is finished');
                await VideoFormat.update({status: 2, videoPath:path.join(folder.actual,'master.m3u8')},{where: {id:data.formatId}}); // DONE
                return "SUCCESS";
            })
            .run();
        }catch(er){
            console.log(er);
        }
}


module.exports = {
    converter720pHlsChannel: convert720pHls
}