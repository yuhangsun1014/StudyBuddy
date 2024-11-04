import logo from './logo.svg';
import './App.css';

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
        <SignInButton />
        <SignUpButton />
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
