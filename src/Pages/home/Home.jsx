// import {Link} from "react-router-dom"
import './home.css';
// import React, {useState} from "react";
import PastEventsCards from "../../components/home/past-events-cards";
import FutureEventsCards from "../../components/home/future-events-cards";
import SocialMediaCards from "../../components/home/social-media-cards";
import Fotter from '../../components/fotter';
import Chat from '../../components/messag/Chat';


const Home = () => {
    return(
       <div>
<PastEventsCards/>

<FutureEventsCards/>

<Chat/>

<SocialMediaCards/>

<Fotter/>


 
    </div>

    )
}
export default Home



