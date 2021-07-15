
let { Video, VideoFormat, sequelize, QueryTypes, Op } = require('../database/model');

let run = async() => {
    let defaultFormatVideoList = await VideoFormat.findAll({where:{resolution:'DEFAULT'}, attributes:['id','videoId','videoPath']});
    for(v of defaultFormatVideoList){
        let r = await Video.update({videoPath: v.videoPath},{ where: {id: v.videoId, videoPath: { [Op.ne]: null }}});
        if(r[0] != 0)
            console.log(`Video ${v.videoId} update done!`);
        else
            console.log(`Video ${v.videoId} already updated!`);
    }
}

run();
