import './social-media-cards.css';
import React from "react";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useSelector } from 'react-redux';





const SocialMediaCards = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const socials = useSelector((state) => state.social.social);

  return (
    <div>

      <div className='social-media-title-container'>
        <p className='future-events-title' dir="rtl" data-aos="zoom-in">הצטרפו לקבוצות שלנו ברשתות חברתיות:</p>
      </div>

      <div className="social-media-cards" data-aos="fade-up">
        {socials.map(({_id, image, name, description, link}) => {
          return (
            <div className="cards-div-social-media" key={_id}>
              <div className="template-social-media" >
                <div className="img-div-social-media">
                  <img className="image-social-media" src={image} alt="" />
                </div>
                <h3>{name}</h3>
                <p className="desctiption">{description}</p>
                <p className="link">{link}</p>



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