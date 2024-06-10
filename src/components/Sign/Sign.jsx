import React from 'react'
import "./Sign.css";
import ui from "../../../public/ui.png";

const Sign = () => {
  return (
    <div>
        <div className='icons' data-aos="fade-up" data-aos-duration="3000">
            <img className='icons-connect' src={ui} alt="icon-connectPro" />
            <img className='icons-connect' src={ui} alt="icon-connectPro" />
            <img className='icons-connect' src={ui} alt="icon-connectPro" />
        </div>
        <div className='cjfj__dnf' data-aos="flip-left" data-aos-duration="3000">
            <h1 className='gfs__gfv'>With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h1>
        </div>
        <div>
            <img className='dtdv__gfc' src="315632381_5616928641708856_9210500231334849736_n.png" alt="" />
        </div>
    </div>
  )
}

export default Sign
