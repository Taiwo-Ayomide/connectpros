import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Advert from '../components/Advert/Advert'
import Sign from '../components/Sign/Sign'
import Feature from '../components/Feature1/Feature'
import Screenshot from '../components/ScreenShot/Screenshot'
import Stream from '../components/Stream/Stream'
import Footer from '../components/Footer/Footer'
import Celebrity from '../components/Celebrity/Celebrity'
import Record from '../components/Record/Record'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Advert />
        <Sign />
        <Celebrity/>
        <Feature/>
        <Screenshot/>
        <Record/>
        <Stream/>
        <Footer/>
    </div>
  )
}

export default Home