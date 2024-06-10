import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
import "./Staff.css"
import Footer from '../../components/Footer/Footer'

const Staff = () => {
  return (
    <>
    <div className='card'>
            {/* <Navbar/> */}
            <div class="rowit">
                <div className="columnbia">
                    <div className="card1">
                    <img src="Ayo.png" alt="ceo" style={{ width: "100%", height: "28rem" }} />
                    <div className="contain">
                        <h2>TAIWO AYOMIDE</h2>
                        <p className="titlea">CEO & Founder</p>
                        <p>Lead Software Engineer ConnectPro</p>
                        <p>taiwoayomide202@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="columnbia">
                    <div className="card1">
                        <img src="Jeduthun.png" alt="jed" style={{ width: "100%", height: "30rem" }} />
                    <div className="contain">
                        <h2>OLUWAGBEMI JEDUTHUN</h2>
                        <p className="titlea">Senior Backend Engineer</p>
                        {/* <p>Lead Backend Engineer</p> */}
                        <p>joluwagbemijeduthun2001@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="columnbia">
                    <div className="card1">
                    <img src="Adenike.png" alt="nike" style={{ width: "100%", height: "30rem" }} />
                    <div className="contain">
                        <h2>AJIBADE ADENIKE</h2>
                        <p className="titlea">Senior Frontend Engineer</p>
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        <p>oluwadamilolaajibade2013@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="rowit" data-aos="fade-up" data-aos-duration="3000">
                <div className="columnbia">
                    <div className="card1">
                    <img src="Bunmi.png" alt="bunmi" style={{ width: "100%", height: "31rem" }} />
                    <div className="contain">
                        <h2>AJIBADE OLUWABUNMI</h2>
                        <p className="titlea">Lead Content Writing & social Media Representative</p>
                        {/* <p>Lead Software Engineer ConnectPro</p> */}
                        <p>ajibadeoluwabunmi2022@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="columnbia">
                    <div className="card1">
                        <img src="David.png" alt="bdo" style={{ width: "100%", height: "31rem" }} />
                    <div className="contain">
                        <h2>DAVID BOLAJI</h2>
                        <p className="titlea">Senior Graphic Designer</p>
                        {/* <p>Lead Backend Engineer</p> */}
                        <p>bolajidavid3131@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="columnbia">
                    <div className="card1">
                    <img src="Ewuola.png" alt="reuben" style={{ width: "100%", height: "31rem" }} />
                    <div className="contain">
                        <h2>EWUOLA REUBEN</h2>
                        <p className="titlea">Frontend Engineer</p>
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        <p>reubenolusegun2004@gmail.com</p>
                        <p><button className="buttonia">Contact</button></p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="rowit" data-aos="fade-up" data-aos-duration="3000">
                <div className="columnbia">
                    <div className="card1">
                        <img src="Tiolu.png" alt="tolu" style={{ width: "100%", height: "31rem" }} />
                        <div className="contain">
                            <h2>AKERELE TIOLUWANIMI</h2>
                            <p className="titlea">Video Editor & Motion Graphics</p>
                            {/* <p>Lead Software Engineer ConnectPro</p> */}
                            <p>atoluwani11@gmail.com</p>
                            <p><button className="buttonia">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="columnbia">
                        <div className="card1">
                            <img src="Toyin.png" alt="toyin" style={{ width: "100%", height: "31rem" }} />
                            <div className="contain">
                                <h2>AJIBADE OLUWATOYIN</h2>
                                <p className="titlea">Graphic Designer</p>
                                {/* <p>Lead Software Engineer ConnectPro</p> */}
                                <p>victory.ajibade@gmail.com</p>
                                <p><button className="buttonia">Contact</button></p>
                            </div>
                        </div>
                </div>
                <div className="columnbia">
                        <div className="card1">
                            <img src="Victor.png" alt="victor" style={{ width: "100%", height: "31rem" }} />
                            <div className="contain">
                                <h2>OYEDIRAN VICTOR</h2>
                                <p className="titlea">Photographer</p>
                                {/* <p>Lead Software Engineer ConnectPro</p> */}
                                <p>oyediranvictoroluwafunso@gmail.com</p>
                                <p><button className="buttonia">Contact</button></p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="rowit" data-aos="fade-up" data-aos-duration="3000">
                <div className="columnbia">
                    <div className="card1">
                        <img src="Seyi.png" alt="seyi" style={{ width: "100%", height: "31rem" }} />
                        <div className="contain">
                            <h2>OYESUSI OLUWASEYI</h2>
                            <p className="titlea">Content Writing</p>
                            {/* <p>Lead Software Engineer ConnectPro</p> */}
                            <p>oyesusihellen@gmail.com</p>
                            <p><button className="buttonia">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Footer />
    </>
  )
}

export default Staff