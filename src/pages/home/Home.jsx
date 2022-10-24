import './home.css';
import PastEventsCards from "../../components/home/past-events-cards";
import FutureEventsCards from "../../components/home/future-events-cards";
import SocialMediaCards from "../../components/home/social-media-cards";
import Chat from '../../components/messag/Chat';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';



const Home = () => {
    const role = useSelector((state) => state.role.role);

    return (
        <div>
            <PastEventsCards />

            <FutureEventsCards />
            {(role==="ADMIN"||role==="SUPERADMIN")? <Chat /> :<div/>}

            <SocialMediaCards />

            <Footer />


        </div>

    )
}
export default Home



