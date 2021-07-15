// const { transports, createLogger, format } = require('winston');
// require('winston-daily-rotate-file');

// module.exports = {
//     getLogger : (label) => {
//         return createLogger({
//             transports : [
//                 new transports.Console({
//                     level:'error',
//                     format : format.printf(info => {
//                         return `[ERROR]:[${new Date()}:[REQUEST_ID]] : ${label} => ${info.message}`
//                     })
//                 }),
//                 new transports.Console({
//                     level:'info',
//                     format : format.printf(info => {
//                         return `[INFO]:[${new Date()}:[REQUEST_ID]] : ${label} => ${info.message}`
//                     })
//                 }),
//                 new transports.DailyRotateFile({ 
//                     filename: 'log/server%DATE%.info.log', 
//                     datePattern:'YYYY-MM-DD',
//                     handleExceptions: true,
//                     maxSize:'5m',
//                     maxFiles:'14d',
//                     level:'info',
//                     format : format.printf(info => {
//                         return `[INFO]:[${new Date()}:[REQUEST_ID]] : ${label} => ${info.message}`
//                     })
//                 }),
//                 new transports.DailyRotateFile({ 
//                     filename: 'log/server%DATE%.error.log', 
//                     datePattern:'YYYY-MM-DD',
//                     handleExceptions: true,
//                     maxSize:'5m',
//                     maxFiles:'14d',
//                     level:'error',
//                     format : format.printf(info => {
//                         return `[ERROR]:[${new Date()}:[REQUEST_ID]] : ${label} => ${info.message}`
//                     })
//                 })
//             ]
//         })
//     }
// }


module.exports = {
    getLogger : (label) => {
        return {
            error : (msg) => {
                console.log(`[ERROR] [${new Date()}] ${label} => ${msg}`)
            },
            info : (msg) => {
                console.log(`[INFO] [${new Date()}] ${label} => ${msg}`)
            }
        }
    }
}