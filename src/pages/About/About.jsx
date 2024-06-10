// import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./About.css"

const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='general'>
        <div data-aos="fade-up" data-aos-duration="3000">
            <connectpro>
                <h1 className='text'>ConnectPro is a professional networking app designed to help people make business connections, share their experiences and resume, and find job by bringing professionals in different fields together.</h1>
            </connectpro>
        </div>
        <div className='inner' data-aos="fade-up" data-aos-duration="3000">
            <div>
                <h1 className='aims'>AIMS</h1>
            </div>
            <ul>
                <li className='li'>To create a platform for users to connect, share, and communicate with each other</li>
                <li className='li'>To provide a user-friendly and engaging experience for users</li>
                <li className='li'>To become a leading social media platform globally.</li>
            </ul>
        </div>
        <div className='inner' data-aos="fade-up" data-aos-duration="3000">
            <div>
                <h1 className='aims'>OBJECTIVES</h1>
            </div>
            <ul data-aos="fade-up" data-aos-duration="3000">
                <li className='li'>To ensure data privacy and security for users</li>
                <li className='li'>To expand the platform's features and functionality to meet evolving user needs.</li>
                <li className='li'>To build strategic partnership and collaborations</li>
                <li className='li'>To achieve a certain level of brand recognition and awareness</li>
            </ul>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
