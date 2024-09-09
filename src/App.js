import logo from './logo.svg';
import './App.css';
import {BaseForm} from "./form/BaseForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {BaseForm()}
      </header>
    </div>
  );
}

export default App;
