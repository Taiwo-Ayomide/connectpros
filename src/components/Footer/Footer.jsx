import React from 'react';
import "./Footer.css";
import cp from "../../../public/cp.png"

const Footer = () => {
  return (
    <div className='_tyrf' data-aos="fade-up" data-aos-duration="3000">
      <div className='yueo__fdt'>
        <section className='Left'>
          <div>
            <img className='ufje_jigt' src={cp} alt="logo" />
            <p className='__text'>Connecting professionals from the world together</p>
          </div>
          <div>
            <aside>
              <h1>Useful Navigations</h1>
            </aside>
            <ul>
              <li>Features</li>
              <li>Security</li>
              <li>About us</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <aside>
              <h1>Get ConnectPro</h1>
            </aside>
            <ul>
              <li>Android</li>
              <li>iPhone</li>
              <li>Mac/PC</li>
              <li>ConnectPro Web</li>
            </ul>
          </div>
          <div>
            <aside>
              <h1>Need help?</h1>
            </aside>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Download</li>
              <li>Security Adversories</li>
            </ul>
          </div>
        </section>
        {/* SECOND SECTION */}
        <section className='sec'>
            <div className='Last'>
              <div>
                <h1 className='year'>2024©ConnectPro<br/>LLC</h1>
              </div>
              <div>
                <h1 className='terms'>Teams and Privacy<br/>Policy</h1>
              </div>
              <div>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>ConnectPro</li>
                </ul>
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Footer