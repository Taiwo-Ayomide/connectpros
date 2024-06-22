import React from 'react'
// import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Feature from '../../components/Feature1/Feature';
import Advert from '../../components/Advert/Advert';
import Sign from '../../components/Sign/Sign';
import Screenshot from '../../components/ScreenShot/Screenshot';
import Stream from '../../components/Stream/Stream';
import "./Features.css"
import Media from '../../components/Multimedia/Media';
import Record from '../../components/Record/Record';
import Video from '../../components/VIdeo/Video';
import Emoji from '../../components/Emoji/Emoji';
import Language from '../../components/Language/Language';
import Celebrity from '../../components/Celebrity/Celebrity';

const Features = () => {
    return(
        <>
            {/* <Navbar/> */}
            <div className='all'>
                <Celebrity/>
                <Media/>
                <Feature/>
                <Language/>
                <Video />
                <Advert/>
                <Record/>
                <Emoji />
                <Sign/>
                <Screenshot/>
                <Stream/>
                <Footer/>
            </div>
        </>
    );
};

export default Features