import logo from './beer.svg';
import './App.css';
import MyButton from './MyButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Go to <code>https://zaxal.com</code>
        </p>
      </header>
      <div className="MyButton">
        <MyButton/>
      </div>
    </div>
  );
}

export default App;
