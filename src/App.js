import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
