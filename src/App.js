import logo from './logo.svg';
import './App.css';
import {BaseForm} from "./form/BaseForm";
import formStore from "./stores/formStore";
import {SummaryBase} from "./summary/SummaryBase";


function App() {
    const {registered, queryMessage} = formStore((state) => ({
        registered:  state.registered,
        queryMessage: state.queryMessage
        //queryMessage: state.queryMessage()
    }))
    // debugger
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {<BaseForm/>}
        {registered && <SummaryBase/>}
          //{registered && (<h3>{queryMessage()}</h3>)}
        {registered && (<h3>{queryMessage}</h3>)}
      </header>
    </div>
  );
}

export default App;
