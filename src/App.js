// App.jsx
import React from "react";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./index.css";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans">
        {/* Include the Navbar at the top */}
        <Navbar />

        {/* Your sections */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="tech-stack">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
