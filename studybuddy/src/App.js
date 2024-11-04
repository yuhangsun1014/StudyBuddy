import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function SignInButton(){
  return(
    <button>
      Sign In
    </button>
  );
}

function SignUpButton(){
  return(
    <button>
      Sign Up
    </button>
  );
}
export default App;
