import Navbar from '../Navbar'
import HotelHeader from '../HotelHeader'
import PopularRooms  from '../PopularRooms'
import HotelFacilities from '../HotelFacilities'
import History from '../History'
import FAQs from '../FAQs'
import Map from '../Map'
import Footer from '../Footer'

import './index.css'

const Home = () => (
    <div className = 'hotel-booking-home-bg'>    
        <Navbar />
        <HotelHeader />
        <PopularRooms />
        <HotelFacilities />
        <History />
        <FAQs />
        <Map />
        <Footer />
    </div >
)

export default Home