import logo from './logo.svg';
import './App.css';
import {BaseForm} from "./form/BaseForm";
import {SummaryBase} from "./summary/SummaryBase";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {<BaseForm/>}
          {<SummaryBase/>}
      </header>
    </div>
  );
}

export default App;
