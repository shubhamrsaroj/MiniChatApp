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

const onlineUsers=new Map();  // it is used to store the data in key-value pairs

io.on("connection",(socket)=>{

    console.log("connection is establised");

   socket.on("join",(data)=>{
      socket.username=data;

      chatModel.find().sort({timestamp:1}).limit(50).
       then(messages=>{
         socket.emit("load_messages",messages);
       }).catch(err=>{
            console.log(err);
       }) 

       onlineUsers.set(socket.username,{  //it is setting the username 
        username:socket.username,
        isTyping:false
       });

       io.emit('online_users', Array.from(onlineUsers.values())); //it shows the values from the array 

    })

    socket.on('typing', () => {
        const user = onlineUsers.get(socket.username);
        if (user) {
            user.isTyping = true;
            onlineUsers.set(socket.username, user);
            socket.broadcast.emit('user_typing', socket.username);
        }
    });

    socket.on('stop_typing', () => {
        const user = onlineUsers.get(socket.username);
        if (user) {
            user.isTyping = false;
            onlineUsers.set(socket.username, user);
            socket.broadcast.emit('user_stop_typing', socket.username);
        }
    });



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
        onlineUsers.delete(socket.username);
    io.emit('online_users', Array.from(onlineUsers.values()));
    });


    
})

server.listen(3400,()=>{
    console.log("server is running on port 3000");
    connect();
});

