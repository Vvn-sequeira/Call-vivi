import React, { useRef, useState } from 'react'
const apiURL = process.env.REACT_APP_API_URL; 

var connections = {};

const peerConfigConnections = {
    "iceServers" : [
        {"urls" : "stun:stun.l.google.com:19302"}
    ]
}


export default function VideoMeet() {

     var sockettRef = useRef();
     let socketIdRef = useRef();

     let localVideoRef = useRef();

     let [videoAvailable , setvideoAvailable] = useState(true);
     let [audioAvailable , setaudioAvailable  ] = useState(true);

     let [video , setVideo ] = useState();
     let [audio , setAudio] = useState();

     let [screenAvailable , setscreenAvailable] = useState();
     let [screen , setScreen] = useState();

     let [showModal , setModal ] = useState();

     let [messages, setMessages] = useState();

     let [message, setMessage] = useState();

     let [newMessage, setNewMessage] = useState();

     let [askForUsername , setAskUsername] = useState();

     let[username , setUsername ] = useState();
     
     const videoRef = useRef([])

     let [videos , setVideos] = useState([])

  // TODO
    //  if(isChromoe() == true )
    //  {
         
    //  }


  return (
    <div>

           

    </div>
  )
}
