import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import './Styles.css';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Hi 👋, <br></br>My name is Sivashankar Murali</h1>
        <h3>I build things for mobile and web applications</h3>
        {/* <div className="hero-icons">
          <FaGithub />
          <FaLinkedinIn />
          <MdAlternateEmail />
        </div> */}
      </div>
      <img
        src={profileImage}
        alt="Profile"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;