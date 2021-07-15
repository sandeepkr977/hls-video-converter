
var amqp = require('amqplib/callback_api');
var { converter720pHlsChannel } = require('./process/converter.hls');
require('dotenv').config();

let queue = process.env.RABBITMQ_VIDEO_CONVERTER_QUEUE;
let host = process.env.RABBITMQ_HOST;

amqp.connect(host, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    try{
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue, {
            durable: true
        });

        channel.prefetch(1);

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(data) {
            converter720pHlsChannel(JSON.parse(data.content.toString())).then(r => {
                console.log(r);
                channel.ack(data);
            }).catch(r => {
                console.log(r)
            });
            console.log(" [x] Received %s", data.content.toString());
        }, {
            noAck: false
        });
    });
    } catch(exception){
        if(connection != null)
            connection.close();
    }
});