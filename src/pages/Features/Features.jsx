import React from 'react'
// import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Feature from '../../components/Feature1/Feature';
import Advert from '../../components/Advert/Advert';
import Sign from '../../components/Sign/Sign';
import Screenshot from '../../components/ScreenShot/Screenshot';
import Stream from '../../components/Stream/Stream';
import "./Features.css"

const Features = () => {
    return(
        <>
            {/* <Navbar/> */}
            <div className='all'>
                <Feature/>
                <Advert/>
                <Sign/>
                <Screenshot/>
                <Stream/>
                <Footer/>
            </div>
        </>
    );
};

export default Features