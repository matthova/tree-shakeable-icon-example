import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Activity from "./icons/Activity";
import Flag from "./icons/Flag";

import { IconType } from "./IconBase";

const Button: React.FC<{ Icon?: IconType }> = ({ children, Icon }) => {
  return (
    <button>
      {Icon ? <Icon size={20} color="red" /> : null}
      {children}
    </button>
  );
};

function App() {
  const go = !!Math.round(Math.random());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button Icon={go ? Activity : Flag}>ope</Button>
        <Activity size={40} color="orange" />
      </header>
    </div>
  );
}

export default App;
