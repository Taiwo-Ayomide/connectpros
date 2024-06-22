import React from 'react'
import "./Download.css"
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div>
        <div className='gen'>
            <h1 className='inner'>This page will be made ready as soon as the app is ready. The ConnectPro Application is currently under development. We will let you know as soon as it is ready. Kindly fill the form below to join our waiting list. We will email you when we deploy the app.</h1>
            <Link to="https://connectprowaitlist.netlify.app">
              <button className='btn'>Click here to join</button>
            </Link>
        </div>

    </div>
  )
}

export default Download
