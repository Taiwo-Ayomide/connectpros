import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Features from "./pages/Features/Features";
import Download from "./pages/Download/Download";
import Staff from "./pages/Staffs/Staff";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

 return (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/download" element={<Download/>} />
      </Routes>
    </main>

  </Router>
 );
};

export default App;