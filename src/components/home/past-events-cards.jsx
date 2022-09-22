import './past-events-cards.css';
import React  from "react";
import Popup from './popup';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useSelector } from 'react-redux';


const PastEventsCards = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const events = useSelector((state) => state.event.event);

  return (
    <div>
      <div className="header">
        <p className='header-title' dir="rtl" data-aos="zoom-in">"בנגב ייבחן העם בישראל"</p>
        <h6 dir="rtl" className='david-title' data-aos="zoom-in">דוד בן גוריון</h6>
      </div>
      <div className="wellcome-title-container">
        <p className='wellcome-title' dir="rtl">ברוכים הבאים לאתר עובדים עריית דימונה!</p>
      </div>
      <div className='past-events-title-container'>
        <p className='past-events-title' dir="rtl">מאירועי השבוע האחרון שלנו:</p>
      </div>
      <div className="past-events-cards" data-aos="flip-up">

      {events.slice(0,4).map(({_id, image, name, description, date}) => {
          return (
            <div className="cards-div-past-event" key={_id}>
              <div className="template-past-evnt" >
                <div className="img-div-past-evnt">
                  <img className="image-past-events" src={image} alt="" />
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
export default PastEventsCards