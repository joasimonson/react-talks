import logo from './logo.svg';
import './App.css';
import {BaseForm} from "./form/BaseForm";
import formStore from "./stores/formStore";
import {SummaryBase} from "./summary/SummaryBase";


function App() {
    const {registered} = formStore((state) => ({
        registered:  state.registered,
    }))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {<BaseForm/>}
        {registered && <SummaryBase/>}
      </header>
    </div>
  );
}

export default App;
