const amqplib=require("amqplib/callback_api")

amqplib.connect('amqp://localhost',(err,connection)=>{
    if(err){
        throw err
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err
        }
        let Name="Faraz";
        let message="Hi its me my name is faraz";
        channel.assertQueue(Name,{
            durable:false
        })
        channel.sendToQueue(Name,Buffer.from(message))
        console.log(`Message: ${message}`)
        setTimeout(() => {
            connection.close()
        }, 1000);
    })
})
