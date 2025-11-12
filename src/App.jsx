import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLanguageOutline } from "react-icons/io5";
import { Mail, PhoneOutgoing } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Edu_Exp from './components/Edu_Exp';
import Cert_Skills from './components/Cert_Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Edu_Exp />
        <Cert_Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App