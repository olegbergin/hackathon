import React, { useEffect} from 'react';
import './Chat.css';
import { useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";






function Chat() {
  const[name,setName]=useState([])
  const[temp,setTemp]=useState("")
 function handleSubmit()
 {
    let tempname=[...name];
    tempname.push(temp)
    setName(tempname);
 }


 useEffect(()=>{
  Aos.init({duration:1000});
},[]);

  return (
    <div>
    
        <h1 dir="rtl" className='chat-title' data-aos="zoom-in">הודעות:</h1>
        <div className='todo-app'>
        <ul className='chat-ul'>
      {name.map((element,index) => (
      <div className='chat-div1'> 
        <h1 className='chat-username1'></h1>
        <h3 key={index} className="h3-chat1"> {name[index]} </h3>
        <img src="" className='chat-img1' alt="" />
      </div>

      ))}
        <div className='chat-div'>
        <h1 className='chat-username'>dan</h1>
          <h3 className="h3-chat">hello world</h3>
          <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" className='chat-img' alt="" />
        </div>

        <div className='chat-div'>
        <h1 className='chat-username'>jon</h1>
          <h3 className="h3-chat">hello world</h3>
          <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" className='chat-img' alt="" />
        </div>

        <div className='chat-div'>
        <h1 className='chat-username'>ben</h1>
          <h3 className="h3-chat">hello world</h3>
          <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" className='chat-img' alt="" />
        </div>
     </ul>
     </div>
     <div className='input-container'>
      <input className='chat-input' type='text' onChange={(e)=>setTemp(e.target.value)} />
     <button onClick={handleSubmit} className="chat-btn">submit</button>
     </div>

    </div>
  );
}

export default Chat;