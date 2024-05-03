import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import VisitorCounter from './components/visitor/visitor';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <VisitorCounter/>
      <Footer/>
    </div>
  );
}

export default App;
