import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
