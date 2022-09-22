import data from './past-events.json'
import './past-events-cards.css';
import React, {useState} from "react";
import Popup from './popup';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";


const PastEventsCards= () => {
  useEffect(()=>{
    Aos.init({duration:1000});
},[]);
    return(
        <div>
            <div className="header">
           <p className='header-title' dir="rtl" data-aos="zoom-in">"בנגב ייבחן העם בישראל"</p>
            <h6 dir="rtl" className='david-title' data-aos="zoom-in">דוד בן גוריון</h6>
            </div>
            <div className="wellcome-title-container">
            <p className='wellcome-title' dir="rtl" data-aos="zoom-in">ברוכים הבאים לאתר עובדים עריית דימונה!</p>
            </div>
            <div className='past-events-title-container'>
            <p className='past-events-title' dir="rtl" data-aos="zoom-in">מאירועי השבוע האחרון שלנו:</p>
            </div>
            <div className="past-events-cards" data-aos="flip-up">
                
            {  data.map((val) => {
                      return(
                        <div className="cards-div-past-event" >
                        <div className="template-past-evnt" key={val.id}>
                          <div className="img-div-past-evnt">
                            <img className="image-past-events" src={val.image} alt="" />
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
export default PastEventsCards