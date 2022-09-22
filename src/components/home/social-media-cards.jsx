import data from './past-events.json'
import './social-media-cards.css';
import React, {useState} from "react";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";




const SocialMediaCards= () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
<div>

        <div className='social-media-title-container'>
        <p className='future-events-title' dir="rtl" data-aos="zoom-in">הצטרפו לקבוצות שלנו ברשתות חברתיות:</p>
        </div>

    <div className="social-media-cards" data-aos="fade-up">
    {  data.map((val) => {
    return(
      <div className="cards-div-social-media">
      <div className="template-social-media" key={val.id}>
        <div className="img-div-social-media">
          <img className="image-social-media" src={val.image} alt="" />
        </div>
           <h3>{val.name}</h3>
           <p className="desctiption">{val.description}</p>
           <p className="link">{val.link}</p>
           
          
           
      </div> 
      </div>
    )
    })       
  }   
</div>
</div>
    )
}
export default SocialMediaCards