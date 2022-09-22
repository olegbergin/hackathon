import './profile.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import {  } from "react-icons/fa";

const Profile = () => {
    return(
        <div className='profile-container'>
           <div className='back-img'>
            <img src="https://images1.calcalist.co.il/PicServer2/20122005/453257/5_LM.jpg" className='user-img' alt="" />
           </div>
           <h1>בני ביטון</h1>
           <h3>ראש עיריית דימונה</h3>

           <div className='social-media-profile'>
            <div><FaFacebookSquare/><a href="https://fo-fo.facebook.com/BenyBiton.D/?ref=py_c" target='_blank' className='icon-title'>BenyBiton</a></div>
            <div><FaInstagramSquare/><a href="https://www.instagram.com/beni__biton/" target='_blank' className='icon-title'>beni__biton</a></div>
            <div><FaPhoneAlt/><a href="" target='_blank' className='icon-title'>08‑6563140</a>	</div>
        
           </div>

           <div className='lower-container'>
                <div dir='rtl' className='job'><FaSuitcase/><h4 className='h4class'>תפקיד:</h4 ><h4 className='h4class'>ראש העיר</h4 ></div>
                <div dir='rtl' className='birthdate'><FaBirthdayCake/><h4 className='h4class'>תאריך לידה:</h4 ><h4 className='h4class'>06.10.1959</h4 ></div>
                <div dir='rtl' className='email'><FaMailBulk/><h4 className='h4class'>דואר אלקארוני:</h4 ><h4 className='h4class'>benib@dimona.muni.il</h4></div>

                <div></div>
           </div>
        </div>

    )
    
}
export default Profile