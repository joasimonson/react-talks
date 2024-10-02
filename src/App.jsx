import InlineStyleComponent from "./components/InlineStyleComponent";
import CSSStyleComponent from "./components/CSSStyleComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <InlineStyleComponent />
      <CSSStyleComponent />
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/inline">InlineStyleComponent</Link>
            </li>
            <li>
              <Link to="/cssStyleSheet">CSSStyleComponent</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/inline" element={<InlineStyleComponent />} />
          <Route path="/cssStyleSheet" element={<CSSStyleComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
