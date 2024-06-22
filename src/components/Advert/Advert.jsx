import React from 'react'
import "./Advert.css"
import { NavLink } from "react-router-dom";

const Advert = () => {
  return (
    <>
        <div className='advert__img'>
            <img className='the__img' src="selec.png" alt="woman" />
        </div>
        <div id='tfa__gtf'>
            <div className='gyr__tftwa'>
                <h1 className='ygt__gji' data-aos="fade-up" data-aos-duration="3000">Connecting Professionals in the world together.</h1>
            </div>
            <div className='gyr__hfgt'>
                <NavLink to="/download">
                    <button className='buttoni' data-aos="fade-up" data-aos-duration="3000"><span>Download</span></button>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Advert
