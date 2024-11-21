import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Hero />
          <Services />
          <Gallery />
          <div className="section-container">
              <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
