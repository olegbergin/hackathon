import './home.css';
import PastEventsCards from "../../components/home/past-events-cards";
import FutureEventsCards from "../../components/home/future-events-cards";
import SocialMediaCards from "../../components/home/social-media-cards";
import Fotter from '../../components/fotter';
import Chat from '../../components/messag/Chat';
import { useSelector } from 'react-redux';



const Home = () => {
    const role = useSelector((state) => state.role.role);

    return (
        <div>
            <PastEventsCards />

            <FutureEventsCards />
            {(role=="ADMIN"||role=="SUPERADMIN")? <Chat /> :<div/>}

            <SocialMediaCards />

            <Fotter />


        </div>

    )
}
export default Home



