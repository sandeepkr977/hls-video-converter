let nodemailer = require('nodemailer');
require('dotenv').config();

let mailerOption = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
};

module.exports = {
    transporter: nodemailer.createTransport(mailerOption),
    from: process.env.EMAIL_NOREPLAY
};