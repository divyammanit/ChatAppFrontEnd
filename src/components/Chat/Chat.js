import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = () => {
  let [name,setName] = useState('');
  let [room,setRoom] = useState('');
  let [users,setUsers] = useState('');
  let [message,setMessage] = useState('');
  let [messages,setMessages] = useState([]);

  ({name,room} = useParams());
  const ENDPOINT = 'localhost:5000';

  useEffect(()=>{
    socket=io(ENDPOINT);

    setName(name);
    setRoom(room);
    socket.emit('join',{name,room},(error)=>{
      if(error) {
        alert(error);
      }
    });
    
    return ()=>{
      socket.emit('disconnect');
      socket.off();
    }
  },[ENDPOINT,name,room]);

  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessages(messages => [...messages,message]);
    })
    socket.on('roomData',({users})=>{
      setUsers(users);
    })
  },[]);

  const sendMessage = (event)=>{
    // event.preventDefault();
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage',message,()=> setMessage(''));
    }
  }
  console.log(message,messages);

  return (
    
    <div className='outerContainer'>
      <div className='container'>
          <InfoBar room={room}/>
          <Messages messages={messages} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>

  )
};

export default Chat;