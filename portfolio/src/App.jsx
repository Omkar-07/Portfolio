// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Skills />
    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default App;