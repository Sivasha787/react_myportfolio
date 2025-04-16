import React from 'react';
import './Styles.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>
        I’m a passionate web developer who loves creating clean, modern, and user-friendly websites.
        With a background in Electronics & Communication, I've transitioned into tech and have built
        a range of projects using HTML, CSS, JavaScript, React, and modern tools.
      </p>
      <p>
        I'm constantly learning, exploring new technologies, and collaborating with others in the tech space.
        I'm particularly interested in frontend development and UI/UX design.
      </p>

      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Junior Web Developer <span className="badge full-time">Full Time</span></h3>
        <p className="company">Dr. Rajkumar's Learning App • Bengaluru</p>
        <p className="date">Sep 2021 – Dec 2021</p>
      </div>

      <div className="experience-item">
        <h3>Web Development Intern <span className="badge internship">Internship</span></h3>
        <p className="company">IonPixelz Web Solutions • Bengaluru</p>
        <p className="date">Sep 2021 – Dec 2021</p>
      </div>

      <div className="experience-item">
        <h3>SEO / SEM Specialist <span className="badge internship">Internship</span></h3>
        <p className="company">HAAPS • Bengaluru</p>
        <p className="date">Sep 2021 – Dec 2021</p>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor in Electronics & Communication <span className="badge full-time">Full Time</span></h3>
        <p className="company">Bangalore Institute of Technology</p>
        <p className="date">Aug 2015 – Dec 2020</p>
      </div>
    </div>
  );
};

export default AboutMe;
