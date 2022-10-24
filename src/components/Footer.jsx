import './fotter.css';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return(
        <div className='fotter-container1'>
        <div className='fotter-container'>

             <a href="https://www.dimona.muni.il/" target='_blank' rel="noreferrer">לאתר העירייה</a>
             <a href="https://www.dimona.muni.il/29/" target='_blank' rel="noreferrer">דימונה אודות</a>
             <a href="https://www.dimona.muni.il/190/" target='_blank' rel="noreferrer">מועצת העיר</a>
             <a href="https://www.dimona.muni.il/197/" target='_blank' rel="noreferrer">דו"ח סיכום פעילות</a>
             <a href="https://www.dimona.muni.il/198/" target='_blank' rel="noreferrer">אסטרטגיה</a>
             <a href="https://www.dimona.muni.il/199/" target='_blank' rel="noreferrer">מבקרת העירייה</a>
             <a href="https://www.dimona.muni.il/205/" target='_blank' rel="noreferrer">מבנה אירגוני</a>
             <a href="https://www.dimona.muni.il/98/" target='_blank' rel="noreferrer">המחלקה המשפטית</a>
             <a href="https://www.dimona.muni.il/69/" target='_blank' rel="noreferrer">שירותים ממשלתיים</a>
             <a href="https://www.dimona.muni.il/events/" target='_blank' rel="noreferrer">לוח אירועים</a>
             <a href="https://www.dimona.muni.il/239/" target='_blank' rel="noreferrer">פנייה למחלקות עירייה</a>
             <a href="https://www.dimona.muni.il/204/" target='_blank' rel="noreferrer">שעות קבלה</a>
        </div>

            <div className='social-icons'>
             <FaFacebook/>
             <FaYoutube/>
             <FaTwitter/>
             <FaWhatsapp/>
             </div>


        </div>
    )
    
}