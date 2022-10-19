import React, { useEffect } from 'react';
import './Chat.css';
import { useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";






function Chat() {
  const [name, setName] = useState([])
  const [temp, setTemp] = useState("")
  function handleSubmit() {
    let tempname = [...name];
    tempname.push(temp)
    setName(tempname);
  }


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

    <div>
    
        <h1 dir="rtl" className='chat-title' data-aos="zoom-in">הודעות:</h1>
        <div className='todo-app'>

        <ul className='chat-ul'>
        <li>
      {name.map((element,index) => (
      <div className='chat-div'> 
        <h1 className='chat-username'>בני ביטון</h1>
        <h3 key={index} className="h3-chat"> {name[index]} </h3>
        <img src="https://images.globes.co.il/images/NewGlobes/big_image_800/2017/ytry8.jpg" className='chat-img' alt="" />
      </div>
      ))}
      </li>

       <li><div className='chat-div'>
        <h1 className='chat-username'>יפה עזריה</h1>
          <h3 className="h3-chat" dir='rtl'>מזכירה לכולם שיש יום גיבוש מחר!</h3>
          <img src="https://i.pinimg.com/736x/16/00/ae/1600aec38572cb9997559e21c5946015.jpg" className='chat-img' alt="" />
        </div></li>

       <li><div className='chat-div'>
        <h1 className='chat-username'>שוקי קליין</h1>
              <h3 className="h3-chat">לא לששכוח למלא את הטפסים</h3>
          <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/7.jpg" className='chat-img' alt="" />
        </div>
        </li> 

        <li><div className='chat-div'>
        <h1 className='chat-username'>אורלי אוחיון</h1>
          <h3 className="h3-chat" dir='rtl'>ברוכה הבאה דנה המזכירה החדשה!</h3>
          <img src="https://i.pinimg.com/736x/6c/27/78/6c27784756bd213664bfd60005f58b8e.jpg" className='chat-img' alt="" />
        </div>
        </li>
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