import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Advert from '../components/Advert/Advert'
import Sign from '../components/Sign/Sign'
import Feature from '../components/Feature1/Feature'
import Screenshot from '../components/ScreenShot/Screenshot'
import Stream from '../components/Stream/Stream'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Advert />
        <Sign />
        <Feature/>
        <Screenshot/>
        <Stream/>
        <Footer/>
    </div>
  )
}

export default Home