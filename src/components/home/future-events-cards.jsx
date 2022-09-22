import data from './past-events.json'
import './future-events-cards.css';
import React, {useState} from "react";
import Popup from './popup';
import Aos from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";




const FutureEventsCards= () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
<div>

        <div className='future-events-title-container'>
        <p className='future-events-title' dir="rtl" data-aos="zoom-in">אירועים קרובים:</p>
        </div>

    <div className="past-events-cards" >
    {  data.map((val) => {
    return(
      <div className="cards-div-future-event"  data-aos="flip-left">
      <div className="template-future-evnt" key={val.id}>
        <div className="img-div-future-evnt">
          <img className="image-future-events" src={val.image} alt="" />
        </div>
           <h3>{val.name}</h3>
           <p className="desctiption">{val.description}</p>
           <p className="phone">{val.date}</p>
           <Popup/>
           
      </div> 
      </div>
    )
    })       
  }   
</div>
</div>
    )
}
export default FutureEventsCards