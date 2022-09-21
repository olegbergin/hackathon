import './fotter.css';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Fotter() {
    return(
        <div className='fotter-container'>
             <p></p>
             <p></p>
             <p></p>
             <a href="" target='_blank'>לאתר העירייה</a>
             <a href="https://www.dimona.muni.il/29/" target='_blank'>דימונה אודות</a>
             <a href="https://www.dimona.muni.il/190/" target='_blank'>מועצת העיר</a>
             <a href="https://www.dimona.muni.il/197/" target='_blank'>דו"ח סיכום פעילות</a>
             <a href="https://www.dimona.muni.il/198/" target='_blank'>אסטרטגיה</a>
             <a href="https://www.dimona.muni.il/199/" target='_blank'>מבקרת העירייה</a>
             <a href="https://www.dimona.muni.il/205/" target='_blank'>מבנה אירגוני</a>
             <a href="https://www.dimona.muni.il/98/" target='_blank'>המחלקה המשפטית</a>
             <a href="https://www.dimona.muni.il/69/" target='_blank'>שירותים ממשלתיים</a>
             <a href="https://www.dimona.muni.il/events/" target='_blank'>לוח אירועים</a>
             <a href="https://www.dimona.muni.il/239/" target='_blank'>פנייה למחלקות עירייה</a>
             <a href="https://www.dimona.muni.il/204/" target='_blank'>שעות קבלה</a>
            <div className='social-icons'>
             <FaFacebook/>
             <FaYoutube/>
             <FaTwitter/>
             <FaWhatsapp/>
             </div>


        </div>
    )
    
}

export default Fotter;