
var amqp = require('amqplib/callback_api');
require('dotenv').config();

let channel;
let connection;

const connectToChannel = async () => {
      return new Promise((resolve, reject) => {
            amqp.connect(process.env.RABBITMQ_HOST, (err, conn) => {
                if(err) throw err;
                connection = conn;

                connection.createChannel(function(error1, channel) {
                if (error1) throw error1;
                resolve(channel)
        });
        });
    });
  }
  

  module.exports = {
    publishToVideoConverterQueue : async (data, queueName = process.env.RABBITMQ_VIDEO_CONVERTER_QUEUE) => {
        if (channel == null) {
            channel = await connectToChannel();
            channel.assertQueue(queueName, {
                durable: true
            });
        }
       

        return channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), { persistent: true });
    },
    closeResource : () => {
        // if(channel != null){
        //     channel.close();
        //     console.log('amqp channel is closed successfully')
        // } else {
        //     console.log('amqp channel is undefined')
        // }
        if(connection != null){
            connection.close();
            console.log('amqp connection is closed successfully')
        } else 
        console.log('amqp connection is undefined')
    }
}