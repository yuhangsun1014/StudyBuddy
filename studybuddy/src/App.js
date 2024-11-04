import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Hero />
    </div>

  );
}

function SignInButton() {
  return (
    <button>
      Sign In
    </button>
  );
}

function SignUpButton() {
  return (
    <button>
      Sign Up
    </button>
  );
}
export default App;
