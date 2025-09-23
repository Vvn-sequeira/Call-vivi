import { json } from "express";
import { connect } from "mongoose";
import { Server, Socket } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};

export const connectTosocket = (server) => {
  const io = new Server(server , {  // only for development 
     cors: {
           origin : "*" ,
           methods : ["GET" , "POST"] ,
           allowedHeaders: ["*"],
           credentials : true
     }
  });

  // a Socket.IO server setup that listens for client connections and handles real-time events
  io.on("connection", (socket) => {

    socket.on("join-call", (path) => {
      /* 
           connections =
          {
              "roomA": ["socket1", "socket2"],
              "roomB": ["socket3"],
              "roomC": ["socket4", "socket5", "socket6"]
          };

      */
      if (connections[path] == undefined) { // if the path is undefined 
        connections[path] = [];
      }
      connections[path].push(socket.id);  // push newly requesting client id to the path array 

      timeOnline[socket.id] = new Date();  // record his time of online 

      connections[path].forEach((ele) => {  // emit the "user-joined" for everyone in the grp and also to the new user
        io.to(ele).emit("user-joined", socket.id, connections[path]);  
      });

       /*
            [
              { data: "Hi!", sender: "Bob", "socket-id-sender": "socket1" },
              { data: "Welcome!", sender: "Alice", "socket-id-sender": "socket2" }
            ] 
       */
      if (messages[path] !== undefined) {       // display the messages to the newly joined user 
          messages[path].forEach((ele) => {
          io.to(socket.id).emit(  // only to the newly user "socket.id"
            "chat-message",
            ele["data"],
            ele["sender"],
            ele["socket-id-sender"]
          );
        });
      }
    });

    socket.on("signal", (toId, message) => {
      io.to(toId).emit("signal", socket.id, message);
    });

    socket.on("chat-message", (data, sender) => {
       
         const [matchingRoom , found] = Object.entries(connections) // “Loop through all rooms in connections, and find the first one that contains this socket.id. Return its name.”
         .reduce(([room , isFound] , [roomKey , roomValue] )=> {
            
                if(!isFound && roomValue.includes(socket.id)) { // if socket.id is present in one of the room then 
                     return [roomKey , true ] ; // it will retrun the room Key with found True 
                } 

                return [room , isFound];

         }, ['', false]  );  // ['', false]  => initials values 
      

          if(found === true){
                if(messages[matchingRoom] === undefined){  // if there is no msg 
                     messages[matchingRoom] = []  // empty array 
                }

                messages[matchingRoom].push({'sender' : sender  , 'data' : data , 'socket-id-sender' : socket.id }) // push the msg to the specific matchingRoom 
                console.log("message" , key , " : " , sender , data )

                connections[matchingRoom].forEach( (ele)=> {
                    io.to(ele).emit("chat-message" , data , sender , socket.id ); // for everyone is the room 
                     
                })
          }
    });

    socket.on("disconnect", () => {

      var diffTime = Math.abs(timeOnline[socket.id] - new Date())  // joining time - exit time 

      var key 

      for( const [k , v]  of JSON.parse(JSON.stringify(Object.entries(connections)))){  // on every entries on connections ( rooms ) we are accessing K => Room and V =>  values(users)  | First loop on K 
          
          for( let a = 0 ; a < v.length  ; ++a){  // 2nd Loop on V 
                if(v[a] === socket.id){
                     key = k  // k =?> Room

                     for( let a = 0 ; a <connections[key].length ; ++a ) // for every member on group Key 
                     {
                          io.to(connections[key][a]).emit("user-left" , socket.id ) // user left msg to everyone on that grp 
                     }

                     var index = connections[key].indexOf(socket.id);  // find out his idx value
                     connections[key].splice(index , 1 ) // remove the user  

                     if(connections[key].length == 0){  // if there is no connections in the group
                          delete connections[key]  // then Delte it 
                     }

                }
          }

      }

    });
  });
  return io;
};
