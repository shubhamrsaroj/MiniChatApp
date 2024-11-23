import express from 'express';
import  {Server}  from 'socket.io';
import cors from 'cors';
import http from 'http';
import { connect } from './config.js';
import { chatModel } from './chat.schema.js';

//creating express object

const app=express();


//creating server


const server=http.createServer(app);


//creating io and cors for get and post method

//{

const io=new Server(server,{
    cors:{
        origin:'*',
        methods:['GET', 'POST']
    }
});


//}

io.on("connection",(socket)=>{

    console.log("connection is establised");

    socket.on("join",(data)=>{
        socket.username=data;
    })

    socket.on('new_message',(message)=>{

        let userMessage={
            username:socket.username,
            message:message

        }

        
    const newchat=new chatModel({
        username:socket.username,
        message:message,
        timestamp:new Date()
    });

    newchat.save();

        socket.broadcast.emit('broadcast_message',userMessage);
    })





    socket.on("disconnect",()=>{
        console.log("connection is closed");
    });
})


server.listen(3300,()=>{
    console.log("server is running on port 3000");
    connect();
});

