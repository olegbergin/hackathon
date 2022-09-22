import './home.css';
import PastEventsCards from "../../components/home/Past-events-cards";
import FutureEventsCards from "../../components/home/Future-events-cards";
import SocialMediaCards from "../../components/home/Social-media-cards";
import Fotter from '../../components/Fotter';
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



