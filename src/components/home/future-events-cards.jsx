import './future-events-cards.css';
import React from "react";
import Popup from './Popup';
import Aos from "aos";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "aos/dist/aos.css";






const FutureEventsCards = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  const events = useSelector((state) => state.event.event);



  return (
    <div>

      <div className='future-events-title-container'>
        <p className='future-events-title' dir="rtl">אירועים קרובים:</p>
      </div>

      <div className="past-events-cards" >
        {events.slice(4).map(({_id, image, name, description, date}) => {
          return (
            <div className="cards-div-future-event" key={_id} data-aos="flip-left">
              <div className="template-future-evnt" >
                <div className="img-div-future-evnt">
                  <img className="image-future-events" src={image} alt="" />
                </div>
                <h3>{name}</h3>
                <p className="desctiption">{description}</p>
                <p className="phone">{date}</p>
                <Popup />

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